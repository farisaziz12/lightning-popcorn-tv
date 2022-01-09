/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lightning } from "@lightningjs/sdk";

export default class ItemDescription extends Lightning.Component {
    static _template() {
        return {
            alpha: 0.001,
            Wrapper: { flex: {direction: 'column'},
                ItemTitle: {w: 1260, text: {fontFace: 'Bold', wrap: true, fontSize: 74, lineHeight: 88}},
                ItemDescription: {w: 960, text: {fontFace: 'Regular', wrap: true, maxLines: 4, fontSize: 36, lineHeight: 44}}
            }
        }
    }

    set item(obj) {
        this._item = obj;
        this._update();
    }

    _update() {
        if(!this.active || !this._item) {
            return;
        }
        const { title, description } = this._item;
        this.tag('Wrapper').patch({
            ItemTitle: {text: title},
            ItemDescription: {text: description},
        });
        this._fadeAnimation.start();
    }

    _init() {
        this._fadeAnimation = this.animation({delay: 0.2, duration: 0.3, actions: [
            {p: 'alpha', v: {0: 0.001, 1: 1}},
            {p: 'x', v: {0: 270, 1: 230}}
        ]});
    }

    _active() {
        this._update();
    }

    hide() {
        this._fadeAnimation.stopNow();
    }
}