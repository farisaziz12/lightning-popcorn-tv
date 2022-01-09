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

import { Router } from '@lightningjs/sdk';
import {
  Grid,
  Keyboard,
} from '@lightningjs/ui';

import { Page } from '../components';
import { transition } from '../lib/helpers.js';
import keyboardConfig from '../lib/keyboardConfig.js';

export default class Search extends Page {
    static _template () {
        return {
            Keyboard: {mountX: 0.5, y: 330, x: 960, w: 935, type: Keyboard, currentLayout: 'ABC', config: keyboardConfig, signals: {onInputChanged: true}},
            Content: {alpha: 0.001, y: 90, mountX: 0.5, x: 960, type: SearchGrid, w: 1535, h: 1080, columns: 7, scroll: 640, scrollTransition: {duration: 0.4}}
        }
    }

    pageTransition(pageIn, pageOut) {
        //hide menu widget
        pageIn.widgets.menu.setSmooth('alpha', 0, {delay: 0.0, duration: 0.2});
        const inputfield = pageIn.widgets.inputfield;
        //show inputfield widget if not visible
        if(inputfield.alpha !== 1) {
            inputfield.visible = true;
            inputfield.alpha = 0.001;
            inputfield.setSmooth('alpha', 1, {delay: 0.2, duration: 0.2});
        }
        //fire super
        return super.pageTransition(pageIn, pageOut);
    }

    onInputChanged({input}) {
        //hide grid when input has changed
        const grid = this.tag('Content');
        grid.setSmooth('alpha', 0.001);

        //if input length is 0 clear timeout else start search timeout
        if(input.length === 0) {
            this._clearSearchTimeout();
        }
        else {
            this._startSearchTimeout();
        }
        //store input value to be used when search timeout is fired
        this._input = input;
    }

    _setup() {
        //connect inputfield widget with keyboard
        this.tag('Keyboard').inputField(this.widgets.inputfield.input);
    }

    _firstActive() {
        //when active for the first time focus keyboard
        this._setState('Keyboard')
    }

    _startSearchTimeout() {
        this._clearSearchTimeout();
        //after 600 ms fire _doSearch
        this._searchTimeout = setTimeout(() => {
            this._doSearch();
        }, 600);
    }

    _clearSearchTimeout() {
        if(this._searchTimeout) {
            clearTimeout(this._searchTimeout);
        }
    }

    _doSearch() {
        //if onSearch exists and is a function, execute function and handle results
        if (this._input.length <= 4) return
        
        if(this.onSearch?.apply?.call) {
            this.onSearch(this._input)
                .then((response) => {
                    //clear grid of current items
                    const grid = this.tag('Content');
                    grid.clear();
                    //when response data length is bigger than 0 add them to grid
                    if(response.length > 0) {
                        grid.add(response);
                        grid.setSmooth('alpha', 1, {delay: 0.2});
                    }
                });
        }
    }

    _init() {
        const grid = this.tag('Content');
        this._focusTransitionY = grid.transition('y');
        grid.transition('alpha').on('finish', () => {
            if(grid.alpha === 0.001 && this._input.length === 0) {
                grid.clear();
            }
        })
        this._hideKeyboard = this.tag('Keyboard').animation({duration: 0.4, actions: [
            {p: 'x', v: {0: 960, 0.5: 1000}},
            {p: 'alpha', v: {0: 1, 0.5: 0}},
        ]});
    }

    static _states() {
        return [
            class Keyboard extends this {
                $enter() {
                    this.fireAncestors('$updateBackdrop', {src: null});
                    this.fireAncestors('$updateAmbientBackground', {color: 0xff9300e0});
                    
                    this._hideKeyboard.stop();
                    this.widgets.inputfield.maximize();
                    this.widgets.detail.setSmooth('alpha', 0.001, {duration: 0.2, delay: 0});
                }

                $exit() {
                    this._hideKeyboard.start();
                    this.widgets.inputfield.minimize();
                    this.widgets.detail.setSmooth('alpha', 1, {duration: 0.2, delay: 0.2});
                }

                _getFocused() {
                    return this.tag('Keyboard');
                }

                _handleUp() {
                    Router.focusWidget('InputField');
                }

                _handleDown() {
                    if(this.tag('Content').hasItems) {
                        this._setState('Grid');
                    }
                }
            },
            class Grid extends this {
                $enter() {
                    transition(this._focusTransitionY, 0);
                }

                $exit() {
                    transition(this._focusTransitionY, 90);
                }

                _getFocused() {
                    return this.tag('Content');
                }

                _handleUp() {
                    this._setState('Keyboard');
                }
            }
        ]
    }
}

class SearchGrid extends Grid {
    _indexChanged(event) {
        super._indexChanged(event);
        this._lines.forEach((line, lineIndex) => {
            line.forEach((wrapper) => {
                this.itemWrappers[wrapper].setSmooth('alpha', lineIndex < event.mainIndex ? 0.001 : 1);
            });
        });
    }
}