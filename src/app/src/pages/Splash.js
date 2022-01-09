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

import { Lightning, Utils, Router } from "@lightningjs/sdk";
import CutOut from "../shaders/CutOut.js";

export default class Splash extends Lightning.Component {
    static _template() {
        return {
            CutOut: {
                w: 1920, h: 1080, rtt: true, shader: {type: CutOut},
                Logo: {
                    h: 270, w: 844, y: 480, x: 960, mount: 0.5,
                    V: {
                        y: 70, src: Utils.asset('images/logo/v.png')
                    },
                    O: {
                        y: 70, x: 276, src: Utils.asset('images/logo/o.png')
                    },
                    D: {
                        y: 70, x: 576, src: Utils.asset('images/logo/d.png')
                    }
                },
                ExampleApp: {
                    x: 815, y: 655, src: Utils.asset('images/logo/example-app.png')
                }
            }
        }
    }

    _init() {
        this._openAnimation = this.tag('CutOut').animation({
            duration: 1.4, actions: [
                {t: 'V', p: 'alpha', v: {0: 0, 0.25: 1}},
                {t: 'V', p: 'y', v: {0: 70, 0.25: -20, 0.35: 0}},
                {t: 'O', p: 'alpha', v: {0.25: 0, 0.5: 1}},
                {t: 'O', p: 'y', v: {0.25: 70, 0.5: -20, 0.6: 0}},
                {t: 'D', p: 'alpha', v: {0.5: 0, 0.75: 1}},
                {t: 'D', p: 'y', v: {0.5: 70, 0.75: -20, 0.85: 0}},
                {t: 'ExampleApp', p: 'x', v: {0.6: 680, 0.9: 815}},
                {t: 'ExampleApp', p: 'alpha', v: {0.6: 0, 0.9: 1}},
                {p: 'shader.outerColor', v: {0.80: 0xffffffff, 1: 0x00ffffff}},
                {p: 'shader.innerColor', v: {0.80: 0x00ffffff, 1: 0xffffffff}}
            ]
        });

        this._openAnimation.on('finish', () => {
            setTimeout(() => {
                Router.resume();
            }, 1000)
        })
    }

    _active() {
        this.fireAncestors('$updateAmbientBackground', {color: 0xff9300e0});
        this._openAnimation.start();
    }
}