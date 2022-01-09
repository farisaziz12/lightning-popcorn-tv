import { Lightning, Img, Utils, Router } from "@lightningjs/sdk";
import { Button } from "../components";

export default class Detail extends Lightning.Component {
    static _template() {
        return {
            zIndex: 9,
            Info: { x: 230, y: 90, alpha: 0.001, flex: {direction: 'column'},
                Title: {w: 1060, renderOffscreen: true, text: {fontFace: 'Bold', wrap: true, fontSize: 74, lineHeight: 88}},
                DescriptionWrapper: { h: 580, w: 960,
                    Description: {w: 960, renderOffscreen: true, text: {fontFace: 'Regular', wrap: true, maxLines: 4, fontSize: 36, lineHeight: 44}},
                    DescriptionFull: {alpha: 0, w: 960, renderOffscreen: true, text: {fontFace: 'Regular', wrap: true, maxLines: 10, fontSize: 36, lineHeight: 44}}
                }
            },
            MoreInfo: {
                alpha: 0.001, mountX: 1, x: 1690, y: 90, w: 300, h: 450,
                LargePoster: {
                    shader: {type: Lightning.shaders.RoundedRectangle, radius: 18}
                },
                PlayButton: {
                    type: Button, y: 780, w: 90, h: 90, text: { fontSize: 24, text: 'Watch Now', lineHeight: 30}, icon: 'images/play.png', text: 'Watch Now', content: {w: 70, h: 70}
                },
                Runtime: {
                    y: 805, x: 120, text: {fontFace: 'Bold', fontSize: 32, lineHeight: 28},
                }
            },
            MoreInfo2: {
                alpha: 0.001, x: 230, y: 40, flex: {direction: 'column'},
                TitleInfo: {text: {fontFace: 'MediumItalic', fontSize: 32, lineHeight: 28}}
            }
        }
    }
    
    _init() {
        const poster = this.tag('LargePoster');
        const moreInfo = this.tag('MoreInfo');
        poster.on('txError', () => {
            poster.src = Utils.asset('images/largeMissingImage.jpg');
        });
        poster.on('txLoaded', () => {
            moreInfo.x = 1730;
            this.patch({
                Info: {
                    DescriptionWrapper: {
                        Description: {smooth: {alpha: 0}},
                        DescriptionFull: {smooth: {alpha: 1}},
                    }
                },
                MoreInfo: {
                    smooth: {
                        x: [1690, {duration: 0.2}],
                        alpha: [1, {duration: 0.2}]
                    }
                },
                MoreInfo2: {
                    smooth: {
                        alpha: 1
                    }
                }
            });
        });

        const fullDescription = this.tag('DescriptionFull');
        fullDescription.on('txLoaded', () => {
            this.tag('MoreInfo2').y = 110 + this.tag('DescriptionWrapper').finalY + fullDescription.renderHeight;
        });

        this._fadeAnimation = this.tag('Info').animation({delay: 0.2, duration: 0.3, actions: [
            {p: 'alpha', v: {0: 0.001, 1: 1}},
            {p: 'x', v: {0: 270, 1: 230}}
        ]});
    }

    show(data) {
        if(this._data && this._data.id === data.id) {
            return;
        }
        this._data = data;
        const {title, description} = data;
        this.tag('Info').patch({
            Title: {text: title},
            DescriptionWrapper: {
                Description: {text: description},
                DescriptionFull: {text: description},
            }
        });
        this._fadeAnimation.start();
    }

    showMore(data) {
        this._loadingData = true;
        let { number_of_episodes, number_of_seasons, media_type, large_poster, backdrop, genres, runtime = ''} = data;

        const titleInfo = [media_type.charAt(0).toUpperCase() + media_type.slice(1)];

        if(genres.length > 0) {
            titleInfo.push(genres.map((genre) => genre).join(', '))
        }

        if(runtime && (runtime + '').length > 0) {
            let formatted = runtime + ' m';
            if(runtime > 59) {
                formatted = `${Math.floor(runtime / 60)} h ${(runtime % 60)} m`
            }
            runtime = formatted;
        }

        if(number_of_episodes && number_of_seasons) {
            if(number_of_seasons === 1) {
                runtime = `${number_of_episodes} episodes`;
            }
            else {
                runtime = `${number_of_seasons} seasons`;
            }
        }

        this.fireAncestors('$updateBackdrop', {src: backdrop});
        this.patch({
            MoreInfo: {
                LargePoster: {
                    texture: Img(large_poster).original()
                },
                Runtime: {text: runtime}
            },
            MoreInfo2: {
                TitleInfo: {
                    text: titleInfo.join(' \u2022 ')
                }
            }
        });
        this._data = data;
    }

    _unfocus() {
        this.patch({
            Info: {
                DescriptionWrapper: {
                    Description: {alpha: 1},
                    DescriptionFull: {alpha: 0},
                }
            },
            MoreInfo: {
                smooth: {alpha: 0.001, x: 1730}
            },
            MoreInfo2: {
                smooth: {alpha: 0.001}
            }
        });
    }

    _handleKey() {
        return true;
    }

    _handleBack() {
        Router.back();
    }

    _handleEnter() {
        const {id, media_type} = this._data;
        Router.navigate(`player/${media_type}/${id}`);
    }

    _getFocused() {
        return this.tag('PlayButton');
    }
}