import {
  Colors,
  Router,
  Lightning,
  VideoPlayer,
} from '@lightningjs/sdk';
import { List } from '@lightningjs/ui';
import { destroyMovieTorrent } from '../lib/api';
import { Dialog } from '../widgets';
import { Page } from '../components';
import { IconKey } from '../components/Key';

export default class Player extends Page {
    static _template() {
        return {
            Dialog: {
                visible: false, type: Dialog, zIndex: 101
            },
            Placeholder: {alpha: 0.001, w: 1920, h: 1080},
            ScreenBlock: {w: 1920, h: 1080, rect: true, color: Colors('black').get()},
            Overlay: {
                Top: {rect: true, w: 1920, h: 540, colorBottom: Colors('black').alpha(0.3).get(), colorTop: Colors('black').alpha(0.85).get()},
                Bottom: {rect: true, w: 1920, h: 540, mountY: 1, y: 1080, colorTop: Colors('black').alpha(0.3).get(), colorBottom: Colors('black').alpha(0.85).get()}
            },
            Title: {x: 230, y: 90, w: 1060, text: {fontFace: 'Bold', wrap: true, fontSize: 74, lineHeight: 88}},
            PlayerButtons: {
                y: 890, x: 960, mountX: 0.5, type: List, autoResize: true, spacing: 50, forceLoad: true,
            },
            Progressbar: {y: 830, x: 960, w: 1620, h: 8, mountX: 0.5,
                Frame: {
                    w: w => w, h: h => h, rect: true, alpha: 0.7, shader: {type: Lightning.shaders.RoundedRectangle, radius: 2}
                },
                Troth: {
                    mountY: 0.5, y: 4, x: -10, w: 20, h: 20, rect: true, shader: {type: Lightning.shaders.RoundedRectangle, radius: 10}
                },
                TimeLeft: {
                    mountX: 1,
                    x: 1620,
                    y: 20,
                    text: {
                        fontSize: 24,
                        text: '00:00:00',
                        lineHeight: 30,
                    }
                },
                CurrentTime: {
                    mountX: 1,
                    x: 75,
                    y: 20,
                    text: {
                        fontSize: 24,
                        text: '00:00:00',
                        lineHeight: 30,
                    }
                }
            },
        }
    }

    pageTransition(pageIn, pageOut) {
        const widgets = pageIn.widgets;
        //hide all widgets in app;
        for(let key in widgets) {
            widgets[key].setSmooth('alpha', 0, {delay: 0.0, duration: 0.2});
        }
        //fire super
        return super.pageTransition(pageIn, pageOut);
    }

    setData(data) {
        this._data = data;
        this._update();
        this.movieId = data.id;

        if (!data.videoUrl){
            // Router.back()
            this.showError('Video MP4 File Not Found');
            return
        }

        this.initializeVideo(data.videoUrl);
    }

    showError(message) {
        const dialog = this.tag('Dialog');
        dialog.open({header: "Error!", message});

        setTimeout(() => {
            dialog.close();
            Router.back()

        }, 3000)
    }

    _setup() {
        //map player buttons
        const buttons = ['previous', 'play', 'next'].map((icon) => {
            return {type: IconKey, w: 110, h: 110, icon: `images/${icon}.png`, action: icon}
        });

        //playerButtons list
        const playerButtons = this.tag('PlayerButtons')
        //add mapped player buttons
        playerButtons.add(buttons);
        //force playerButtons list index to 1
        playerButtons.index = 1;

        //use the animation functinality to fake playback replace the following events with player events
        this._progressAnimation = this.animation({duration: 60, repeat: -1, actions: [
        ]});


        this._progressAnimation.on('progress', () => {
            const { currentTime, duration } = VideoPlayer
            const w = this.tag('Progressbar').w;
            this.tag('Troth').w = w * (currentTime / duration)
        });

        //When the asset is starting
        this._progressAnimation.on('start', () => {
            this._showOverlay();
            this._startOverlayTimeout();
            this._updatePlayButton(false);
            this._hideScreenBlock();
        });

        //This event should be fired when the play event is fired. resume == play
        this._progressAnimation.on('resume', () => {
            this._startOverlayTimeout();
            this._updatePlayButton(false);
        })

        //this event should be fired when the pause event is fired.
        this._progressAnimation.on('pause', () => {
            this._updatePlayButton(true);
        });

        //this event should be fired when the stop event is fired.
        this._progressAnimation.on('stop', (p) => {
            this._showOverlay();
            this._showScreenBlock();
        });

        this.tag('Placeholder').on('txLoaded', () => {
            this.tag('Placeholder').setSmooth('alpha', 1, {duration: 0.1});
            this._progressAnimation.start();
        });

        const blackAlpha = Colors('black').alpha(0.3).get();

        //create overlay hide animation
        this._hideControls = this.animation({duration: 0.2, stopMethod: 'reverse', actions: [
            {t: 'Top', p: 'alpha', v: {0: 1, 1: 0}},
            {t: 'Top', p: 'colorBottom', v: {0: blackAlpha, 1: 0x00000000}},
            {t: 'Title', p: 'y', v: {0: 90, 1: 50}},
            {t: 'Title', p: 'alpha', v: {0: 1, 1: 0}},
            {t: 'Bottom', p: 'alpha', v: {0: 1, 1: 0}},
            {t: 'Bottom', p: 'colorTop', v: {0: blackAlpha, 1: 0x00000000}},
            {t: 'Progressbar', p: 'y', v: {0: 830, 1: 870}},
            {t: 'Progressbar', p: 'alpha', v: {0: 1, 1: 0}},
            {t: 'PlayerButtons', p: 'y', v: {0: 890, 1: 930}},
            {t: 'PlayerButtons', p: 'alpha', v: {0: 1, 1: 0}},
        ]});

        this._hideControls.on('stopFinish', () => {
            //when controls are visible try hiding after delay
            this._startOverlayTimeout();
        });
    }

