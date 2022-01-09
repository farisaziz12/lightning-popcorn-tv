import { Lightning, Img, Colors } from '@lightningjs/sdk';
import { transition, extractCommonColor } from '../lib/helpers';
import { getBackdropUrl } from '../lib/api';

export default class Backdrop extends Lightning.Component {
    static _template() {
        return {
            w: 1920,
            h: 1080,
            ImgSource: {
                x: -299.5, w: 300, h: 168,
            },
            Backdrop: {
                alpha: 0.001, w: w => w, h: 740, shader: {type: Lightning.shaders.FadeOut, fade: [0, 900, 900, 0]}, transitions: {alpha: {duration: 1}},
            }
        }
    }

    _construct() {
        this._targetSrc = null;
    }

    _init() {
        const backdrop = this.tag('Backdrop');
        this._transitionAlpha = backdrop.transition('alpha');
        this.tag('Backdrop').on('txLoaded', (texture) => {
            if(this._backdrop.src === texture.src) {
                this._backdropLoaded = true;
                this._animateBackdrop();
            }
        });
        this.tag('ImgSource').on('txError', (texture) => {
            this.fireAncestors('$updateAmbientBackground', {color: 0xff9300e0});
        });
        this.tag('ImgSource').on('txLoaded', (texture) => {
            if(this._imgSource.src === texture.src) {
                this._imgSrcLoaded = texture.source.nativeTexture;
                this._animateBackdrop();
            }
        });
        this._transitionAlpha.on('finish', () => {
            if(backdrop.alpha === 0.001) {
                this._loadSrc();
            }
        });
        this._baseColor = Colors('background').get();
    }

    _animateBackdrop() {
        if(!this._backdropLoaded || !this._imgSrcLoaded) {
            return;
        }
        if(this.stage.gl) {
            const color = this._extractedColor = extractCommonColor(this._imgSrcLoaded, this.stage.gl);
            this.fireAncestors('$updateAmbientBackground', {color});
        }
        this._backdropLoaded = false;
        this._imgSrcLoaded = false;
        transition(this._transitionAlpha, 1);
    }

    _loadSrc() {
        if(this._debounce) {
            clearTimeout(this._debounce);
        }
        this._debounce = setTimeout(() => {
            this._loadTextures(this._targetSrc);
        }, 50);
    }

    _loadTextures(src) {
        this._imgSource = Img(src).contain(300, 168);
        this._backdrop = Img(src).cover(1920, 740);

        this.tag('ImgSource').texture = this._imgSource;
        this.tag('Backdrop').texture = this._backdrop;
    }

    async update(movieId) {
        const backdropUrl = await getBackdropUrl(movieId)

        if(backdropUrl === this._targetSrc) {
            this.fireAncestors('$updateAmbientBackground', {color: this._extractedColor});
            return;
        }
        this.setSmooth('alpha', !!(backdropUrl !== null));
        if(this.tag('Backdrop').alpha === 0.001) {
            this._loadTextures(backdropUrl);
        }
        else {
            transition(this._transitionAlpha, 0.001);
        }
        this._targetSrc = backdropUrl;
    }
}