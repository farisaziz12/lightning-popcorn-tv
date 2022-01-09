import {Lightning, Router} from '@lightningjs/sdk';

export default class Page extends Lightning.Component {
    pageTransition(pageIn, pageOut) {
        return this._pageTransition(pageIn, pageOut);
    }

    _pageTransition(pageIn, pageOut) {
        pageOut.setSmooth('alpha', 0, {delay: 0.0, duration: 0.2});

        if(this.hideBackground) {
            this.fireAncestors('$hideBackground');
        }
        else {
            this.fireAncestors('$showBackground');
        }

        return new Promise((resolve) => {
            pageIn.visible = true;
            pageIn.alpha = 0.001;
            pageIn.transition('alpha').on('finish', () => {
                if(pageIn.alpha === 1) {
                    pageOut.visible = false;
                    resolve(true);
                }
            });
            pageIn.setSmooth('alpha', 1, {delay: 0.2, duration: 0.2});
        });
    }

    _inactive() {
        this.stage.gc();
    }

    _handleBack(e) {
        const navCheck = Router.isNavigating();
        if(navCheck) {
            return true;
        }
        return false;
    }
}