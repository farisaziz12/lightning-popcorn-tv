import { Colors, Img, Lightning, Router, Utils } from '@lightningjs/sdk';

export default class Item extends Lightning.Component {
    static _template() {
        return {
            Focus: {
                alpha: 0, y: -36, x: -20, w: w => w + 40, h: h => h + 40, rect: true, colorBottom: Colors('focus').get(), colorTop: Colors('focus').get(), shader: {type: Lightning.shaders.RoundedRectangle, stroke: 5, strokeColor: 0xffffffff, fillColor: 0xffffffff, radius: 22, blend: 0.25}
            },
            Poster: {w: w => w, h: h => h, shader: {type: Lightning.shaders.RoundedRectangle, radius: 12}}
        }
    }

    _firstActive() {
        this.patch({
            Poster: {texture: Img(this.item.poster).original()}
        });
    }

    _init() {
        const poster = this.tag('Poster');
        poster.on('txError', () => {
            poster.src = Utils.asset('images/missingImage.jpg')
        });
    }

    _focus() {
        const {backdrop, id, title, description} = this.item;
        this.fireAncestors('$updateBackdrop', {id});
        this.fireAncestors('$getDetailWidget').show({id, title, description});
        this.patch({
            Focus: {smooth: {alpha: 1}},
            Poster: {smooth: {y: -15}}
        });
    }

    _unfocus() {
        this.patch({
            Focus: {smooth: {alpha: 0}},
            Poster: {smooth: {y: 0}}
        });
    }

    _handleEnter() {
        const {id, media_type} = this.item;
        Router.navigate(`detail/${media_type}/${id}`, {keepAlive: true});
    }

    static get width() {
        return 185;
    }

    static get height() {
        return 278;
    }

    static get marginRight() {
        return 40;
    }

    static get marginBottom() {
        return 40;
    }
}