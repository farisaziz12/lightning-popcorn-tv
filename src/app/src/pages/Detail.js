import { Router } from "@lightningjs/sdk";
import { Page } from "../components";

export default class Detail extends Page {
    pageTransition(pageIn, pageOut) {
        pageIn.widgets.menu.setSmooth('alpha', 0, {delay: 0.0, duration: 0.2});
        pageIn.widgets.inputfield.setSmooth('alpha', 0, {delay: 0.0, duration: 0.2});
        pageIn.widgets.detail.setSmooth('alpha', 1, {delay: 0.2, duration: 0.2});
        return super.pageTransition(pageIn, pageOut);
    }

    _active() {
        Router.focusWidget('detail');
    }
}