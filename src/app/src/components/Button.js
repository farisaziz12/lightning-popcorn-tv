import { Lightning, Colors, Utils } from "@lightningjs/sdk";

export default class Button extends Lightning.Component {
    static _template() {
        return {
            Background: {
                w: w => w, h: h => h, rect: true, color: Colors('white').alpha(0.5).get(), shader: {type: Lightning.shaders.RoundedRectangle, stroke: 7, strokeColor: 0xffffffff, fillColor: 0x00ffffff, radius: 22, blend: 1}
            },
            Content: {mount: 0.5, x: w => w / 2, color: Colors('white').get(), y: h => h / 2},
            Text: {w: 50, text: {fontFace: 'Bold', wrap: true, fontSize: 24, lineHeight: 30}}
        }
    }

    set icon (src) {
        this._icon = src;
        this.tag('Content').src = Utils.asset(src);
    }

    get icon() {
        return this._icon;
    }

    set content(obj) {
        this.tag('Content').patch(obj);
    }

    get content() {
        return this.tag('Content');
    }

    set text(text) {
        console.log({text}) // TODO: Show text
        this.tag('Text').patch({
            text
        });
    }

    get text(){
        return this.tag('Text');
    }
    _init() {
        const whiteAlpha = Colors('white').alpha(0.5).get();
        this._focusAnimation = this.animation({duration: 0.2, actions: [
            {t: 'Background', p: 'shader.fillColor', v: {0: 0x00ffffff, 1: 0xffffffff}},
            {t: 'Background', p: 'colorTop', v: {0: whiteAlpha, 1: Colors('focus').get()}},
            {t: 'Background', p: 'colorBottom', v: {0: whiteAlpha, 1: Colors('focus2').get()}},
        ]})
    }

    _focus() {
        this._focusAnimation.start();
    }

    _unfocus() {
        this._focusAnimation.stop();
    }
}