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

import { Colors, Lightning, Router } from "@lightningjs/sdk"
import { List } from "@lightningjs/ui";
import { Key } from "../components/Key.js";

export default class Dialog extends Lightning.Component {
    static _template() {
        return {
            zIndex: 9, w: 1920, h: 1080, rect: true, color: Colors('black').alpha(0.8).get(),
            Background: {
                x: 610, y:300, w: 700, h: 480, rtt: true, shader: {type: Lightning.shaders.RoundedRectangle, radius: 22},
                FastBlur: {
                    w: 700, h: 480, zIndex: 9, type: Lightning.components.FastBlurComponent, amount: 3, content: {
                        MirrorContent: {color: Colors('white').darker(0.4).get()}
                    }
                },
            },
            Wrapper: {
                x: 610, y:300, w: 700, h: 480, 
                Labels: {w: 660, x: 350, y: 220, mountX: 0.5, mountY: 1, flex: {direction: 'column'},
                    Header: {mountX: 0.5, x: w => w / 2, text: {text: this.bindProp('header'), fontSize: 54, fontFace: 'Regular'}},
                    Message: {mountX: 0.5, x: w => w / 2, y: 50, w: 620, color: Colors('white').alpha(0.65).get(), text: {text: this.bindProp('message'), wordWrap: true, fontSize: 36, lineHeight: 48, textAlign: 'center', fontFace: 'MediumItalic'}},
                },
                Buttons: {type: List, mountX: 0.5, y: 320, x: 350, spacing: 50, autoResize: true, direction: 'row', signals: {onItemsRepositioned: true}}
            }
        }
    }

    _init() {
        this.transition('alpha').on('finish', () => {
            if(this.alpha === 0) {
                this.visible = false;
            }
        });
        this._blurContent();
    }

    _blurContent() {
        const mirror = this.tag('FastBlur').content.tag('MirrorContent');
        mirror.texture = this.fireAncestors('$getAppContentTexture');
        mirror.texture.enableClipping(0, 0, 700, 480);
    }

    _handleKey() {
        return true;
    }

    _handleEnter() {
        const index = this.tag('Buttons').index;
        const current = this._actions[index];
        if(!!(current && current.action && current.action.call && current.action.apply)) {
            current.action.call();
        }
    }

    open({header = '', message = '', actions = []}) {
        Router.focusWidget('Dialog');
        if(actions.length === 0) {
            actions.push({
                label: "Back",
                action: () => {this.close()}
            });
        }
        this._actions = actions;
        this.patch({
            header,
            message: message,
            Wrapper: {
                Buttons: {items: actions.map((action) => {
                    return {type: Key, w: 170, h: 80, data: {label: action.label}}
                })}
            }
        });
        this.visible = true;
        this.setSmooth('alpha', 1);
    }

    close() {
        this.tag('Buttons').clear();
        this.setSmooth('alpha', 0);
        Router.focusPage();
    }

    _getFocused() {
        return this.tag('Buttons');
    }
}