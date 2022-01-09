import { Colors, Lightning, Router, Utils } from "@lightningjs/sdk";
import { List } from "@lightningjs/ui";
import { transition, animation } from "../lib/helpers";

export default class Menu extends Lightning.Component {
    static _template() {
        return {
            w: 140,
            h: 1080,
            Shadow: {
                x: 140,
                w: 110,
                h: 1080,
                rect: true,
                zIndex: 8,
                color: Colors('black').alpha(0.8).get(),
                shader: {type: Lightning.shaders.FadeOut, right: 110}
            },
            RadialShadow: {
                w: 1920,
                h: 1080,
                rect: true,
                color: 0x00ffffff,
                zIndex: 8,
                shader: {
                    type: Lightning.shaders.RadialGradient, radius: 70, innerColor: Colors('black').alpha(0.8).get(), outerColor:  Colors('white').alpha(0).get(), pivotX: 0, pivotY: 0.5
                }
            },
            Background: {
                FastBlur: {
                    w: 140, h: 1080, zIndex: 9, type: Lightning.components.FastBlurComponent, amount: 3, content: {
                        MirrorContent: {color: Colors('white').darker(0.4).get()}
                    }
                }
            },
            Focus: {
                zIndex: 10, x: w => w, mountX: 0.5, w: 14, h: 100, y: Menu.focusDefaultPosition, rtt: true, shader: { type: Lightning.shaders.RoundedRectangle, radius: 7 }, transitions: {y: {duration: 0.2}, h: {duration: 0.2}},
                Lighting: {
                    w: w => w, h: h => h, rect: true,
                    shader: {
                        type: Lightning.shaders.RadialGradient, innerColor: Colors('white').get(), outerColor: Colors('white').get(), radius: 50, pivot: 0.5
                    }
                }
            },
            List: {
                zIndex: 10, forceLoad: true, direction: 'column', y: 375, x: 20, w: 140, h: 620, type: List, signals: { onIndexChanged: true }
            }
        }
    }

    _blurContent() {
        const mirror = this.tag('FastBlur').content.tag('MirrorContent');
        mirror.texture = this.fireAncestors('$getAppContentTexture');
        mirror.texture.enableClipping(0, 0, 140, 1080);
    }

    _setup() {
        this._items = ['home','search', 'close'];
        // 'movies', 'series',
        const items = this._items.map((item) => {
            return { type: MenuItem, item, selected: false };
        });
        this.tag('List').add(items);
        this._blurContent();
    }

    _init() {
        const focus = this.tag('Focus')
        this._focusTransitionH = focus.transition('h');
        this._focusTransitionY = focus.transition('y');

        this._focusTransitionY.on('finish', () => {
            transition(this._focusTransitionH, 100);
        });

        this._focusTransitionH.on('finish', () => {
            if (focus.h === 100) {
                this._pivotAnimation(0.5);
            }
        });

        this._focusMenuAnimation = this.animation({duration: 0.3, actions: [
            {t: 'Focus.Lighting', p: 'shader.innerColor', v: {0: Colors('white').get(), 1: Colors('focus').get()}},
            {t: 'Focus.Lighting', p: 'shader.outerColor', v: {0: Colors('white').get(), 1: Colors('focus2').get()}},
            {t: 'RadialShadow', p: 'shader.radius', v: {0: 70, 1: 1400}}
        ]});
    }

    onIndexChanged({ previousIndex = this.tag('List').index, index = this._selectedIndex }) {
        if (this.active && previousIndex !== index) {
            this._navigatingDirection = (previousIndex < index ? 1 : -1);
            const focus = this.tag('Focus')
            const targetMount = this._navigatingDirection > 0 ? 1 : 0;
            const mod = targetMount * 100;

            if (focus.mountY !== targetMount) {
                focus.mountY = targetMount;
                focus.y = focus.y + this._navigatingDirection * 100;
            }

            this._pivotAnimation(targetMount);

            this._navigatingTo = Menu.focusDefaultPosition + 130 * index + mod;
            if (this._focusTransitionH.targetValue !== 200) {
                transition(this._focusTransitionH, 200, 0.1);
            }
            transition(this._focusTransitionY, this._navigatingTo);
        }
    }

