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
export default class CutOut extends Lightning.shaders.WebGLDefaultShader {
    constructor(ctx) {
        super(ctx);
        this._ic = 0xffffffff;
        this._normalizedIC = this._getNormalizedColor(this._ic);
        this._oc = 0xffffffff;
        this._normalizedOC = this._getNormalizedColor(this._oc);
    }

    set innerColor(argb) {
        this._ic = argb;
        this._normalizedIC = this._getNormalizedColor(argb);
        this.redraw();
    }

    get innerColor() {
        return this._ic;
    }

    set outerColor(argb) {
        this._oc = argb;
        this._normalizedOC = this._getNormalizedColor(argb);
        this.redraw();
    }

    get outerColor() {
        return this._oc;
    }

    _getNormalizedColor(color) {
        const col = Lightning.StageUtils.getRgbaComponentsNormalized(color);
        col[0] *= col[3];
        col[1] *= col[3];
        col[2] *= col[3];
        return new Float32Array(col);
    }

    setupUniforms(operation) {
        super.setupUniforms(operation);
        this._setUniform('innerColor', this._normalizedIC, this.gl.uniform4fv);
        this._setUniform('outerColor', this._normalizedOC, this.gl.uniform4fv);
    }

}

CutOut.fragmentShaderSource = `
    #ifdef GL_ES
    precision lowp float;
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform vec4 innerColor;
    uniform vec4 outerColor;
    void main(void){
        vec4 tx = texture2D(uSampler, vTextureCoord) * vColor;
        gl_FragColor = mix( outerColor * vColor, innerColor * vColor, tx.a);
    }
`;