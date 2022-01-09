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

import { Lightning, Colors, Utils } from "@lightningjs/sdk";
import { animation } from "../lib/helpers.js";
import Swirl from '../shaders/Swirl.js';

export default class AmbientBackground extends Lightning.Component {
    static _template() {
        return {
            w: 1920,
            h: 1080,
            rect: true,
            color: Colors('background').get(),
            Swirl: {
                w: 1920, h: 1080,
                src: Utils.asset('images/swirlBackground.jpg'),
                shader: {type: Swirl, blur: 0.008, pull: 8}
            }
        }
    }

    _changeColor(argb) {
        const prevColor = this._targetColor || Colors('background').get();
        const color = this._targetColor = argb || Colors('background').get();

        this._colorAnimation = animation(this._colorAnimation, 'Swirl', this, {
            duration: 1, actions: [
                {p: 'colorTop', v: {0: Colors(prevColor).darker(0.2), 1: Colors(color).darker(0.2)}},
                {p: 'colorBottom', v: {0: prevColor, 1: color}}
            ]
        });
    }

    update(argb) {
        this._changeColor(argb);
    }
}