    _pivotAnimation(value) {
        if(value === this._pivotValue) {
            return;
        }
        this._anim = animation(this._anim, 'Focus', this, {
            duration: 0.3,
            actions: [
                {t: 'Lighting', p: 'shader.pivotY', v: {0: this.tag('Lighting').shader.pivotY, 1: value}}
            ]
        });
        this._pivotValue = value;
    }

    _handleUp() {
        this.tag('Focus').animation({
            duration: 0.4, actions: [
                { p: 'mountY', v: { 0.5: 1 } },
                { p: 'y', v: { 0.5: this._focusTransitionY.targetValue + 100 } },
                { p: 'h', v: { 0.5: 125, 1: 100 } },
                { t: 'Lighting', p: 'shader.pivotY', v: {0: this.tag('Lighting').shader.pivotY, 0.5: 0, 1:0.5} }
            ]
        }).start();
        this._pivotValue = 0.5;
    }

    _handleDown() {
        this.tag('Focus').animation({
            duration: 0.4, actions: [
                { p: 'mountY', v: { 0.5: 0 } },
                { p: 'y', v: { 0.5: this._focusTransitionY.targetValue - 100 } },
                { p: 'h', v: { 0.5: 125, 1: 100 } },
                { t: 'Lighting', p: 'shader.pivotY', v: {0: this.tag('Lighting').shader.pivotY, 0.5: 1, 1:0.5} }
            ]
        }).start();
        this._pivotValue = 0.5;
    }

    _handleKey() {
        return true;
    }

    _handleRight() {
        Router.focusPage();
    }

    _focus() {
        this._focusMenuAnimation.start();
    }

    _unfocus() {
        this._focusMenuAnimation.stop();
        if(!Router.isNavigating()) {
            this.tag('List').setIndex(this._selectedIndex);
        }
    }

    _getFocused() {
        return this.tag('List');
    }

    _onActivated(page) {
        const list = this.tag('List');
        const currentRouteIndex = this._selectedIndex = this._items.indexOf(page[Router.symbols['route']]);

        list.items.forEach((item, index) => {
            item.selected = index === currentRouteIndex;
        });
        list.setIndex(currentRouteIndex);
        if(!this.active) {
            transition(this._focusTransitionY, Menu.focusDefaultPosition + 130 * currentRouteIndex, 1);
            this._focusTransitionY.finish();
        }
    }

    static get focusDefaultPosition() {
        return 375;
    }
}

class MenuItem extends Lightning.Component {
    static _template() {
        return {
            alpha: 0.8,
            Icon: { scale: 0.7 },
            Label: {alpha: 0, x: 170, y: 50, mountY: 0.43, text: {fontFace: 'Medium', fontSize: 56}}
        }
    }

    _init() {
        this._updateFocusAnimation();
    }

    _firstActive() {
        this.patch({
            Icon: {src: Utils.asset(`images/${this.item}.png`)},
            Label: {text: this.item.charAt(0).toUpperCase() + this.item.slice(1)}
        });
    }

    _handleEnter() {
        if(this.item === 'close') {
            this.application.closeApp();
        }
        else {
            Router.navigate(this.item.toLowerCase());
        }
    }

    _focus() {
        this._focusAnimation.start();
    }

    _unfocus() {
        this._focusAnimation.stop();
    }

    _updateFocusAnimation(bool = this._selected) {
        if(this._focusAnimation && this._focusAnimation.isActive()) {
            this._focusAnimation.stopNow();
        }

        this._focusAnimation = this.animation({duration: 0.2, actions: [
            {p: 'alpha', v: {0: bool ? 1 : 0.8, 1: 1}},
            {t: 'Label', p: 'alpha', v: {0: 0, 1: 1}},
            {t: 'Label', p: 'x', v: {0: 190, 1: 170}}
        ]});
    }

    set selected(bool) {
        this._updateFocusAnimation(bool);
        this.alpha = bool ? 1 : 0.8;
        this._selected = bool;
    }

    get selected() {
        return this._selected;
    }

    static get marginBottom() {
        return 30;
    }

    static get width() {
        return 100;
    }

    static get height() {
        return 100;
    }
}