    _showOverlay() {
        //show controls.
        this._hideControls.stop();
    }

    _startOverlayTimeout() {
        this._clearOverlayTimeout();
        //create timeout for 3000 ms
        this._overlayTimeout = setTimeout(() => {
            //if active and player is progressing (player is playing)
            if(this.active && this._progressAnimation.isActive()) {
                this._hideControls.start();
            }
        }, 3000)
    }

    _clearOverlayTimeout() {
        if(this._overlayTimeout) {
            clearTimeout(this._overlayTimeout);
        }
    }

    _update() {
        // //if not active or no data dont update
        // if(!this.active || !this._data) {
        //     return;
        // }
        // const {title, backdrop} = this._data;
        // this.patch({
        //     Placeholder: {texture: Img(backdrop).contain(1920, 1080)},
        //     Title: {text: title}
        // });
    }

     _showScreenBlock() {
        this.tag('ScreenBlock').alpha = 1;
    }

    _hideScreenBlock() {
        this.tag('ScreenBlock').alpha = 0;
    }

    _updatePlayButton(toPlay = true) {
        //update play pause buttong to play icon when toPlay is true.
        this.tag('PlayerButtons').items[1].icon = `images/${toPlay ? 'play' : 'pause'}.png`;
        if(!toPlay) {
            this._startOverlayTimeout();
        }
    }


    $videoPlayerPlaying () {
        this._hideScreenBlock();
        this._updatePlayButton(false)
        this._progressAnimation.play()
    }

    formatTime (seconds) {
        if (!seconds) {
            return '00:00:00';
        }
        return new Date(seconds * 1000).toISOString().slice(11, -5)
    }

    // this will be invoked on timeupdate
    $videoPlayerTimeUpdate(_, currentTime) {
        const formattedCurrentTime = this.formatTime(currentTime);
        const formattedTimeLeft = this.formatTime(VideoPlayer.duration - currentTime);
        this.tag('CurrentTime').text = formattedCurrentTime;
        this.tag('TimeLeft').text = formattedTimeLeft;
    }

   $videoCanPlay() {
        const dialog = this.tag('Dialog');
        dialog.close()
    }

    // this will be invoked when the video ends
    $videoPlayerEnded() {
 
    }
 
    // this will be invoked when the video starts playing
    $videoPlayerPlay() {
 
    }
 
    // this will be invoked when the video pauses
    $videoPlayerPause() {
 
    }
 
    // this will be invoked when the video stops
    $videoPlayerStop() {
 
    }
 
    // this will be invoked when the video raises an error
    $videoPlayerError() {
 
    }

    _handleEnter() {
        const currentButton = this.tag('PlayerButtons').currentItem;

        switch(currentButton.action) {
            case 'play':
                if(this._progressAnimation.isActive()) {
                    this._progressAnimation.pause();
                    VideoPlayer.pause()
                }
                else {
                    this._progressAnimation.play();
                    VideoPlayer.play()
                }
                break;
            case 'next':
                VideoPlayer.skip(30);
                break;
                case 'previous':
                VideoPlayer.skip(-30);
                break;
        }
    }

    _captureKey() {
        if(this._hideControls.p !== 0) {
            this._showOverlay();
        }
        return false;
    }

    _firstActive() {
        // this._update();
        // this.tag('Loader').start();
    }

    initializeVideo(videoUrl){
        VideoPlayer._videoEl.style.backgroundColor = 'black';
        VideoPlayer.consumer(this)

        setTimeout(()=> {
            VideoPlayer.open(videoUrl);
        }, 3000)
    }

    _inactive() {
        super._inactive();
        //stop fake media progress
        this._progressAnimation.stopNow();
        //show controls instantly reverting it to starting point
        this._hideControls.stopNow();

        VideoPlayer.close()

        //playback placeholder remove from code when implementing player
        this.tag('Placeholder').alpha = 0.001;
    }

    _getFocused() {
        return this.tag('PlayerButtons');
    }
    
    get hideBackground() {
        return true;
    }


     _handleBack () {
         destroyMovieTorrent(this.params.mediaId, this.params.mediaQuality).then(
            (data) => {
                console.log(data)
            }
         )

        const navCheck = Router.isNavigating();
        if(navCheck) {
            return true;
        }
        return false;

    }
}