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
export default class SwirlShader extends Lightning.shaders.WebGLDefaultShader {
    constructor(ctx) {
        super(ctx);

        this._blur = 1;
        this._pull = 0;
    }

    get pull() {
        return this._pull;
    }

    set pull(v) {
        this._pull = v;
        this.redraw();
    }

    get blur() {
        return this._blur;
    }

    set blur(v) {
        this._blur = v;
        this.redraw();
    }

    setupUniforms(operation) {
        super.setupUniforms(operation);

        // We substract half a pixel to get a better cutoff effect.
        if (!this._start) {
            this._start = Date.now();
        }

        const time = (0.0005 * (Date.now() - this._start)) % 16.0;

        this._setUniform("t", time, this.gl.uniform1f);

        this._setUniform("pull", this._pull, this.gl.uniform1f);
        this._setUniform("blur", this._blur, this.gl.uniform1f);

        const period = (((time / 4) % 2.0) * Math.PI);
        this._setUniform("period", period, this.gl.uniform1f);

        // Force redraw to keep painting while visible.
        this.redraw()
    }

}

SwirlShader.fragmentShaderSource = `
    #ifdef GL_ES
    precision lowp float;
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform float t;
    uniform float pull;
    uniform float blur;
    uniform float period;
    void main(void){
        float x = vTextureCoord.x - 0.5;
        
        float g = sin(sin(0.7854*t)*(4.0*x)+0.3927*t)+sin(sin(0.3927*t)*(2.0*x)+0.3927*t);
        g -= pull * cos(6.0 * x) * 1.5; 
        g = 0.1 * g - (vTextureCoord.y - 0.5);
        
        float bl = 40.0 - 20.0 * abs(sin(period + x * 3.0));
        g = g * bl * blur;
        
        float ga = max(0.0, g);
        float deltaSquared = ga * ga;
        
        float value = 1.0 / (deltaSquared + 1.0);
                
        vec4 color = texture2D(uSampler, vTextureCoord) * vColor * value;
        
        // if (g < 0.0) {
        //      color = color * max(0.0, (1.0 + 0.05 * g));
        // }
        
        gl_FragColor = color;
    }
`;