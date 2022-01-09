/**
 * App version: 1.0.5
 * SDK version: 4.7.0
 * CLI version: 2.7.1
 *
 * Generated: Sun, 09 Jan 2022 22:33:17 GMT
 */

var APP_com_metrological_app_vod_example = (function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var settings = {};
  var subscribers = {};
  var initSettings = function initSettings(appSettings, platformSettings) {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };

  var publish = function publish(key, value) {
    subscribers[key] && subscribers[key].forEach(function (subscriber) {
      return subscriber(value);
    });
  };

  var dotGrab = function dotGrab() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    var keys = key.split('.');

    for (var i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }

    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };

  var Settings = {
    get: function get(type, key) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has: function has(type, key) {
      return !!this.get(type, key);
    },
    set: function set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe: function subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe: function unsubscribe(key, callback) {
      if (callback) {
        var index = subscribers[key] && subscribers[key].findIndex(function (cb) {
          return cb === callback;
        });
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers: function clearSubscribers() {
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(subscribers)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          delete subscribers[key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */

  var prepLog = function prepLog(type, args) {
    var colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };

  var Log = {
    info: function info() {
      Settings.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug: function debug() {
      Settings.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error: function error() {
      Settings.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn: function warn() {
      Settings.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  var executeAsPromise = (function (method) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var result;

    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    } // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise


    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    } // otherwise make it into a promise
    else {
      return new Promise(function (resolve, reject) {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  var sendMetric = function sendMetric(type, event, params) {
    Log.info('Sending metric', type, event, params);
  };

  var initMetrics = function initMetrics(config) {
    sendMetric = config.sendMetric;
  }; // available metric per category

  var metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play', // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  }; // error metric function (added to each category)

  var errorMetric = function errorMetric(type, message, code, visible) {
    var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = _objectSpread2({
      params: params
    }, {
      message: message,
      code: code,
      visible: visible
    });
    sendMetric(type, 'error', params);
  };

  var Metric = function Metric(type, events) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce(function (obj, event) {
      obj[event] = function (name) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = _objectSpread2(_objectSpread2(_objectSpread2({}, options), name ? {
          name: name
        } : {}), params);
        sendMetric(type, event, params);
      };

      return obj;
    }, {
      error: function error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event: function event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };

  var Metrics = function Metrics(types) {
    return Object.keys(types).reduce(function (obj, type) {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = function (url) {
        return Metric(type, types[type], {
          url: url
        });
      } : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };

  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var autoSetupMixin = (function (sourceObject) {
    var setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var ready = false;

    var doSetup = function doSetup() {
      if (ready === false) {
        setup();
        ready = true;
      }
    };

    return Object.keys(sourceObject).reduce(function (obj, key) {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }

      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var timeout = null;
  var easeExecution = (function (cb, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      cb();
    }, delay);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var basePath;

  var _proxyUrl;

  var initUtils = function initUtils(config) {
    basePath = _ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));

    if (config.proxyUrl) {
      _proxyUrl = _ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset: function asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl: function proxyUrl(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _proxyUrl ? _proxyUrl + '?' + _makeQueryString(url, options) : url;
    },
    makeQueryString: function makeQueryString() {
      return _makeQueryString.apply(void 0, arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol: function ensureUrlWithProtocol() {
      return _ensureUrlWithProtocol.apply(void 0, arguments);
    }
  };

  var _ensureUrlWithProtocol = function _ensureUrlWithProtocol(url) {
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }

    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }

    return url;
  };
  var makeFullStaticPath = function makeFullStaticPath() {
    var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path; // if path is URL, we assume it's already the full static path, so we just return it

    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }

    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname); // remove possible leading dot from path

      path = path.charAt(0) === '.' ? path.substr(1) : path; // ensure path has leading slash

      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = function cleanUpPathName(pathname) {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    var parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };

  var _makeQueryString = function _makeQueryString(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value

    options[type] = url;
    return Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  var initProfile = function initProfile(config) {
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var Lightning = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */

  var events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];

  var mediaUrl$1 = function mediaUrl(url) {
    return url;
  };

  var initMediaPlayer = function initMediaPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(Mediaplayer, _Lightning$Component);

    var _super = _createSuper(Mediaplayer);

    function Mediaplayer() {
      _classCallCheck(this, Mediaplayer);

      return _super.apply(this, arguments);
    }

    _createClass(Mediaplayer, [{
      key: "_construct",
      value: function _construct() {
        this._skipRenderToTexture = false;
        this._metrics = null;
        this._textureMode = Settings.get('platform', 'textureMode') || false;
        Log.info('Texture mode: ' + this._textureMode);
        console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
      }
    }, {
      key: "skipRenderToTexture",
      set: function set(v) {
        this._skipRenderToTexture = v;
      }
    }, {
      key: "textureMode",
      get: function get() {
        return this._textureMode;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "_init",
      value: function _init() {
        //re-use videotag if already there
        var videoEls = document.getElementsByTagName('video');
        if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
          this.videoEl = document.createElement('video');
          this.videoEl.setAttribute('id', 'video-player');
          this.videoEl.style.position = 'absolute';
          this.videoEl.style.zIndex = '1';
          this.videoEl.style.display = 'none';
          this.videoEl.setAttribute('width', '100%');
          this.videoEl.setAttribute('height', '100%');
          this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
          document.body.appendChild(this.videoEl);
        }

        if (this.textureMode && !this._skipRenderToTexture) {
          this._createVideoTexture();
        }

        this.eventHandlers = [];
      }
    }, {
      key: "_registerListeners",
      value: function _registerListeners() {
        var _this = this;

        events.forEach(function (event) {
          var handler = function handler(e) {
            if (_this._metrics && _this._metrics[event] && typeof _this._metrics[event] === 'function') {
              _this._metrics[event]({
                currentTime: _this.videoEl.currentTime
              });
            }

            _this.fire(event, {
              videoElement: _this.videoEl,
              event: e
            });
          };

          _this.eventHandlers.push(handler);

          _this.videoEl.addEventListener(event, handler);
        });
      }
    }, {
      key: "_deregisterListeners",
      value: function _deregisterListeners() {
        var _this2 = this;

        Log.info('Deregistering event listeners MediaPlayer');
        events.forEach(function (event, index) {
          _this2.videoEl.removeEventListener(event, _this2.eventHandlers[index]);
        });
        this.eventHandlers = [];
      }
    }, {
      key: "_attach",
      value: function _attach() {
        this._registerListeners();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this._deregisterListeners();

        this.close();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
      }
    }, {
      key: "_startUpdatingVideoTexture",
      value: function _startUpdatingVideoTexture() {
        var _this3 = this;

        if (this.textureMode && !this._skipRenderToTexture) {
          var stage = this.stage;

          if (!this._updateVideoTexture) {
            this._updateVideoTexture = function () {
              if (_this3.videoTexture.options.source && _this3.videoEl.videoWidth && _this3.active) {
                var gl = stage.gl;
                var currentTime = new Date().getTime(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
                // We'll fallback to fixed 30fps in this case.

                var frameCount = _this3.videoEl.webkitDecodedFrameCount;
                var mustUpdate = frameCount ? _this3._lastFrame !== frameCount : _this3._lastTime < currentTime - 30;

                if (mustUpdate) {
                  _this3._lastTime = currentTime;
                  _this3._lastFrame = frameCount;

                  try {
                    gl.bindTexture(gl.TEXTURE_2D, _this3.videoTexture.options.source);
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this3.videoEl);
                    _this3._lastFrame = _this3.videoEl.webkitDecodedFrameCount;
                    _this3.videoTextureView.visible = true;
                    _this3.videoTexture.options.w = _this3.videoEl.videoWidth;
                    _this3.videoTexture.options.h = _this3.videoEl.videoHeight;
                    var expectedAspectRatio = _this3.videoTextureView.w / _this3.videoTextureView.h;
                    var realAspectRatio = _this3.videoEl.videoWidth / _this3.videoEl.videoHeight;

                    if (expectedAspectRatio > realAspectRatio) {
                      _this3.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                      _this3.videoTextureView.scaleY = 1;
                    } else {
                      _this3.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                      _this3.videoTextureView.scaleX = 1;
                    }
                  } catch (e) {
                    Log.error('texImage2d video', e);

                    _this3._stopUpdatingVideoTexture();

                    _this3.videoTextureView.visible = false;
                  }

                  _this3.videoTexture.source.forceRenderUpdate();
                }
              }
            };
          }

          if (!this._updatingVideoTexture) {
            stage.on('frameStart', this._updateVideoTexture);
            this._updatingVideoTexture = true;
          }
        }
      }
    }, {
      key: "_stopUpdatingVideoTexture",
      value: function _stopUpdatingVideoTexture() {
        if (this.textureMode) {
          var stage = this.stage;
          stage.removeListener('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = false;
          this.videoTextureView.visible = false;

          if (this.videoTexture.options.source) {
            var gl = stage.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
        }
      }
    }, {
      key: "updateSettings",
      value: function updateSettings() {
        var _this4 = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // The Component that 'consumes' the media player.
        this._consumer = settings.consumer;

        if (this._consumer && this._consumer.getMediaplayerSettings) {
          // Allow consumer to add settings.
          settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
        }

        if (!Lightning.Utils.equalValues(this._stream, settings.stream)) {
          if (settings.stream && settings.stream.keySystem) {
            navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(function (keySystemAccess) {
              return keySystemAccess.createMediaKeys();
            }).then(function (createdMediaKeys) {
              return _this4.videoEl.setMediaKeys(createdMediaKeys);
            }).then(function () {
              if (settings.stream && settings.stream.src) _this4.open(settings.stream.src);
            }).catch(function () {
              console.error('Failed to set up MediaKeys');
            });
          } else if (settings.stream && settings.stream.src) {
            // This is here to be backwards compatible, will be removed
            // in future sdk release
            if (Settings.get('app', 'hls')) {
              if (!window.Hls) {
                window.Hls = /*#__PURE__*/function () {
                  function Hls() {
                    _classCallCheck(this, Hls);
                  }

                  _createClass(Hls, null, [{
                    key: "isSupported",
                    value: function isSupported() {
                      console.warn('hls-light not included');
                      return false;
                    }
                  }]);

                  return Hls;
                }();
              }

              if (window.Hls.isSupported()) {
                if (!this._hls) this._hls = new window.Hls({
                  liveDurationInfinity: true
                });

                this._hls.loadSource(settings.stream.src);

                this._hls.attachMedia(this.videoEl);

                this.videoEl.style.display = 'block';
              }
            } else {
              this.open(settings.stream.src);
            }
          } else {
            this.close();
          }

          this._stream = settings.stream;
        }

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPos);
      }
    }, {
      key: "_setHide",
      value: function _setHide(hide) {
        if (this.textureMode) {
          this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
        } else {
          this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
        }
      }
    }, {
      key: "open",
      value: function open(url) {
        var _this5 = this;

        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          hide: false,
          videoPosition: null
        };
        // prep the media url to play depending on platform (mediaPlayerplugin)
        url = mediaUrl$1(url);
        this._metrics = Metrics$1.media(url);
        Log.info('Playing stream', url);

        if (this.application.noVideo) {
          Log.info('noVideo option set, so ignoring: ' + url);
          return;
        } // close the video when opening same url as current (effectively reloading)


        if (this.videoEl.getAttribute('src') === url) {
          this.close();
        }

        this.videoEl.setAttribute('src', url); // force hide, then force show (in next tick!)
        // (fixes comcast playback rollover issue)

        this.videoEl.style.visibility = 'hidden';
        this.videoEl.style.display = 'none';
        setTimeout(function () {
          _this5.videoEl.style.display = 'block';
          _this5.videoEl.style.visibility = 'visible';
        });

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
      }
    }, {
      key: "close",
      value: function close() {
        // We need to pause first in order to stop sound.
        this.videoEl.pause();
        this.videoEl.removeAttribute('src'); // force load to reset everything without errors

        this.videoEl.load();

        this._clearSrc();

        this.videoEl.style.display = 'none';
      }
    }, {
      key: "playPause",
      value: function playPause() {
        if (this.isPlaying()) {
          this.doPause();
        } else {
          this.doPlay();
        }
      }
    }, {
      key: "muted",
      get: function get() {
        return this.videoEl.muted;
      },
      set: function set(v) {
        this.videoEl.muted = v;
      }
    }, {
      key: "loop",
      get: function get() {
        return this.videoEl.loop;
      },
      set: function set(v) {
        this.videoEl.loop = v;
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this._getState() === 'Playing';
      }
    }, {
      key: "doPlay",
      value: function doPlay() {
        this.videoEl.play();
      }
    }, {
      key: "doPause",
      value: function doPause() {
        this.videoEl.pause();
      }
    }, {
      key: "reload",
      value: function reload() {
        var url = this.videoEl.getAttribute('src');
        this.close();
        this.videoEl.src = url;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return Promise.resolve(this.videoEl.currentTime);
      }
    }, {
      key: "setPosition",
      value: function setPosition(pos) {
        this.videoEl.currentTime = pos;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return Promise.resolve(this.videoEl.duration);
      }
    }, {
      key: "seek",
      value: function seek(time) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (absolute) {
          this.videoEl.currentTime = time;
        } else {
          this.videoEl.currentTime += time;
        }
      }
    }, {
      key: "videoTextureView",
      get: function get() {
        return this.tag('Video').tag('VideoTexture');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoTextureView.texture;
      }
    }, {
      key: "_setVideoArea",
      value: function _setVideoArea(videoPos) {
        if (Lightning.Utils.equalValues(this._videoPos, videoPos)) {
          return;
        }

        this._videoPos = videoPos;

        if (this.textureMode) {
          this.videoTextureView.patch({
            smooth: {
              x: videoPos[0],
              y: videoPos[1],
              w: videoPos[2] - videoPos[0],
              h: videoPos[3] - videoPos[1]
            }
          });
        } else {
          var precision = this.stage.getRenderPrecision();
          this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
          this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
          this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
          this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
        }
      }
    }, {
      key: "_fireConsumer",
      value: function _fireConsumer(event, args) {
        if (this._consumer) {
          this._consumer.fire(event, args);
        }
      }
    }, {
      key: "_equalInitData",
      value: function _equalInitData(buf1, buf2) {
        if (!buf1 || !buf2) return false;
        if (buf1.byteLength != buf2.byteLength) return false;
        var dv1 = new Int8Array(buf1);
        var dv2 = new Int8Array(buf2);

        for (var i = 0; i != buf1.byteLength; i++) {
          if (dv1[i] != dv2[i]) return false;
        }

        return true;
      }
    }, {
      key: "error",
      value: function error(args) {
        this._fireConsumer('$mediaplayerError', args);

        this._setState('');

        return '';
      }
    }, {
      key: "loadeddata",
      value: function loadeddata(args) {
        this._fireConsumer('$mediaplayerLoadedData', args);
      }
    }, {
      key: "play",
      value: function play(args) {
        this._fireConsumer('$mediaplayerPlay', args);
      }
    }, {
      key: "playing",
      value: function playing(args) {
        this._fireConsumer('$mediaplayerPlaying', args);

        this._setState('Playing');
      }
    }, {
      key: "canplay",
      value: function canplay(args) {
        this.videoEl.play();

        this._fireConsumer('$mediaplayerStart', args);
      }
    }, {
      key: "loadstart",
      value: function loadstart(args) {
        this._fireConsumer('$mediaplayerLoad', args);
      }
    }, {
      key: "seeked",
      value: function seeked() {
        this._fireConsumer('$mediaplayerSeeked', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "seeking",
      value: function seeking() {
        this._fireConsumer('$mediaplayerSeeking', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "durationchange",
      value: function durationchange(args) {
        this._fireConsumer('$mediaplayerDurationChange', args);
      }
    }, {
      key: "encrypted",
      value: function encrypted(args) {
        var video = args.videoElement;
        var event = args.event; // FIXME: Double encrypted events need to be properly filtered by Gstreamer

        if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
          this._previousInitData = event.initData;

          this._fireConsumer('$mediaplayerEncrypted', args);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            VideoWrap: {
              VideoTexture: {
                visible: false,
                pivot: 0.5,
                texture: {
                  type: Lightning.textures.StaticTexture,
                  options: {}
                }
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this6) {
          _inherits(Playing, _this6);

          var _super2 = _createSuper(Playing);

          function Playing() {
            _classCallCheck(this, Playing);

            return _super2.apply(this, arguments);
          }

          _createClass(Playing, [{
            key: "$enter",
            value: function $enter() {
              this._startUpdatingVideoTexture();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._stopUpdatingVideoTexture();
            }
          }, {
            key: "timeupdate",
            value: function timeupdate() {
              this._fireConsumer('$mediaplayerProgress', {
                currentTime: this.videoEl.currentTime,
                duration: this.videoEl.duration || 1
              });
            }
          }, {
            key: "ended",
            value: function ended(args) {
              this._fireConsumer('$mediaplayerEnded', args);

              this._setState('');
            }
          }, {
            key: "pause",
            value: function pause(args) {
              this._fireConsumer('$mediaplayerPause', args);

              this._setState('Playing.Paused');
            }
          }, {
            key: "_clearSrc",
            value: function _clearSrc() {
              this._fireConsumer('$mediaplayerStop', {});

              this._setState('');
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this7) {
                _inherits(Paused, _this7);

                var _super3 = _createSuper(Paused);

                function Paused() {
                  _classCallCheck(this, Paused);

                  return _super3.apply(this, arguments);
                }

                return _createClass(Paused);
              }(this)];
            }
          }]);

          return Playing;
        }(this)];
      }
    }]);

    return Mediaplayer;
  })(Lightning.Component);

  var localCookie = /*#__PURE__*/function () {
    function localCookie(e) {
      _classCallCheck(this, localCookie);

      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies
      };
    }

    _createClass(localCookie, [{
      key: "_checkIfLocalStorageWorks",
      value: function _checkIfLocalStorageWorks() {
        if ("undefined" == typeof localStorage) return !1;

        try {
          return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "_getItemLocalStorage",
      value: function _getItemLocalStorage(e) {
        return window.localStorage.getItem(e);
      }
    }, {
      key: "_setItemLocalStorage",
      value: function _setItemLocalStorage(e, t) {
        return window.localStorage.setItem(e, t);
      }
    }, {
      key: "_removeItemLocalStorage",
      value: function _removeItemLocalStorage(e) {
        return window.localStorage.removeItem(e);
      }
    }, {
      key: "_clearLocalStorage",
      value: function _clearLocalStorage() {
        return window.localStorage.clear();
      }
    }, {
      key: "_getItemCookie",
      value: function _getItemCookie(e) {
        var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
          return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
        }(e) + "=([^;]*)"));
        return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
      }
    }, {
      key: "_setItemCookie",
      value: function _setItemCookie(e, t) {
        var o = new Date(),
            r = new Date(o.getTime() + 15768e7);
        document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
      }
    }, {
      key: "_removeItemCookie",
      value: function _removeItemCookie(e) {
        document.cookie = "".concat(e, "=;Max-Age=-99999999;");
      }
    }, {
      key: "_clearCookies",
      value: function _clearCookies() {
        document.cookie.split(";").forEach(function (e) {
          document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
        });
      }
    }]);

    return localCookie;
  }();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var initStorage = function initStorage() {
    Settings.get('platform', 'id'); // todo: pass options (for example to force the use of cookies)

    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  var isWildcard = /^[!*$]$/;
  var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  var isNamedGroup = /^\/:/;
  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */

  var stripRegex = function stripRegex(route) {
    var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';

    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }

    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  var createRegister = function createRegister(flags) {
    var reg = new Map() // store user defined and router
    // defined flags in register
    ;
    [].concat(_toConsumableArray(Object.keys(flags)), _toConsumableArray(Object.getOwnPropertySymbols(flags))).forEach(function (key) {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  var Request = /*#__PURE__*/function () {
    function Request() {
      var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var navArgs = arguments.length > 1 ? arguments[1] : undefined;
      var storeCaller = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, Request);

      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;
      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */

      this._storeCaller = storeCaller;
      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */

      this._register = new Map();
      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */

      this._isCreated = false;
      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */

      this._isSharedInstance = false;
      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */

      this._cancelled = false;
      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */

      this._copiedHistoryState = null; // if there are arguments attached to navigate()
      // we store them in new request

      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      } // @todo: remove because we can simply check
      // ._storeCaller property


      this._register.set(symbols.store, this._storeCaller);
    }

    _createClass(Request, [{
      key: "cancel",
      value: function cancel() {
        Log.debug('[router]:', "cancelled ".concat(this._hash));
        this._cancelled = true;
      }
    }, {
      key: "url",
      get: function get() {
        return this._hash;
      }
    }, {
      key: "register",
      get: function get() {
        return this._register;
      }
    }, {
      key: "hash",
      get: function get() {
        return this._hash;
      },
      set: function set(args) {
        this._hash = args;
      }
    }, {
      key: "route",
      get: function get() {
        return this._route;
      },
      set: function set(args) {
        this._route = args;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      },
      set: function set(args) {
        this._provider = args;
      }
    }, {
      key: "providerType",
      get: function get() {
        return this._providerType;
      },
      set: function set(args) {
        this._providerType = args;
      }
    }, {
      key: "page",
      get: function get() {
        return this._page;
      },
      set: function set(args) {
        this._page = args;
      }
    }, {
      key: "isCreated",
      get: function get() {
        return this._isCreated;
      },
      set: function set(args) {
        this._isCreated = args;
      }
    }, {
      key: "isSharedInstance",
      get: function get() {
        return this._isSharedInstance;
      },
      set: function set(args) {
        this._isSharedInstance = args;
      }
    }, {
      key: "isCancelled",
      get: function get() {
        return this._cancelled;
      }
    }, {
      key: "copiedHistoryState",
      get: function get() {
        return this._copiedHistoryState;
      },
      set: function set(v) {
        this._copiedHistoryState = v;
      }
    }]);

    return Request;
  }();

  var Route = /*#__PURE__*/function () {
    function Route() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Route);

      // keep backwards compatible
      var type = ['on', 'before', 'after'].reduce(function (acc, type) {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;

      if (type) {
        this._provider = {
          type: type,
          request: config[type]
        };
      }
    }

    _createClass(Route, [{
      key: "path",
      get: function get() {
        return this._cfg.path;
      }
    }, {
      key: "component",
      get: function get() {
        return this._cfg.component;
      }
    }, {
      key: "options",
      get: function get() {
        return this._cfg.options;
      }
    }, {
      key: "widgets",
      get: function get() {
        return this._cfg.widgets;
      }
    }, {
      key: "cache",
      get: function get() {
        return this._cfg.cache;
      }
    }, {
      key: "hook",
      get: function get() {
        return this._cfg.hook;
      }
    }, {
      key: "beforeNavigate",
      get: function get() {
        return this._cfg.beforeNavigate;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      }
    }]);

    return Route;
  }();

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */

  var getFloor = function getFloor(route) {
    return stripRegex(route).split('/').length;
  };
  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */

  var getRoutesByFloor = function getRoutesByFloor(floor) {
    var matches = []; // simple filter of level candidates

    var _iterator = _createForOfIteratorHelper(routes$1.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 1),
            route = _step$value[0];

        if (getFloor(route) === floor) {
          matches.push(route);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return matches;
  };
  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */


  var getRouteByHash = function getRouteByHash(hash) {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    var getUrlParts = /(\/?:?[@!*\w%\s:-]+)/g; // grab possible candidates from stored routes

    var candidates = getRoutesByFloor(getFloor(hash)); // break hash down in chunks

    var hashParts = hash.match(getUrlParts) || []; // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash

    var regexStore = [];
    var matches = candidates.filter(function (route) {
      var isMatching = true; // replace regex in route with lookup id => @@{storeId}@@

      if (hasRegex.test(route)) {
        var regMatches = route.match(hasRegex);

        if (regMatches && regMatches.length) {
          route = regMatches.reduce(function (fullRoute, regex) {
            var lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }

      var routeParts = route.match(getUrlParts) || [];

      for (var i = 0, j = routeParts.length; i < j; i++) {
        var routePart = routeParts[i];
        var hashPart = hashParts[i]; // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash

        if (hasLookupId.test(routePart)) {
          var routeMatches = hasLookupId.exec(routePart);
          var storeId = routeMatches[1];
          var routeRegex = regexStore[storeId]; // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line

          var _regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);

          if (_regMatches && _regMatches.length) {
            var expression = _regMatches[1];
            var modifiers = _regMatches[2];
            var regex = new RegExp("^/".concat(expression, "$"), modifiers);

            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }

      return isMatching;
    });

    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        var match = matches[matches.indexOf(hash)];
        return routes$1.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(function (a) {
          return isNamedGroup.test(a) ? -1 : 1;
        }); // would be strange if this fails
        // but still we test

        if (routeExists(matches[0])) {
          return routes$1.get(matches[0]);
        }
      }
    }

    return false;
  };
  var getValuesFromHash = function getValuesFromHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    var getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    var hashParts = hash.match(getUrlParts) || [];
    var routeParts = path.match(getUrlParts) || [];
    var getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce(function (storage, value, index) {
      var match = getNamedGroup.exec(value);

      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }

      return storage;
    }, new Map());
  };
  var getOption = function getOption(stack, prop) {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    } // we explicitly return undefined since we're testing
    // for explicit test values

  };
  /**
   * create and return new Route instance
   * @param config
   */

  var createRoute = function createRoute(config) {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      var options = {
        preventStorage: true
      };

      if (isObject(config.options)) {
        options = _objectSpread2(_objectSpread2({}, config.options), options);
      }

      config.options = options; // if configured add reference to bootRequest
      // as router after provider

      if (bootRequest) {
        config.after = bootRequest;
      }
    }

    return new Route(config);
  };
  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */

  var createRequest = function createRequest(url, args, store) {
    return new Request(url, args, store);
  };
  var getHashByName = function getHashByName(obj) {
    if (!obj.to && !obj.name) {
      return false;
    }

    var route = getRouteByName(obj.to || obj.name);
    var hasDynamicGroup = /\/:([\w-]+)\/?/;
    var hash = route; // if route contains dynamic group
    // we replace them with the provided params

    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        var keys = Object.keys(obj.params);
        hash = keys.reduce(function (acc, key) {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }

      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }

    return hash;
  };

  var getRouteByName = function getRouteByName(name) {
    var _iterator2 = _createForOfIteratorHelper(routes$1.entries()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            path = _step2$value[0],
            route = _step2$value[1];

        if (route.name === name) {
          return path;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return false;
  };

  var keepActivePageAlive = function keepActivePageAlive(route, request) {
    if (isString(route)) {
      var _routes = getRoutes();

      if (_routes.has(route)) {
        route = _routes.get(route);
      } else {
        return false;
      }
    }

    var register = request.register;
    var routeOptions = route.options;

    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }

    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var emit$1 = (function (page) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isArray(events)) {
      events = [events];
    }

    events.forEach(function (e) {
      var event = "_on".concat(ucfirst(e));

      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var activeWidget = null;
  var getReferences = function getReferences() {
    if (!widgetsHost) {
      return;
    }

    return widgetsHost.get().reduce(function (storage, widget) {
      var key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };
  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */

  var updateWidgets = function updateWidgets(widgets, page) {
    // force lowercase lookup
    var configured = (widgets || []).map(function (ref) {
      return ref.toLowerCase();
    });
    widgetsHost.forEach(function (widget) {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;

      if (widget.visible) {
        emit$1(widget, ['activated'], page);
      }
    });

    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };

  var getWidgetByName = function getWidgetByName(name) {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };
  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */


  var focusWidget = function focusWidget(name) {
    var widget = getWidgetByName(name);

    if (widget) {
      setActiveWidget(widget); // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath

      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  var restoreFocus = function restoreFocus() {
    activeWidget = null;

    app._setState('');
  };
  var getActiveWidget = function getActiveWidget() {
    return activeWidget;
  };
  var setActiveWidget = function setActiveWidget(instance) {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var createComponent = function createComponent(stage, type) {
    return stage.c({
      type: type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */

  var history = [];
  var updateHistory = function updateHistory(request) {
    var hash = getActiveHash();

    if (!hash) {
      return;
    } // navigate storage flag


    var register = request.register;
    var forceNavigateStore = register.get(symbols.store); // test preventStorage on route configuration

    var activeRoute = getRouteByHash(hash);
    var preventStorage = getOption(activeRoute.options, 'preventStorage'); // we give prio to navigate storage flag

    var store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;

    if (store) {
      var toStore = hash.replace(/^\//, '');
      var location = locationInHistory(toStore);
      var stateObject = getStateObject(getActivePage(), request);
      var routerConfig = getRouterConfig(); // store hash if it's not a part of history or flag for
      // storage of same hash is true

      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        var prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };

  var locationInHistory = function locationInHistory(hash) {
    for (var i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }

    return -1;
  };

  var getHistoryState = function getHistoryState(hash) {
    var state = null;

    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        var record = history[history.length - 1]; // could be null

        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          var _record = history[locationInHistory(hash)];
          state = _record.state;
        }
      }
    }

    return state;
  };
  var replaceHistoryState = function replaceHistoryState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var hash = arguments.length > 1 ? arguments[1] : undefined;

    if (!history.length) {
      return;
    }

    var location = hash ? locationInHistory(hash) : history.length - 1;

    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };

  var getStateObject = function getStateObject(page, request) {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }

    return null;
  };

  var getHistory = function getHistory() {
    return history.slice(0);
  };
  var setHistory = function setHistory() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (isArray(arr)) {
      history = arr;
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };

  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }

  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }

  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }

  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }

  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return target.propertyIsEnumerable(symbol);
    }) : [];
  }

  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }

  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  } // Protects from prototype poisoning and unexpected merging up the prototype chain.


  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }

    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }

      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }

  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }

  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };

  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  var warned = false;

  var deprecated = function deprecated() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }

    warned = true;
  };

  var Locale = /*#__PURE__*/function () {
    function Locale() {
      _classCallCheck(this, Locale);

      this.__enabled = false;
    }
    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */


    _createClass(Locale, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.__enabled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return fetch(path).then(function (resp) {
                    return resp.json();
                  }).then(function (resp) {
                    _this.loadFromObject(resp);
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
      /**
       * Sets language used by module.
       *
       * @param {String} lang
       */

    }, {
      key: "setLanguage",
      value: function setLanguage(lang) {
        deprecated();
        this.__enabled = true;
        this.language = lang;
      }
      /**
       * Returns reference to translation object for current language.
       *
       * @return {Object}
       */

    }, {
      key: "tr",
      get: function get() {
        deprecated(true);
        return this.__trObj[this.language];
      }
      /**
       * Loads translation object from existing object (binds existing object).
       *
       * @param {Object} trObj
       */

    }, {
      key: "loadFromObject",
      value: function loadFromObject(trObj) {
        deprecated();
        var fallbackLanguage = 'en';

        if (Object.keys(trObj).indexOf(this.language) === -1) {
          Log.warn('No translations found for: ' + this.language);

          if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
            Log.warn('Using fallback language: ' + fallbackLanguage);
            this.language = fallbackLanguage;
          } else {
            var error = 'No translations found for fallback language: ' + fallbackLanguage;
            Log.error(error);
            throw Error(error);
          }
        }

        this.__trObj = trObj;

        for (var _i = 0, _Object$values = Object.values(this.__trObj); _i < _Object$values.length; _i++) {
          var lang = _Object$values[_i];

          for (var _i2 = 0, _Object$keys = Object.keys(lang); _i2 < _Object$keys.length; _i2++) {
            var str = _Object$keys[_i2];
            lang[str] = new LocalizedString(lang[str]);
          }
        }
      }
    }]);

    return Locale;
  }();
  /**
   * Extended string class used for localization.
   */


  var LocalizedString = /*#__PURE__*/function (_String) {
    _inherits(LocalizedString, _String);

    var _super = _createSuper(LocalizedString);

    function LocalizedString() {
      _classCallCheck(this, LocalizedString);

      return _super.apply(this, arguments);
    }

    _createClass(LocalizedString, [{
      key: "format",
      value:
      /**
       * Returns formatted LocalizedString.
       * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
       *
       * E.g.:
       * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
       * A and B and A
       *
       * @param  {...any} args List of arguments for placeholders.
       */
      function format() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var sub = args.reduce(function (string, arg, index) {
          return string.split("{".concat(index, "}")).join(arg);
        }, this);
        return new LocalizedString(sub);
      }
    }]);

    return LocalizedString;
  }( /*#__PURE__*/_wrapNativeSuper(String));

  var Locale$1 = new Locale();

  var VersionLabel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VersionLabel, _Lightning$Component);

    var _super = _createSuper(VersionLabel);

    function VersionLabel() {
      _classCallCheck(this, VersionLabel);

      return _super.apply(this, arguments);
    }

    _createClass(VersionLabel, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
        this.tag('Text').loadTexture();
        this.w = this.tag('Text').renderWidth + 40;
        this.h = this.tag('Text').renderHeight + 5;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xbb0078ac,
          h: 40,
          w: 100,
          x: function x(w) {
            return w - 50;
          },
          y: function y(h) {
            return h - 50;
          },
          mount: 1,
          Text: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 5,
            x: 20,
            text: {
              fontSize: 22,
              lineHeight: 26
            }
          }
        };
      }
    }]);

    return VersionLabel;
  }(Lightning.Component);

  var FpsIndicator = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(FpsIndicator, _Lightning$Component);

    var _super = _createSuper(FpsIndicator);

    function FpsIndicator() {
      _classCallCheck(this, FpsIndicator);

      return _super.apply(this, arguments);
    }

    _createClass(FpsIndicator, [{
      key: "_setup",
      value: function _setup() {
        var _this = this;

        this.config = _objectSpread2(_objectSpread2({}, {
          log: false,
          interval: 500,
          threshold: 1
        }), Settings.get('platform', 'showFps'));
        this.fps = 0;
        this.lastFps = this.fps - this.config.threshold;

        var fpsCalculator = function fpsCalculator() {
          _this.fps = ~~(1 / _this.stage.dt);
        };

        this.stage.on('frameStart', fpsCalculator);
        this.stage.off('framestart', fpsCalculator);
        this.interval = setInterval(this.showFps.bind(this), this.config.interval);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.showFps();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        clearInterval(this.interval);
      }
    }, {
      key: "showFps",
      value: function showFps() {
        if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
        this.lastFps = this.fps; // green

        var bgColor = 0xff008000; // orange

        if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500; // red
        else if (this.fps <= 20) bgColor = 0xffff0000;
        this.tag('Background').setSmooth('color', bgColor);
        this.tag('Counter').text = "".concat(this.fps);
        this.config.log && Log.info('FPS', this.fps);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xffffffff,
          texture: Lightning.Tools.getRoundRect(80, 80, 40),
          h: 80,
          w: 80,
          x: 100,
          y: 100,
          mount: 1,
          Background: {
            x: 3,
            y: 3,
            texture: Lightning.Tools.getRoundRect(72, 72, 36),
            color: 0xff008000
          },
          Counter: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            y: 10,
            text: {
              fontSize: 32,
              textAlign: 'center'
            }
          },
          Text: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h2) {
              return _h2;
            },
            y: 48,
            text: {
              fontSize: 15,
              textAlign: 'center',
              text: 'FPS'
            }
          }
        };
      }
    }]);

    return FpsIndicator;
  }(Lightning.Component);

  var meta = {};
  var translations = {};
  var language = null;
  var initLanguage = function initLanguage(file) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      fetch(file).then(function (response) {
        return response.json();
      }).then(function (json) {
        setTranslations(json); // set language (directly or in a promise)

        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(function (lang) {
          return setLanguage(lang).then(resolve).catch(reject);
        }).catch(function (e) {
          Log.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(function () {
        var error = 'Language file ' + file + ' not found';
        Log.error(error);
        reject(error);
      });
    });
  };

  var setTranslations = function setTranslations(obj) {
    if ('meta' in obj) {
      meta = _objectSpread2({}, obj.meta);
      delete obj.meta;
    }

    translations = obj;
  };

  var setLanguage = function setLanguage(lng) {
    language = null;
    return new Promise(function (resolve, reject) {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          var error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log.warn(error);
          language = meta.default;
        } else {
          var _error = 'Translations for Language ' + language + ' not found.';

          Log.error(_error);
          reject(_error);
        }
      }

      if (language) {
        Log.info('Setting language to', language);
        var translationsObj = translations[language];

        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          var url = Utils.asset(translationsObj);
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (json) {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(function (e) {
            var error = 'Error while fetching ' + url;
            Log.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      var timeoutId = setTimeout(function () {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        cb.apply(null, params);
      }, timeout, params);
      Log.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(function (id) {
          return id !== timeoutId;
        });
        Log.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    }),
    clearTimeouts: function clearTimeouts() {
      var _this = this;

      registry.timeouts.forEach(function (timeoutId) {
        _this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval: function (_setInterval) {
      function setInterval(_x4, _x5) {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function (cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      var intervalId = setInterval(function () {
        registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        cb.apply(null, params);
      }, interval, params);
      Log.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    }),
    clearInterval: function (_clearInterval) {
      function clearInterval(_x6) {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function (intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(function (id) {
          return id !== intervalId;
        });
        Log.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    }),
    clearIntervals: function clearIntervals() {
      var _this2 = this;

      registry.intervals.forEach(function (intervalId) {
        _this2.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener: function addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      var targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener: function removeEventListener(target, event, handler) {
      var targetIndex = registry.targets.indexOf(target);

      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(function (fn) {
          return fn !== handler;
        });
        Log.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
      } else {
        Log.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners: function removeEventListeners(target, event) {
      var _this3 = this;

      if (target && event) {
        var targetIndex = registry.targets.indexOf(target);

        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(function (handler) {
            _this3.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        var _targetIndex = registry.targets.indexOf(target);

        if (_targetIndex > -1) {
          Object.keys(registry.eventListeners[_targetIndex]).forEach(function (_event) {
            _this3.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(function (targetIndex) {
          _this3.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear: function clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var isObject$1 = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isString$1 = function isString(v) {
    return typeof v === 'string';
  };
  var getRgbaComponents = function getRgbaComponents(argb) {
    return {
      r: (argb / 65536 | 0) % 256,
      g: (argb / 256 | 0) % 256,
      b: argb * 1 % 256,
      a: argb / 16777216 | 0
    };
  };
  var mergeColors = function mergeColors(c1, c2, p) {
    var r1 = (c1 / 65536 | 0) % 256;
    var g1 = (c1 / 256 | 0) % 256;
    var b1 = c1 % 256;
    var a1 = c1 / 16777216 | 0;
    var r2 = (c2 / 65536 | 0) % 256;
    var g2 = (c2 / 256 | 0) % 256;
    var b2 = c2 % 256;
    var a2 = c2 / 16777216 | 0;
    var r = r1 * p + r2 * (1 - p);
    var g = g1 * p + g2 * (1 - p);
    var b = b1 * p + b2 * (1 - p);
    var a = a1 * p + a2 * (1 - p);
    return Math.round(a) * 16777216 + Math.round(r) * 65536 + Math.round(g) * 256 + Math.round(b);
  };
  var calculateAlpha = function calculateAlpha(argb, p) {
    if (p > 1) {
      p /= 100;
    } else if (p < 0) {
      p = 0;
    }

    var r = (argb / 65536 | 0) % 256;
    var g = (argb / 256 | 0) % 256;
    var b = argb % 256;
    return (r << 16) + (g << 8) + b + (p * 255 | 0) * 16777216;
  };

  var getArgbNumber = function getArgbNumber(rgba) {
    rgba[0] = Math.max(0, Math.min(255, rgba[0]));
    rgba[1] = Math.max(0, Math.min(255, rgba[1]));
    rgba[2] = Math.max(0, Math.min(255, rgba[2]));
    rgba[3] = Math.max(0, Math.min(255, rgba[3]));
    var v = ((rgba[3] | 0) << 24) + ((rgba[0] | 0) << 16) + ((rgba[1] | 0) << 8) + (rgba[2] | 0);

    if (v < 0) {
      v = 0xffffffff + v + 1;
    }

    return v;
  };
  var argbToHSLA = function argbToHSLA(argb) {
    var col = getRgbaComponents(argb);
    var r = col.r / 255;
    var g = col.g / 255;
    var b = col.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (min + max) * 0.5;

    if (l > 0) {
      var maxMin = max - min;

      if (maxMin > 0) {
        var r2 = (max - r) / maxMin;
        var g2 = (max - g) / maxMin;
        var b2 = (max - b) / maxMin;

        if (l < 0.5) {
          s = max + min;
        } else {
          s = 2 - max - min;
        }

        if (r === max && g === min) {
          h = 5.0 + b2;
        } else if (r === max) {
          h = 1.0 - g2;
        } else if (g === max && b === min) {
          h = 1.0 + r2;
        } else if (g === max) {
          h = 3.0 - b2;
        } else if (b === max) {
          h = 3.0 + g2;
        } else {
          h = 5.0 - r2;
        }

        h = h / 6;
      }
    }

    return {
      h: h % 1,
      s: s,
      l: l,
      a: col.a
    };
  };
  var hslaToARGB = function hslaToARGB(hsla) {
    var r = 1;
    var g = 1;
    var b = 1;
    var h = hsla.h;
    var s = hsla.s;
    var l = hsla.l;

    if (h < 0) {
      h += 1;
    }

    var max = 0;

    if (l <= 0.5) {
      max = l * (1.0 + s);
    } else {
      max = l + s - l * s;
    }

    if (max > 0) {
      h *= 6.0;
      var min = l + l - max;
      var minMax = (max - min) / max;
      var sextant = Math.floor(h);
      var fract = h - sextant;
      var minMaxFract = max * minMax * fract;
      var mid1 = min + minMaxFract;
      var mid2 = max - minMaxFract;

      if (sextant === 0) {
        r = max;
        g = mid1;
        b = min;
      }

      if (sextant === 1) {
        r = mid2;
        g = max;
        b = min;
      }

      if (sextant === 2) {
        r = min;
        g = max;
        b = mid1;
      }

      if (sextant === 3) {
        r = min;
        g = mid2;
        b = max;
      }

      if (sextant === 4) {
        r = mid1;
        g = min;
        b = max;
      }

      if (sextant === 5) {
        r = max;
        g = min;
        b = mid2;
      }
    }

    return getArgbNumber([Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255), hsla.a]);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  var normalizedColors = {//store for normalized colors
  };

  var addColors = function addColors(colorsToAdd, value) {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(function (color) {
        return cleanUpNormalizedColors(color);
      });
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };

  var cleanUpNormalizedColors = function cleanUpNormalizedColors(color) {
    for (var c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };

  var initColors = function initColors(file) {
    return new Promise(function (resolve, reject) {
      if (typeof file === 'object') {
        addColors(file);
        resolve();
      }

      fetch(file).then(function (response) {
        return response.json();
      }).then(function (json) {
        addColors(json);
        resolve();
      }).catch(function () {
        var error = 'Colors file ' + file + ' not found';
        Log.error(error);
        reject(error);
      });
    });
  };

  var normalizeColorToARGB = function normalizeColorToARGB(color) {
    var targetColor = normalizedColors[color] || colors[color] || color;

    if (!targetColor) {
      targetColor = color;
    }

    var check = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;

    if (isString$1(targetColor) && check.test(targetColor)) {
      var hex = check.exec(targetColor)[1];

      if (hex.length === 3) {
        hex = hex.split('').map(function (value) {
          return value + value;
        }).join('');
      }

      targetColor = "0xff".concat(hex) * 1;
    }

    if (!normalizedColors[color]) {
      normalizedColors[color] = targetColor;
    }

    return targetColor || 0xffffffff;
  };

  var Colors = (function (color) {
    return Color.generate(color);
  });
  var Color = {
    color: null,
    generate: function generate() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.color;

      if (normalizedColors[value]) {
        this.color = normalizedColors[value];
      } else {
        this.color = normalizeColorToARGB(value);
      }

      return this;
    },
    get: function get() {
      return this.color;
    },
    alpha: function alpha(percentage) {
      this.color = calculateAlpha(this.color, Math.abs(percentage));
      return this;
    },
    darker: function darker(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = hsl.l * (1 - percentage);
      this.color = hslaToARGB(hsl);
      return this;
    },
    lighter: function lighter(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = hsl.l + (1 - hsl.l) * percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    saturation: function saturation(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.s = percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    lightness: function lightness(percentage) {
      var hsl = argbToHSLA(this.color);
      hsl.l = percentage;
      this.color = hslaToARGB(hsl);
      return this;
    },
    hue: function hue(degrees) {
      var hsl = argbToHSLA(this.color);
      hsl.h = degrees;
      this.color = hslaToARGB(hsl);
      return this;
    },
    mix: function mix(argb, p) {
      this.color = mergeColors(this.color, argb, p);
      return this;
    }
  };

  var version = "4.7.0";

  var AppInstance;
  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };

  if (window.innerHeight === 720) {
    defaultOptions.stage['w'] = 1280;
    defaultOptions.stage['h'] = 720;
    defaultOptions.stage['precision'] = 0.6666666667;
  }

  var customFontFaces = [];

  var fontLoader = function fontLoader(fonts, store) {
    return new Promise(function (resolve, reject) {
      fonts.map(function (_ref) {
        var family = _ref.family,
            url = _ref.url,
            urls = _ref.urls,
            descriptors = _ref.descriptors;
        return function () {
          var src = urls ? urls.map(function (url) {
            return 'url(' + url + ')';
          }) : 'url(' + url + ')';
          var fontFace = new FontFace(family, src, descriptors || {});
          store.push(fontFace);
          Log.info('Loading font', family);
          document.fonts.add(fontFace);
          return fontFace.load();
        };
      }).reduce(function (promise, method) {
        return promise.then(function () {
          return method();
        });
      }, Promise.resolve(null)).then(resolve).catch(reject);
    });
  };

  function Application (App, appData, platformSettings) {
    return /*#__PURE__*/function (_Lightning$Applicatio) {
      _inherits(Application, _Lightning$Applicatio);

      var _super = _createSuper(Application);

      function Application(options) {
        var _this;

        _classCallCheck(this, Application);

        var config = cjs(defaultOptions, options);
        _this = _super.call(this, config);
        _this.config = config;
        return _this;
      }

      _createClass(Application, [{
        key: "_setup",
        value: function _setup() {
          var _this2 = this;

          Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []), // to be deprecated
          Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(function () {
            Metrics$1.app.loaded();
            AppInstance = _this2.stage.c({
              ref: 'App',
              type: App,
              zIndex: 1,
              forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
            });

            _this2.childList.a(AppInstance);

            _this2._refocus();

            Log.info('App version', _this2.config.version);
            Log.info('SDK version', version);

            if (platformSettings.showVersion) {
              _this2.childList.a({
                ref: 'VersionLabel',
                type: VersionLabel,
                version: _this2.config.version,
                sdkVersion: version,
                zIndex: 1
              });
            }

            if (platformSettings.showFps) {
              _this2.childList.a({
                ref: 'FpsCounter',
                type: FpsIndicator,
                zIndex: 1
              });
            }

            _get(_getPrototypeOf(Application.prototype), "_setup", _this2).call(_this2);
          }).catch(console.error);
        }
      }, {
        key: "_handleBack",
        value: function _handleBack() {
          this.closeApp();
        }
      }, {
        key: "_handleExit",
        value: function _handleExit() {
          this.closeApp();
        }
      }, {
        key: "closeApp",
        value: function closeApp() {
          Log.info('Signaling App Close');

          if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
            platformSettings.onClose.apply(platformSettings, arguments);
          } else {
            this.close();
          }
        }
      }, {
        key: "close",
        value: function close() {
          Log.info('Closing App');
          Settings.clearSubscribers();
          Registry.clear();
          this.childList.remove(this.tag('App'));
          this.cleanupFonts(); // force texture garbage collect

          this.stage.gc();
          this.destroy();
        }
      }, {
        key: "loadFonts",
        value: function loadFonts(fonts) {
          return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
        }
      }, {
        key: "cleanupFonts",
        value: function cleanupFonts() {
          if ('delete' in document.fonts) {
            customFontFaces.forEach(function (fontFace) {
              Log.info('Removing font', fontFace.family);
              document.fonts.delete(fontFace);
            });
          } else {
            Log.info('No support for removing manually-added fonts');
          }
        }
      }, {
        key: "loadLanguage",
        value: function loadLanguage(config) {
          var file = Utils.asset('translations.json');
          var language = config;

          if (typeof language === 'object') {
            language = config.language || null;
            file = config.file || file;
          }

          return initLanguage(file, language);
        }
      }, {
        key: "loadColors",
        value: function loadColors(config) {
          var file = Utils.asset('colors.json');

          if (config && (typeof config === 'string' || typeof config === 'object')) {
            file = config;
          }

          return initColors(file);
        }
      }, {
        key: "focus",
        set: function set(v) {
          this._focussed = v;

          this._refocus();
        }
      }, {
        key: "_getFocused",
        value: function _getFocused() {
          return this._focussed || this.tag('App');
        }
      }], [{
        key: "_template",
        value: function _template() {
          return {
            w: 1920,
            h: 1080
          };
        }
      }]);

      return Application;
    }(Lightning.Application);
  }

  /**
   * @type {Lightning.Application}
   */

  var application;
  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */

  var app;
  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */

  var pagesHost;
  /**
   * @type {Lightning.Stage}
   */

  var stage;
  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */

  var routerConfig$1;
  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */

  var widgetsHost;
  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */

  var rootHash;
  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */

  var bootRequest;
  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */

  var updateHash = true;
  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line

  var beforeEachRoute = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(from, to) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", true);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function beforeEachRoute(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */

  var afterEachRoute = function afterEachRoute() {};
  /**
   * All configured routes
   * @type {Map<string, object>}
   */

  var routes$1 = new Map();
  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */

  var components = new Map();
  /**
   * Flag if router has been initialised
   * @type {boolean}
   */

  var initialised = false;
  /**
   * Current page being rendered on screen
   * @type {null}
   */

  var activePage = null;
  var activeHash;
  var activeRoute;
  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */

  var lastAcceptedHash;

  var mixin = function mixin(app) {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    } // if the app is using widgets we grab refs
    // and hide all the widgets


    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList; // hide all widgets on boot

      widgetsHost.forEach(function (w) {
        return w.visible = false;
      });
    }

    app._handleBack = function (e) {
      step(-1);
      e.preventDefault();
    };
  };

  var bootRouter = function bootRouter(config, instance) {
    var appInstance = config.appInstance,
        routes = config.routes; // if instance is provided and it's and Lightning Component instance

    if (instance && isPage(instance)) {
      app = instance;
    }

    if (!app) {
      app = appInstance || AppInstance;
    }

    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig$1 = getConfigMap();
    mixin(app);

    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  var setup = function setup(config) {
    if (!initialised) {
      init(config);
    }

    config.routes.forEach(function (r) {
      var path = cleanHash(r.path);

      if (!routeExists(path)) {
        var route = createRoute(r);
        routes$1.set(path, route); // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route

        if (route.component) {
          var type = route.component;

          if (isComponentConstructor(type)) {
            if (!routerConfig$1.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }

          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };

  var init = function init(config) {
    rootHash = config.root;

    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }

    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }

    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }

    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }

    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');

      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }

    initialised = true;
  };

  var storeComponent = function storeComponent(route, type) {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  var getComponent = function getComponent(route) {
    if (components.has(route)) {
      return components.get(route);
    }

    return null;
  };
  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */

  var mustUpdateLocationHash = function mustUpdateLocationHash() {
    if (!routerConfig$1 || !routerConfig$1.size) {
      return false;
    } // we need support to either turn change hash off
    // per platform or per app


    var updateConfig = routerConfig$1.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };
  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */

  var onRequestResolved = function onRequestResolved(request) {
    var hash = request.hash;
    var route = request.route;
    var register = request.register;
    var page = request.page; // clean up history if modifier is set

    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    } // we only update the stackLocation if a route
    // is not expired before it resolves


    storeComponent(route.path, page);

    if (request.isSharedInstance || !request.isCreated) {
      emit$1(page, 'changed');
    } else if (request.isCreated) {
      emit$1(page, 'mounted');
    } // only update widgets if we have a host


    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    } // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route


    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    } // provide history object to active page


    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }

    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path; // cleanup all cancelled requests

    var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _request = _step.value;

        if (_request.isCancelled && _request.hash) {
          navigateQueue.delete(_request.hash);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    afterEachRoute(request);
    Log.info('[route]:', route.path);
    Log.info('[hash]:', hash);
  };

  var cleanUp = function cleanUp(page, request) {
    var route = activeRoute;
    var register = request.register;
    var lazyDestroy = routerConfig$1.get('lazyDestroy');
    var destroyOnBack = routerConfig$1.get('destroyOnHistoryBack');
    var keepAlive = register.get('keepAlive');
    var isFromHistory = register.get(symbols.backtrack);
    var doCleanup = false; // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled

    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    } // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false


    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    } // if the current and new request share the same route blueprint


    if (activeRoute === request.route.path) {
      doCleanup = true;
    }

    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor); // actual remove of page from memory

      pagesHost.remove(page); // force texture gc() if configured
      // so we can cleanup textures in the same tick

      if (routerConfig$1.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };

  var getActiveHash = function getActiveHash() {
    return activeHash;
  };
  var setActivePage = function setActivePage(page) {
    activePage = page;
  };
  var getActivePage = function getActivePage() {
    return activePage;
  };
  var getActiveRoute = function getActiveRoute() {
    return activeRoute;
  };
  var getLastHash = function getLastHash() {
    return lastAcceptedHash;
  };
  var setLastHash = function setLastHash(hash) {
    lastAcceptedHash = hash;
  };
  var routeExists = function routeExists(key) {
    return routes$1.has(key);
  };
  var getRootHash = function getRootHash() {
    return rootHash;
  };
  var getBootRequest = function getBootRequest() {
    return bootRequest;
  };
  var getRouterConfig = function getRouterConfig() {
    return routerConfig$1;
  };
  var getRoutes = function getRoutes() {
    return routes$1;
  };

  var isFunction = function isFunction(v) {
    return typeof v === 'function';
  };
  var isObject = function isObject(v) {
    return typeof v === 'object' && v !== null;
  };
  var isBoolean = function isBoolean(v) {
    return typeof v === 'boolean';
  };
  var isPage = function isPage(v) {
    if (v instanceof Lightning.Element || isComponentConstructor(v)) {
      return true;
    }

    return false;
  };
  var isComponentConstructor = function isComponentConstructor(type) {
    return type.prototype && 'isComponent' in type.prototype;
  };
  var isArray = function isArray(v) {
    return Array.isArray(v);
  };
  var ucfirst = function ucfirst(v) {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  var isString = function isString(v) {
    return typeof v === 'string';
  };
  var isPromise = function isPromise(method) {
    var result;

    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    return isObject(result) && isFunction(result.then);
  };
  var cleanHash = function cleanHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  var getConfigMap = function getConfigMap() {
    var routerSettings = Settings.get('platform', 'router');
    var isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce(function (config, key) {
      config.set(key, isObj ? routerSettings[key] : Settings.get('platform', key));
      return config;
    }, new Map());
  };
  var getQueryStringParams = function getQueryStringParams() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    var resumeHash = getResumeHash();

    if (hash === '$' || resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }

    var parse = '';
    var getQuery = /([?&].*)/;
    var matches = getQuery.exec(hash);
    var params = {};

    if (document.location && document.location.search) {
      parse = document.location.search;
    }

    if (matches && matches.length) {
      var hashParams = matches[1];

      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, ''); // we parse hash params last so they we can always
        // override search params with hash params

        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }

    if (parse) {
      var urlParams = new URLSearchParams(parse);

      var _iterator = _createForOfIteratorHelper(urlParams.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          params[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return params;
    } else {
      return false;
    }
  };
  var objectToQueryString = function objectToQueryString(obj) {
    if (!isObject(obj)) {
      return '';
    }

    return '?' + Object.keys(obj).map(function (key) {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  var symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  var dataHooks = {
    on: function on(request) {
      app.state || '';

      app._setState('Loading');

      return execProvider(request);
    },
    before: function before(request) {
      return execProvider(request);
    },
    after: function after(request) {
      try {
        execProvider(request, true);
      } catch (e) {// for now we fail silently
      }

      return Promise.resolve();
    }
  };

  var execProvider = function execProvider(request, emitProvided) {
    var route = request.route;
    var provider = route.provider;
    var expires = route.cache ? route.cache * 1000 : 0;
    var params = addPersistData(request);
    return provider.request(request.page, _objectSpread2({}, params)).then(function () {
      request.page[symbols.expires] = Date.now() + expires;

      if (emitProvided) {
        emit$1(request.page, 'dataProvided');
      }
    });
  };

  var addPersistData = function addPersistData(_ref) {
    var page = _ref.page,
        route = _ref.route,
        hash = _ref.hash,
        _ref$register = _ref.register,
        register = _ref$register === void 0 ? new Map() : _ref$register;
    var urlValues = getValuesFromHash(hash, route.path);
    var queryParams = getQueryStringParams(hash);
    var pageData = new Map([].concat(_toConsumableArray(urlValues), _toConsumableArray(register)));
    var params = {}; // make dynamic url data available to the page
    // as instance properties

    var _iterator = _createForOfIteratorHelper(pageData),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            name = _step$value[0],
            value = _step$value[1];

        params[name] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    } // check navigation register for persistent data


    if (register.size) {
      var obj = {};

      var _iterator2 = _createForOfIteratorHelper(register),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              k = _step2$value[0],
              v = _step2$value[1];

          obj[k] = v;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      page.persist = obj;
    } // make url data and persist data available
    // via params property


    page.params = params;
    emit$1(page, ['urlParams'], params);
    return params;
  };
  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */

  var isPageExpired = function isPageExpired(page) {
    if (!page[symbols.expires]) {
      return false;
    }

    var expires = page[symbols.expires];
    var now = Date.now();
    return now >= expires;
  };
  var hasProvider = function hasProvider(path) {
    if (routeExists(path)) {
      var record = routes$1.get(path);
      return !!record.provider;
    }

    return false;
  };
  var getProvider = function getProvider(route) {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      var _routes$get = routes$1.get(route.path),
          provider = _routes$get.provider;

      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var fade = function fade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      }); // resolve on y finish

      i.transition('alpha').on('finish', function () {
        if (o) {
          o.visible = false;
        }

        resolve();
      });
    });
  };

  var crossFade = function crossFade(i, o) {
    return new Promise(function (resolve) {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });

      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      } // resolve on y finish


      i.transition('alpha').on('finish', function () {
        resolve();
      });
    });
  };

  var moveOnAxes = function moveOnAxes(axis, direction, i, o) {
    var bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(function (resolve) {
      var _i$patch;

      i.patch((_i$patch = {}, _defineProperty(_i$patch, "".concat(axis), direction ? bounds * -1 : bounds), _defineProperty(_i$patch, "visible", true), _defineProperty(_i$patch, "smooth", _defineProperty({}, "".concat(axis), [0, {
        duration: 0.4,
        delay: 0.2
      }])), _i$patch)); // out is optional

      if (o) {
        var _o$patch;

        o.patch((_o$patch = {}, _defineProperty(_o$patch, "".concat(axis), 0), _defineProperty(_o$patch, "smooth", _defineProperty({}, "".concat(axis), [direction ? bounds : bounds * -1, {
          duration: 0.4,
          delay: 0.2
        }])), _o$patch));
      } // resolve on y finish


      i.transition(axis).on('finish', function () {
        resolve();
      });
    });
  };

  var up = function up(i, o) {
    return moveOnAxes('y', 0, i, o);
  };

  var down = function down(i, o) {
    return moveOnAxes('y', 1, i, o);
  };

  var left = function left(i, o) {
    return moveOnAxes('x', 0, i, o);
  };

  var right = function right(i, o) {
    return moveOnAxes('x', 1, i, o);
  };

  var Transitions = {
    fade: fade,
    crossFade: crossFade,
    up: up,
    down: down,
    left: left,
    right: right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */

  var executeTransition = function executeTransition(pageIn) {
    var pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var transition = pageIn.pageTransition || pageIn.easing;
    var hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    var transitionsDisabled = getRouterConfig().get('disableTransitions');

    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    } // default behaviour is a visibility toggle


    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;

      if (pageOut) {
        pageOut.visible = false;
      }

      return Promise.resolve();
    }

    if (transition) {
      var type;

      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }

      if (isPromise(type)) {
        return type;
      }

      if (isString(type)) {
        var fn = Transitions[type];

        if (fn) {
          return fn(pageIn, pageOut);
        }
      } // keep backwards compatible for now


      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        var smooth = function smooth(p, v) {
          var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(function (resolve) {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', function () {
              resolve();
            });
          });
        };

        return pageIn.smoothIn({
          pageIn: pageIn,
          smooth: smooth
        });
      }
    }

    return Transitions.crossFade(pageIn, pageOut);
  };

  /**
   * The actual loading of the component
   * */

  var load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request) {
      var expired, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expired = false;
              _context.prev = 1;
              _context.next = 4;
              return loader$1(request);

            case 4:
              request = _context.sent;

              if (!(request && !request.isCancelled)) {
                _context.next = 12;
                break;
              }

              // in case of on() providing we need to reset
              // app state;
              if (app.state === 'Loading') {
                {
                  app._setState('');
                }
              } // Do page transition if instance
              // is not shared between the routes


              if (!(!request.isSharedInstance && !request.isCancelled)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return executeTransition(request.page, getActivePage());

            case 10:
              _context.next = 13;
              break;

            case 12:
              expired = true;

            case 13:
              if (!(expired || request.isCancelled)) {
                _context.next = 18;
                break;
              }

              Log.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));

              if (request.isCreated && !request.isSharedInstance) {
                // remove from render-tree
                pagesHost.remove(request.page);
              }

              _context.next = 20;
              break;

            case 18:
              onRequestResolved(request); // resolve promise

              return _context.abrupt("return", request.page);

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](1);

              if (!_context.t0.route) {
                console.error(_context.t0);
              } else if (!expired) {
                // @todo: revisit
                route = _context.t0.route; // clean up history if modifier is set

                if (getOption(route.options, 'clearHistory')) {
                  setHistory([]);
                } else if (!isWildcard.test(route.path)) {
                  updateHistory(_context.t0);
                }

                if (_context.t0.isCreated && !_context.t0.isSharedInstance) {
                  // remove from render-tree
                  pagesHost.remove(_context.t0.page);
                }

                handleError(_context.t0);
              }

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 22]]);
    }));

    return function load(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loader$1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request) {
      var route, hash, register, type, isConstruct, provide, currentRoute, _getProvider, loadType, provider;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              route = request.route;
              hash = request.hash;
              register = request.register; // todo: grab from Route instance

              type = getComponent(route.path);
              isConstruct = isComponentConstructor(type);
              provide = false; // if it's an instance bt we're not coming back from
              // history we test if we can re-use this instance

              if (!isConstruct && !register.get(symbols.backtrack)) {
                if (!mustReuse(route)) {
                  type = type.constructor;
                  isConstruct = true;
                }
              } // If page is Lightning Component instance


              if (!isConstruct) {
                request.page = type; // if we have have a data route for current page

                if (hasProvider(route.path)) {
                  if (isPageExpired(type) || type[symbols.hash] !== hash) {
                    provide = true;
                  }
                }

                currentRoute = getActivePage() && getActivePage()[symbols.route]; // if the new route is equal to the current route it means that both
                // route share the Component instance and stack location / since this case
                // is conflicting with the way before() and after() loading works we flag it,
                // and check platform settings in we want to re-use instance

                if (route.path === currentRoute) {
                  request.isSharedInstance = true; // since we're re-using the instance we must attach
                  // historyState to the request to prevent it from
                  // being overridden.

                  if (isFunction(request.page.historyState)) {
                    request.copiedHistoryState = request.page.historyState();
                  }
                }
              } else {
                request.page = createComponent(stage, type);
                pagesHost.a(request.page); // test if need to request data provider

                if (hasProvider(route.path)) {
                  provide = true;
                }

                request.isCreated = true;
              } // we store hash and route as properties on the page instance
              // that way we can easily calculate new behaviour on page reload


              request.page[symbols.hash] = hash;
              request.page[symbols.route] = route.path;
              _context2.prev = 10;

              if (!provide) {
                _context2.next = 25;
                break;
              }

              // extract attached data-provider for route
              // we're processing
              _getProvider = getProvider(route), loadType = _getProvider.type, provider = _getProvider.provider; // update running request

              request.provider = provider;
              request.providerType = loadType;
              _context2.next = 17;
              return dataHooks[loadType](request);

            case 17:
              if (!(hash !== getLastHash())) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt("return", false);

            case 21:
              if (request.providerType !== 'after') {
                emit$1(request.page, 'dataProvided');
              } // resolve promise


              return _context2.abrupt("return", request);

            case 23:
              _context2.next = 27;
              break;

            case 25:
              addPersistData(request);
              return _context2.abrupt("return", request);

            case 27:
              _context2.next = 33;
              break;

            case 29:
              _context2.prev = 29;
              _context2.t0 = _context2["catch"](10);
              request.error = _context2.t0;
              return _context2.abrupt("return", Promise.reject(request));

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[10, 29]]);
    }));

    return function loader(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleError = function handleError(request) {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log.error(request);
    }

    if (request.page && routeExists('!')) {
      navigate('!', {
        request: request
      }, false);
    }
  };

  var mustReuse = function mustReuse(route) {
    var opt = getOption(route.options, 'reuseInstance');
    var config = routerConfig$1.get('reuseInstance'); // route always has final decision

    if (isBoolean(opt)) {
      return opt;
    }

    return !(isBoolean(config) && config === false);
  };

  var RoutedApp = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(RoutedApp, _Lightning$Component);

    var _super = _createSuper(RoutedApp);

    function RoutedApp() {
      _classCallCheck(this, RoutedApp);

      return _super.apply(this, arguments);
    }

    _createClass(RoutedApp, [{
      key: "pages",
      get:
      /**
       * Return location where pages need to be stored
       */
      function get() {
        return this.tag('Pages');
      }
      /**
       * Tell router where widgets are stored
       */

    }, {
      key: "widgets",
      get: function get() {
        return this.tag('Widgets');
      }
      /**
       * we MUST register _handleBack method so the Router
       * can override it
       * @private
       */

    }, {
      key: "_handleBack",
      value: function _handleBack() {}
      /**
       * We MUST return Router.activePage() so the new Page
       * can listen to the remote-control.
       */

    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return Router.getActivePage();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Pages: {
            forceZIndexContext: true
          },

          /**
           * This is a default Loading page that will be made visible
           * during data-provider on() you CAN override in child-class
           */
          Loading: {
            rect: true,
            w: 1920,
            h: 1080,
            color: 0xff000000,
            visible: false,
            zIndex: 99,
            Label: {
              mount: 0.5,
              x: 960,
              y: 540,
              text: {
                text: 'Loading..'
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this) {
          _inherits(Loading, _this);

          var _super2 = _createSuper(Loading);

          function Loading() {
            _classCallCheck(this, Loading);

            return _super2.apply(this, arguments);
          }

          _createClass(Loading, [{
            key: "$enter",
            value: function $enter() {
              this.tag('Loading').visible = true;
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag('Loading').visible = false;
            }
          }]);

          return Loading;
        }(this), /*#__PURE__*/function (_this2) {
          _inherits(Widgets, _this2);

          var _super3 = _createSuper(Widgets);

          function Widgets() {
            _classCallCheck(this, Widgets);

            return _super3.apply(this, arguments);
          }

          _createClass(Widgets, [{
            key: "$enter",
            value: function $enter(args, widget) {
              // store widget reference
              this._widget = widget; // since it's possible that this behaviour
              // is non-remote driven we force a recalculation
              // of the focuspath

              this._refocus();
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              // we delegate focus to selected widget
              // so it can consume remotecontrol presses
              return this._widget;
            } // if we want to widget to widget focus delegation

          }, {
            key: "reload",
            value: function reload(widget) {
              this._widget = widget;

              this._refocus();
            }
          }, {
            key: "_handleKey",
            value: function _handleKey() {
              var restoreFocus = routerConfig$1.get('autoRestoreRemote');
              /**
               * The Router used to delegate focus back to the page instance on
               * every unhandled key. This is barely usefull in any situation
               * so for now we offer the option to explicity turn that behaviour off
               * so we don't don't introduce a breaking change.
               */

              if (!isBoolean(restoreFocus) || restoreFocus === true) {
                Router.focusPage();
              }
            }
          }]);

          return Widgets;
        }(this)];
      }
    }]);

    return RoutedApp;
  }(Lightning.Component);

  /*
  rouThor ==[x]
   */

  var navigateQueue = new Map();
  var forcedHash = '';
  var resumeHash = '';
  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */

  var startRouter = function startRouter(config, instance) {
    bootRouter(config, instance);
    registerListener();
    start();
  }; // start translating url


  var start = function start() {
    var hash = (getHash() || '').replace(/^#/, '');
    var bootKey = '$';
    var params = getQueryStringParams(hash);
    var bootRequest = getBootRequest();
    var rootHash = getRootHash();
    var isDirectLoad = hash.indexOf(bootKey) !== -1; // prevent direct reload of wildcard routes
    // expect bootComponent

    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    } // store resume point for manual resume


    resumeHash = isDirectLoad ? rootHash : hash || rootHash;

    var ready = function ready() {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(function (res) {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    };

    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }

      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(function () {
        ready();
      }).catch(function (e) {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };

  var handleBootError = function handleBootError(e) {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };
  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */


  var navigate = function navigate(url) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;

    if (isObject(url)) {
      url = getHashByName(url);

      if (!url) {
        return;
      }
    }

    var hash = getHash();

    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }

    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      setHash(url);

      if (!mustUpdateLocationHash()) {
        forcedHash = url;
        handleHashChange(url).then(function () {
          app._refocus();
        }).catch(function (e) {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(function () {
        app._refocus();
      }).catch(function (e) {
        console.error(e);
      });
    }
  };

  var queue = function queue(hash) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);

    if (!navigateQueue.has(hash)) {
      var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _request = _step.value;

          _request.cancel();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }

    return false;
  };
  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */


  var handleHashChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(override) {
      var hash, queueId, request, route, result, store;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hash = cleanHash(override || getHash());
              queueId = decodeURIComponent(hash);
              request = navigateQueue.get(queueId); // handle hash updated manually

              if (!request && !navigateQueue.size) {
                request = queue(hash);
              }

              route = getRouteByHash(hash);

              if (route) {
                _context.next = 8;
                break;
              }

              if (routeExists('*')) {
                navigate('*', {
                  failedHash: hash
                });
              } else {
                console.error("Unable to navigate to: ".concat(hash));
              }

              return _context.abrupt("return");

            case 8:
              // update current processed request
              request.hash = hash;
              request.route = route;
              _context.next = 12;
              return beforeEachRoute(getActiveHash(), request);

            case 12:
              result = _context.sent;

              if (!route.beforeNavigate) {
                _context.next = 17;
                break;
              }

              _context.next = 16;
              return route.beforeNavigate(getActiveHash(), request);

            case 16:
              result = _context.sent;

            case 17:
              if (!isBoolean(result)) {
                _context.next = 22;
                break;
              }

              if (!result) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return", resolveHashChange(request));

            case 20:
              _context.next = 25;
              break;

            case 22:
              // if navigation guard didn't return true
              // we cancel the current request
              request.cancel();
              navigateQueue.delete(queueId);

              if (isString(result)) {
                navigate(result);
              } else if (isObject(result)) {
                store = true;

                if (isBoolean(result.store)) {
                  store = result.store;
                }

                navigate(result.path, result.params, store);
              }

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleHashChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */


  var resolveHashChange = function resolveHashChange(request) {
    var hash = request.hash;
    var route = request.route;
    var queueId = decodeURIComponent(hash); // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself

    setLastHash(hash);

    if (route.path) {
      var component = getComponent(route.path); // if a hook is provided for the current route

      if (isFunction(route.hook)) {
        var urlParams = getValuesFromHash(hash, route.path);
        var params = {};

        var _iterator2 = _createForOfIteratorHelper(urlParams.keys()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;
            params[key] = urlParams.get(key);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        route.hook(app, _objectSpread2({}, params));
      } // if there is a component attached to the route


      if (component) {
        // force page to root state to prevent shared state issues
        var activePage = getActivePage();

        if (activePage) {
          var keepAlive = keepActivePageAlive(getActiveRoute(), request);

          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }

        if (isPage(component)) {
          load(request).then(function () {
            app._refocus();

            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(function (contents) {
            return contents.default;
          }).then(function (module) {
            storeComponent(route.path, module);
            return load(request);
          }).then(function () {
            app._refocus();

            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };
  /**
   * Directional step in history
   * @param direction
   */


  var step = function step() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!level || isNaN(level)) {
      return false;
    }

    var history = getHistory(); // for now we only support negative numbers

    level = Math.abs(level); // we can't step back past the amount
    // of history entries

    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }

      return false;
    } else if (history.length) {
      var _navigate;

      // for now we only support history back
      var route = history.splice(history.length - level, level)[0]; // store changed history

      setHistory(history);
      return navigate(route.hash, (_navigate = {}, _defineProperty(_navigate, symbols.backtrack, true), _defineProperty(_navigate, symbols.historyState, route.state), _navigate), false);
    } else if (routerConfig$1.get('backtrack')) {
      var hashLastPart = /(\/:?[\w%\s-]+)$/;
      var hash = stripRegex(getHash());
      var floor = getFloor(hash); // test if we got deep-linked

      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, ''); // if we have a configured route
          // we navigate to it

          if (getRouteByHash(hash)) {
            return navigate(hash, _defineProperty({}, symbols.backtrack, true), false);
          }
        }
      }
    }

    return false;
  };
  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */

  var resume = function resume() {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(function (res) {
        resumeHash = '';

        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };
  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */


  var isNavigating = function isNavigating() {
    if (navigateQueue.size) {
      var isProcessing = false;

      var _iterator3 = _createForOfIteratorHelper(navigateQueue.values()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var request = _step3.value;

          if (!request.isCancelled) {
            isProcessing = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return isProcessing;
    }

    return false;
  };

  var getResumeHash = function getResumeHash() {
    return resumeHash;
  };
  /**
   * By default we return the location hash
   * @returns {string}
   */

  var getHash = function getHash() {
    return document.location.hash;
  };
  /**
   * Update location hash
   * @param url
   */


  var setHash = function setHash(url) {
    document.location.hash = url;
  };
  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */


  var initRouter = function initRouter(config) {
    if (config.getHash) {
      getHash = config.getHash;
    }

    if (config.setHash) {
      setHash = config.setHash;
    }
  };
  /**
   * On hash change we start processing
   */

  var registerListener = function registerListener() {
    Registry.addEventListener(window, 'hashchange', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!mustUpdateLocationHash()) {
                _context2.next = 9;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return handleHashChange();

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6]]);
    })));
  }; // export API


  var Router = {
    startRouter: startRouter,
    navigate: navigate,
    resume: resume,
    step: step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage: function getActivePage$1() {
      // warning
      return getActivePage();
    },
    getActiveRoute: getActiveRoute,
    getActiveHash: getActiveHash,
    focusWidget: focusWidget,
    getActiveWidget: getActiveWidget,
    restoreFocus: restoreFocus,
    isNavigating: isNavigating,
    getHistory: getHistory,
    setHistory: setHistory,
    getHistoryState: getHistoryState,
    replaceHistoryState: replaceHistoryState,
    getQueryStringParams: getQueryStringParams,
    symbols: symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,

    /**
     * Deprecated api methods
     */
    setupRoutes: function setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on: function on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before: function before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after: function after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  var channels = function channels() {
    return Settings.get('platform', 'tv', defaultChannels);
  };
  var randomChannel = function randomChannel() {
    return channels()[~~(channels.length * Math.random())];
  };

  var currentChannel;
  var callbacks = {};

  var emit = function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callbacks[event] && callbacks[event].forEach(function (cb) {
      cb.apply(null, args);
    });
  }; // local mock methods


  var methods = {
    getChannel: function getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        if (currentChannel) {
          var channel = _objectSpread2({}, currentChannel);

          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram: function getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise(function (resolve, reject) {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel: function setChannel(number) {
      return new Promise(function (resolve, reject) {
        if (number) {
          var newChannel = channels().find(function (c) {
            return c.number === number;
          });

          if (newChannel) {
            currentChannel = newChannel;

            var channel = _objectSpread2({}, currentChannel);

            delete channel.program;
            emit('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  var initTV = function initTV(config) {
    methods = {};

    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }

    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }

    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }

    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit);
    }
  }; // public API

  var initPurchase = function initPurchase(config) {
    if (config.billingUrl) ;
  };

  var PinInput = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(PinInput, _Lightning$Component);

    var _super = _createSuper(PinInput);

    function PinInput() {
      _classCallCheck(this, PinInput);

      return _super.apply(this, arguments);
    }

    _createClass(PinInput, [{
      key: "index",
      set: function set(v) {
        this.x = v * (120 + 24);
      }
    }, {
      key: "nr",
      set: function set(v) {
        var _this = this;

        this._timeout && clearTimeout(this._timeout);

        if (v) {
          this.setSmooth('alpha', 1);
        } else {
          this.setSmooth('alpha', 0.5);
        }

        this.tag('Nr').patch({
          text: {
            text: v && v.toString() || '',
            fontSize: v === '*' ? 120 : 80
          }
        });

        if (v && v !== '*') {
          this._timeout = setTimeout(function () {
            _this._timeout = null;
            _this.nr = '*';
          }, 750);
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 120,
          h: 150,
          rect: true,
          color: 0xff949393,
          alpha: 0.5,
          shader: {
            type: Lightning.shaders.RoundedRectangle,
            radius: 10
          },
          Nr: {
            w: function w(_w) {
              return _w;
            },
            y: 24,
            text: {
              text: '',
              textColor: 0xff333333,
              fontSize: 80,
              textAlign: 'center',
              verticalAlign: 'middle'
            }
          }
        };
      }
    }]);

    return PinInput;
  }(Lightning.Component);

  var PinDialog = /*#__PURE__*/function (_Lightning$Component2) {
    _inherits(PinDialog, _Lightning$Component2);

    var _super2 = _createSuper(PinDialog);

    function PinDialog() {
      _classCallCheck(this, PinDialog);

      return _super2.apply(this, arguments);
    }

    _createClass(PinDialog, [{
      key: "_init",
      value: function _init() {
        var children = [];

        for (var i = 0; i < 4; i++) {
          children.push({
            type: PinInput,
            index: i
          });
        }

        this.tag('Code').children = children;
      }
    }, {
      key: "pin",
      get: function get() {
        if (!this._pin) this._pin = '';
        return this._pin;
      },
      set: function set(v) {
        if (v.length <= 4) {
          var maskedPin = new Array(Math.max(v.length - 1, 0)).fill('*', 0, v.length - 1);
          v.length && maskedPin.push(v.length > this._pin.length ? v.slice(-1) : '*');

          for (var i = 0; i < 4; i++) {
            this.tag('Code').children[i].nr = maskedPin[i] || '';
          }

          this._pin = v;
        }
      }
    }, {
      key: "msg",
      get: function get() {
        if (!this._msg) this._msg = '';
        return this._msg;
      },
      set: function set(v) {
        var _this2 = this;

        this._timeout && clearTimeout(this._timeout);
        this._msg = v;

        if (this._msg) {
          this.tag('Msg').text = this._msg;
          this.tag('Info').setSmooth('alpha', 0.5);
          this.tag('Code').setSmooth('alpha', 0.5);
        } else {
          this.tag('Msg').text = '';
          this.tag('Info').setSmooth('alpha', 1);
          this.tag('Code').setSmooth('alpha', 1);
        }

        this._timeout = setTimeout(function () {
          _this2.msg = '';
        }, 2000);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.setSmooth('alpha', 1);
      }
    }, {
      key: "_handleKey",
      value: function _handleKey(event) {
        if (this.msg) {
          this.msg = false;
        } else {
          var val = parseInt(event.key);

          if (val > -1) {
            this.pin += val;
          }
        }
      }
    }, {
      key: "_handleBack",
      value: function _handleBack() {
        if (this.msg) {
          this.msg = false;
        } else {
          if (this.pin.length) {
            this.pin = this.pin.slice(0, this.pin.length - 1);
          } else {
            Pin.hide();
            this.resolve(false);
          }
        }
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this3 = this;

        if (this.msg) {
          this.msg = false;
        } else {
          Pin.submit(this.pin).then(function (val) {
            _this3.msg = 'Unlocking ...';
            setTimeout(function () {
              Pin.hide();
            }, 1000);

            _this3.resolve(val);
          }).catch(function (e) {
            _this3.msg = e;

            _this3.reject(e);
          });
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          zIndex: 1,
          w: function w(_w2) {
            return _w2;
          },
          h: function h(_h) {
            return _h;
          },
          rect: true,
          color: 0xdd000000,
          alpha: 0.000001,
          Dialog: {
            w: 648,
            h: 320,
            y: function y(h) {
              return (h - 320) / 2;
            },
            x: function x(w) {
              return (w - 648) / 2;
            },
            rect: true,
            color: 0xdd333333,
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              radius: 10
            },
            Info: {
              y: 24,
              x: 48,
              text: {
                text: 'Please enter your PIN',
                fontSize: 32
              }
            },
            Msg: {
              y: 260,
              x: 48,
              text: {
                text: '',
                fontSize: 28,
                textColor: 0xffffffff
              }
            },
            Code: {
              x: 48,
              y: 96
            }
          }
        };
      }
    }]);

    return PinDialog;
  }(Lightning.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */

  var unlocked = false;
  var contextItems = ['purchase', 'parental'];

  var _submit = function submit(pin, context) {
    return new Promise(function (resolve, reject) {
      if (pin.toString() === Settings.get('platform', 'pin', '0000').toString()) {
        unlocked = true;
        resolve(unlocked);
      } else {
        reject('Incorrect pin');
      }
    });
  };

  var check = function check(context) {
    return new Promise(function (resolve) {
      resolve(unlocked);
    });
  };

  var initPin = function initPin(config) {
    if (config.submit && typeof config.submit === 'function') {
      _submit = config.submit;
    }

    if (config.check && typeof config.check === 'function') {
      check = config.check;
    }
  };
  var pinDialog = null;

  var contextCheck = function contextCheck(context) {
    if (context === undefined) {
      Log.info('Please provide context explicitly');
      return contextItems[0];
    } else if (!contextItems.includes(context)) {
      Log.warn('Incorrect context provided');
      return false;
    }

    return context;
  }; // Public API


  var Pin = {
    show: function show() {
      return new Promise(function (resolve, reject) {
        pinDialog = ApplicationInstance.stage.c({
          ref: 'PinDialog',
          type: PinDialog,
          resolve: resolve,
          reject: reject
        });
        ApplicationInstance.childList.a(pinDialog);
        ApplicationInstance.focus = pinDialog;
      });
    },
    hide: function hide() {
      ApplicationInstance.focus = null;
      ApplicationInstance.children = ApplicationInstance.children.map(function (child) {
        return child !== pinDialog && child;
      });
      pinDialog = null;
    },
    submit: function submit(pin, context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            _submit(pin, context).then(resolve).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    unlocked: function unlocked(context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            check(context).then(resolve).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    locked: function locked(context) {
      return new Promise(function (resolve, reject) {
        try {
          context = contextCheck(context);

          if (context) {
            check(context).then(function (unlocked) {
              return resolve(!!!unlocked);
            }).catch(reject);
          } else {
            reject('Incorrect Context provided');
          }
        } catch (e) {
          reject(e);
        }
      });
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var ApplicationInstance;
  var Launch = (function (App, appSettings, platformSettings, appData) {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage(); // Initialize plugins

    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }

    var app = Application(App, appData, platformSettings);
    ApplicationInstance = new app(appSettings);
    return ApplicationInstance;
  });

  var VideoTexture = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VideoTexture, _Lightning$Component);

    var _super = _createSuper(VideoTexture);

    function VideoTexture() {
      _classCallCheck(this, VideoTexture);

      return _super.apply(this, arguments);
    }

    _createClass(VideoTexture, [{
      key: "videoEl",
      get: function get() {
        return this._videoEl;
      },
      set: function set(v) {
        this._videoEl = v;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoView.texture;
      }
    }, {
      key: "isVisible",
      get: function get() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._createVideoTexture();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        var stage = this.stage;
        this._lastTime = 0;

        if (!this._updateVideoTexture) {
          this._updateVideoTexture = function () {
            if (_this.videoTexture.options.source && _this.videoEl.videoWidth && _this.active) {
              var gl = stage.gl;
              var currentTime = new Date().getTime();

              var getVideoPlaybackQuality = _this.videoEl.getVideoPlaybackQuality(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'


              var frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : _this.videoEl.webkitDecodedFrameCount;
              var mustUpdate = frameCount ? _this._lastFrame !== frameCount : _this._lastTime < currentTime - 30;

              if (mustUpdate) {
                _this._lastTime = currentTime;
                _this._lastFrame = frameCount;

                try {
                  gl.bindTexture(gl.TEXTURE_2D, _this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this.videoEl);
                  _this._lastFrame = _this.videoEl.webkitDecodedFrameCount;
                  _this.videoView.visible = true;
                  _this.videoTexture.options.w = _this.videoEl.width;
                  _this.videoTexture.options.h = _this.videoEl.height;
                  var expectedAspectRatio = _this.videoView.w / _this.videoView.h;
                  var realAspectRatio = _this.videoEl.width / _this.videoEl.height;

                  if (expectedAspectRatio > realAspectRatio) {
                    _this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    _this.videoView.scaleY = 1;
                  } else {
                    _this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    _this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);

                  _this.stop();
                }

                _this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }

        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;

        if (this.videoTexture.options.source) {
          var gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }, {
      key: "position",
      value: function position(top, left) {
        this.videoView.patch({
          smooth: {
            x: left,
            y: top
          }
        });
      }
    }, {
      key: "size",
      value: function size(width, height) {
        this.videoView.patch({
          smooth: {
            w: width,
            h: height
          }
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.videoView.setSmooth('alpha', 1);
      }
    }, {
      key: "hide",
      value: function hide() {
        this.videoView.setSmooth('alpha', 0);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
    }]);

    return VideoTexture;
  }(Lightning.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var mediaUrl = function mediaUrl(url) {
    return url;
  };
  var videoEl;
  var videoTexture;
  var metrics;

  var _consumer;

  var precision = 1;
  var textureMode = false;
  var initVideoPlayer = function initVideoPlayer(config) {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  }; // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close

  var eventHandlers = {};
  var state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,

    get playingAds() {
      return this._playingAds;
    },

    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },

    skipTime: false,
    playAfterSeek: null
  };
  var hooks = {
    play: function play() {
      state$1.playing = true;
    },
    pause: function pause() {
      state$1.playing = false;
    },
    seeked: function seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort: function abort() {
      deregisterEventListeners();
    }
  };

  var withPrecision = function withPrecision(val) {
    return Math.round(precision * val) + 'px';
  };

  var fireOnConsumer$1 = function fireOnConsumer(event, args) {
    if (_consumer) {
      _consumer.fire('$videoPlayer' + event, args, videoEl.currentTime);

      _consumer.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };

  var fireHook = function fireHook(event, args) {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };

  var customLoader = null;
  var customUnloader = null;

  var loader = function loader(url, videoEl, config) {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(function (resolve) {
      url = mediaUrl(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };

  var unloader = function unloader(videoEl) {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(function (resolve) {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };

  var setupVideoTag = function setupVideoTag() {
    var videoEls = document.getElementsByTagName('video');

    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      var _videoEl = document.createElement('video');

      _videoEl.setAttribute('id', 'video-player');

      _videoEl.setAttribute('width', withPrecision(1920));

      _videoEl.setAttribute('height', withPrecision(1080));

      _videoEl.style.position = 'absolute';
      _videoEl.style.zIndex = '1';
      _videoEl.style.display = 'none';
      _videoEl.style.visibility = 'hidden';
      _videoEl.style.top = withPrecision(0);
      _videoEl.style.left = withPrecision(0);
      _videoEl.style.width = withPrecision(1920);
      _videoEl.style.height = withPrecision(1080);
      document.body.appendChild(_videoEl);
      return _videoEl;
    }
  };
  var setUpVideoTexture = function setUpVideoTexture() {
    if (!ApplicationInstance.tag('VideoTexture')) {
      var el = ApplicationInstance.stage.c({
        type: VideoTexture,
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl: videoEl
      });
      ApplicationInstance.childList.addAt(el, 0);
    }

    return ApplicationInstance.tag('VideoTexture');
  };

  var registerEventListeners = function registerEventListeners() {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(function (event) {
      var handler = function handler(e) {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        } // fire an internal hook


        fireHook(event, {
          videoElement: videoEl,
          event: e
        }); // fire the event (with human friendly event name) to the consumer of the VideoPlayer

        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };

      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };

  var deregisterEventListeners = function deregisterEventListeners() {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(function (event) {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };

  var videoPlayerPlugin = {
    consumer: function consumer(component) {
      _consumer = component;
    },
    loader: function loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader: function unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position: function position() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);

      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size: function size() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);

      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area: function area() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open: function open(url) {
      var _this = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();

      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        var adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };

        if (config.videoId) {
          adConfig.caid = config.videoId;
        }

        Ads.get(adConfig, _consumer).then(function (ads) {
          state$1.playingAds = true;
          ads.prerolls().then(function () {
            state$1.playingAds = false;
            loader(url, videoEl, config).then(function () {
              registerEventListeners();

              _this.show();

              _this.play();
            }).catch(function (e) {
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload: function reload() {
      if (!this.canInteract) return;
      var url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close: function close() {
      var _this2 = this;

      Ads.cancel();

      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads.stop(); // call self in next tick

        setTimeout(function () {
          _this2.close();
        });
      }

      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear: function clear() {
      if (!this.canInteract) return; // pause the video first to disable sound

      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(function () {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play: function play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(function (e) {
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause: function pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause: function playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute: function mute() {
      var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop: function loop() {
      var looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek: function seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return; // define whether should continue to play after seek is complete (in seeked hook)

      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      } // pause before actually seeking


      this.pause(); // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)

      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip: function skip(seconds) {
      var _this3 = this;

      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(function () {
        _this3.seek(state$1.skipTime);

        state$1.skipTime = false;
      }, 300);
    },
    show: function show() {
      if (!this.canInteract) return;

      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide: function hide() {
      if (!this.canInteract) return;

      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds: function enableAds() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },

    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },

    get currentTime() {
      return videoEl && videoEl.currentTime;
    },

    get muted() {
      return videoEl && videoEl.muted;
    },

    get looped() {
      return videoEl && videoEl.loop;
    },

    get src() {
      return videoEl && videoEl.getAttribute('src');
    },

    get playing() {
      return state$1.playing;
    },

    get playingAds() {
      return state$1.playingAds;
    },

    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },

    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },

    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },

    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },

    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },

    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },

    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },

    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },

    get adsEnabled() {
      return state$1.adsEnabled;
    },

    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },

    get _consumer() {
      return _consumer;
    }

  };
  var VideoPlayer = autoSetupMixin(videoPlayerPlugin, function () {
    precision = ApplicationInstance && ApplicationInstance.stage && ApplicationInstance.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);

    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var consumer;

  var getAds = function getAds() {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };

  var initAds = function initAds(config) {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  var state = {
    active: false
  };

  var playSlot = function playSlot() {
    var slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce(function (promise, ad) {
      return promise.then(function () {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };

  var playAd = function playAd(ad) {
    return new Promise(function (resolve) {
      if (state.active === false) {
        Log.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      } // is it safe to rely on videoplayer plugin already created the video tag?


      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl(ad.url);
      videoEl.load();
      var timeEvents = null;
      var timeout;

      var cleanup = function cleanup() {
        // remove all listeners
        Object.keys(handlers).forEach(function (handler) {
          return videoEl.removeEventListener(handler, handlers[handler]);
        });
        resolve();
      };

      var handlers = {
        play: function play() {
          Log.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended: function ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate: function timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log.info('Ad', 'Calculated quartiles times', {
              timeEvents: timeEvents
            });
          }

          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }

          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }

          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled: function stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(function () {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay: function canplay() {
          timeout && clearTimeout(timeout);
        },
        error: function error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort: function abort() {
          cleanup();
        } // todo: pause, resume, mute, unmute beacons

      }; // add all listeners

      Object.keys(handlers).forEach(function (handler) {
        return videoEl.addEventListener(handler, handlers[handler]);
      });
      videoEl.play();
    });
  };

  var sendBeacon = function sendBeacon(callbacks, event) {
    if (callbacks && callbacks[event]) {
      Log.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce(function (promise, url) {
        return promise.then(function () {
          return fetch(url) // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
          // note: for fetch failed http responses don't throw an Error :)
          .then(function (response) {
            if (response.status === 200) {
              fireOnConsumer('Beacon' + event + 'Sent');
            } else {
              fireOnConsumer('Beacon' + event + 'Failed' + response.status);
            }

            Promise.resolve(null);
          }).catch(function () {
            Promise.resolve(null);
          });
        });
      }, Promise.resolve(null));
    } else {
      Log.info('Ad', 'No callback found for ' + event);
    }
  };

  var fireOnConsumer = function fireOnConsumer(event, args) {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };

  var Ads = {
    get: function get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls: function prerolls() {
            return Promise.resolve();
          }
        });
      }

      consumer = videoPlayerConsumer;
      return new Promise(function (resolve) {
        Log.info('Ad', 'Starting session');
        getAds(config).then(function (ads) {
          Log.info('Ad', 'API result', ads);
          resolve({
            prerolls: function prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(function () {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }

              return Promise.resolve();
            },
            midrolls: function midrolls() {
              return Promise.resolve();
            },
            postrolls: function postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel: function cancel() {
      Log.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop: function stop() {
      Log.info('Ad', 'Stop Ad');
      state.active = false; // fixme: duplication

      var videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var ScaledImageTexture = /*#__PURE__*/function (_Lightning$textures$I) {
    _inherits(ScaledImageTexture, _Lightning$textures$I);

    var _super = _createSuper(ScaledImageTexture);

    function ScaledImageTexture(stage) {
      var _this;

      _classCallCheck(this, ScaledImageTexture);

      _this = _super.call(this, stage);
      _this._scalingOptions = undefined;
      return _this;
    }

    _createClass(ScaledImageTexture, [{
      key: "options",
      set: function set(options) {
        this.resizeMode = this._scalingOptions = options;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var obj = _get(_getPrototypeOf(ScaledImageTexture.prototype), "getNonDefaults", this).call(this);

        if (this._src) {
          obj.src = this._src;
        }

        return obj;
      }
    }]);

    return ScaledImageTexture;
  }(Lightning.textures.ImageTexture);

  var Img = (function (imageUrl, options) {
    var imageServerUrl = Settings.get('platform', 'imageServerUrl'); // make and return ScaledImageTexture

    var make = function make(options) {
      // local asset, wrap it in Utils.asset()
      if (!/^(?:https?:)?\/\//i.test(imageUrl)) {
        imageUrl = Utils.asset(imageUrl);
      } // only pass to image server if imageServerUrl is configured
      // and if the asset isn't local to the app (i.e. has same origin)


      if (imageServerUrl && imageUrl.indexOf(window.location.origin) === -1) {
        imageUrl = Utils.ensureUrlWithProtocol(imageServerUrl + '?' + Utils.makeQueryString(imageUrl, options));
      } else {
        // Lightning will handle the resizing and has only 2 flavours (cover and contain)
        if (options.type === 'crop') options.type = 'cover';else options.type = 'contain';
      }

      return {
        type: ScaledImageTexture,
        src: imageUrl,
        options: options
      };
    }; // merge options with default


    var setOptions = function setOptions(options) {
      options = _objectSpread2(_objectSpread2({}, {
        type: 'contain',
        w: 0,
        h: 0
      }), options);
      var imageQuality = Math.max(0.1, Math.min(1, (parseFloat(Settings.get('platform', 'image.quality')) || 100) / 100));
      options.w = options.w * imageQuality;
      options.h = options.h * imageQuality;
      return options;
    }; // if options are passed, return scaled image right away


    if (options) {
      return make(setOptions(options));
    } // otherwise return 'chained' functions


    return {
      // official api
      exact: function exact(w, h) {
        return make(setOptions({
          type: 'exact',
          w: w,
          h: h
        }));
      },
      landscape: function landscape(w) {
        return make(setOptions({
          type: 'landscape',
          w: w
        }));
      },
      portrait: function portrait(h) {
        return make(setOptions({
          type: 'portrait',
          h: h
        }));
      },
      cover: function cover(w, h) {
        return make(setOptions({
          type: 'cover',
          w: w,
          h: h
        }));
      },
      contain: function contain(w, h) {
        return make(setOptions({
          type: 'contain',
          w: w,
          h: h
        }));
      },
      original: function original() {
        return make(setOptions({
          type: 'contain'
        }));
      } // todo: add positioning - i.e. top, bottom, center, left etc.

    };
  });

  var transition = function transition(target, value) {
    var resetDur = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

    if (target.isRunning() && value === target.targetValue) {
      return;
    }

    if (target.isRunning()) {
      target.reset(value, resetDur);
    } else {
      target.start(value);
    }
  };
  var animation = function animation(_animation, target, scope, settings) {
    if (_animation) {
      _animation.pause();
    }

    _animation = scope.tag(target).animation(settings);

    _animation.start();

    return _animation;
  };
  var extractCommonColor = function extractCommonColor(texture, gl) {
    var fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    var tmp = new Uint8Array(4);
    var colors = [];
    var offset = Math.floor(texture.w / 6);
    var step = offset;

    for (var i = offset, n = texture.w - offset; i < n; i += step) {
      for (var j = offset, o = texture.h - offset; j < o; j += step) {
        gl.readPixels(j, i, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, tmp);
        colors.push(Lightning.StageUtils.getArgbNumber(tmp));
      }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteFramebuffer(fb); // const filtered = colors.filter(color => {
    //     const hsv = rgbToHsv(Lightning.StageUtils.getRgbComponentsNormalized(color));
    //     return hsv.s > 50 && hsv.v > 50;
    // });

    var filtered = colors.filter(function (color) {
      return color > 4283190348;
    });
    var availableColors = filtered.length ? filtered : colors;
    var color;

    if (!filtered.length) {
      color = colors.sort(function (a, b) {
        return a > b ? 1 : -1;
      }).pop();
    } else {
      color = availableColors.sort(function (a, b) {
        return availableColors.filter(function (v) {
          return v === a;
        }).length - availableColors.filter(function (v) {
          return v === b;
        }).length;
      }).pop();
    }

    return color;
  };

  var SwirlShader = /*#__PURE__*/function (_Lightning$shaders$We) {
    _inherits(SwirlShader, _Lightning$shaders$We);

    var _super = _createSuper(SwirlShader);

    function SwirlShader(ctx) {
      var _this;

      _classCallCheck(this, SwirlShader);

      _this = _super.call(this, ctx);
      _this._blur = 1;
      _this._pull = 0;
      return _this;
    }

    _createClass(SwirlShader, [{
      key: "pull",
      get: function get() {
        return this._pull;
      },
      set: function set(v) {
        this._pull = v;
        this.redraw();
      }
    }, {
      key: "blur",
      get: function get() {
        return this._blur;
      },
      set: function set(v) {
        this._blur = v;
        this.redraw();
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(operation) {
        _get(_getPrototypeOf(SwirlShader.prototype), "setupUniforms", this).call(this, operation); // We substract half a pixel to get a better cutoff effect.


        if (!this._start) {
          this._start = Date.now();
        }

        var time = 0.0005 * (Date.now() - this._start) % 16.0;

        this._setUniform("t", time, this.gl.uniform1f);

        this._setUniform("pull", this._pull, this.gl.uniform1f);

        this._setUniform("blur", this._blur, this.gl.uniform1f);

        var period = time / 4 % 2.0 * Math.PI;

        this._setUniform("period", period, this.gl.uniform1f); // Force redraw to keep painting while visible.


        this.redraw();
      }
    }]);

    return SwirlShader;
  }(Lightning.shaders.WebGLDefaultShader);
  SwirlShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform float t;\n    uniform float pull;\n    uniform float blur;\n    uniform float period;\n    void main(void){\n        float x = vTextureCoord.x - 0.5;\n        \n        float g = sin(sin(0.7854*t)*(4.0*x)+0.3927*t)+sin(sin(0.3927*t)*(2.0*x)+0.3927*t);\n        g -= pull * cos(6.0 * x) * 1.5; \n        g = 0.1 * g - (vTextureCoord.y - 0.5);\n        \n        float bl = 40.0 - 20.0 * abs(sin(period + x * 3.0));\n        g = g * bl * blur;\n        \n        float ga = max(0.0, g);\n        float deltaSquared = ga * ga;\n        \n        float value = 1.0 / (deltaSquared + 1.0);\n                \n        vec4 color = texture2D(uSampler, vTextureCoord) * vColor * value;\n        \n        // if (g < 0.0) {\n        //      color = color * max(0.0, (1.0 + 0.05 * g));\n        // }\n        \n        gl_FragColor = color;\n    }\n";

  var AmbientBackground = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(AmbientBackground, _Lightning$Component);

    var _super = _createSuper(AmbientBackground);

    function AmbientBackground() {
      _classCallCheck(this, AmbientBackground);

      return _super.apply(this, arguments);
    }

    _createClass(AmbientBackground, [{
      key: "_changeColor",
      value: function _changeColor(argb) {
        var prevColor = this._targetColor || Colors('background').get();
        var color = this._targetColor = argb || Colors('background').get();
        this._colorAnimation = animation(this._colorAnimation, 'Swirl', this, {
          duration: 1,
          actions: [{
            p: 'colorTop',
            v: {
              0: Colors(prevColor).darker(0.2),
              1: Colors(color).darker(0.2)
            }
          }, {
            p: 'colorBottom',
            v: {
              0: prevColor,
              1: color
            }
          }]
        });
      }
    }, {
      key: "update",
      value: function update(argb) {
        this._changeColor(argb);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 1920,
          h: 1080,
          rect: true,
          color: Colors('background').get(),
          Swirl: {
            w: 1920,
            h: 1080,
            src: Utils.asset('images/swirlBackground.jpg'),
            shader: {
              type: SwirlShader,
              blur: 0.008,
              pull: 8
            }
          }
        };
      }
    }]);

    return AmbientBackground;
  }(Lightning.Component);

  var Button = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Button, _Lightning$Component);

    var _super = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super.apply(this, arguments);
    }

    _createClass(Button, [{
      key: "icon",
      get: function get() {
        return this._icon;
      },
      set: function set(src) {
        this._icon = src;
        this.tag('Content').src = Utils.asset(src);
      }
    }, {
      key: "content",
      get: function get() {
        return this.tag('Content');
      },
      set: function set(obj) {
        this.tag('Content').patch(obj);
      }
    }, {
      key: "text",
      get: function get() {
        return this.tag('Text');
      },
      set: function set(text) {
        console.log({
          text: text
        }); // TODO: Show text

        this.tag('Text').patch({
          text: text
        });
      }
    }, {
      key: "_init",
      value: function _init() {
        var whiteAlpha = Colors('white').alpha(0.5).get();
        this._focusAnimation = this.animation({
          duration: 0.2,
          actions: [{
            t: 'Background',
            p: 'shader.fillColor',
            v: {
              0: 0x00ffffff,
              1: 0xffffffff
            }
          }, {
            t: 'Background',
            p: 'colorTop',
            v: {
              0: whiteAlpha,
              1: Colors('focus').get()
            }
          }, {
            t: 'Background',
            p: 'colorBottom',
            v: {
              0: whiteAlpha,
              1: Colors('focus2').get()
            }
          }]
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._focusAnimation.start();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focusAnimation.stop();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            rect: true,
            color: Colors('white').alpha(0.5).get(),
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              stroke: 7,
              strokeColor: 0xffffffff,
              fillColor: 0x00ffffff,
              radius: 22,
              blend: 1
            }
          },
          Content: {
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            color: Colors('white').get(),
            y: function y(h) {
              return h / 2;
            }
          },
          Text: {
            w: 50,
            text: {
              fontFace: 'Bold',
              wrap: true,
              fontSize: 24,
              lineHeight: 30
            }
          }
        };
      }
    }]);

    return Button;
  }(Lightning.Component);

  var _templateObject;

  var _baseUrl = 'http://192.168.1.172:4000'; //'https://api.themoviedb.org/3/';

  var _headers = {
    'Content-Type': 'application/json'
  };
  var _tmdbBaseUrl = 'https://api.themoviedb.org/3';
  var _params = {
    'api_key': '66683917a94e703e14ca150023f4ea7c'
  };

  var _executeRequest = function _executeRequest(config) {
    var retryCounter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var url = config.url,
        target = config.target,
        body = config.body,
        _config$headers = config.headers,
        headers = _config$headers === void 0 ? {} : _config$headers,
        _config$exceptions = config.exceptions,
        exceptions = _config$exceptions === void 0 ? {} : _config$exceptions,
        method = config.method,
        timeout = config.timeout;
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.timeout = timeout || 10000;

      for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.onload = function () {
        if (xhr.status !== 200 && exceptions[xhr.status]) {
          resolve(xhr);
        } else if (xhr.status !== 200) {
          reject(target);
        } else {
          resolve(JSON.parse(xhr.response));
        }
      };

      xhr.onerror = function () {
        if (xhr.status !== 200 && exceptions[xhr.status]) {
          resolve(xhr);
        } else {
          reject(target);
        }
      };

      xhr.ontimeout = function () {
        if (retryCounter === 3) {
          reject(target);
        } else {
          retryCounter++;
          resolve(_executeRequest(config, retryCounter));
        }
      };

      xhr.send(body);
    });
  };

  var _request = function _request(_ref) {
    var url = _ref.url,
        target = _ref.target,
        _ref$params = _ref.params,
        params = _ref$params === void 0 ? {} : _ref$params,
        _ref$body = _ref.body,
        body = _ref$body === void 0 ? {} : _ref$body,
        _ref$headers = _ref.headers,
        headers = _ref$headers === void 0 ? {} : _ref$headers,
        _ref$exceptions = _ref.exceptions,
        exceptions = _ref$exceptions === void 0 ? {} : _ref$exceptions,
        method = _ref.method,
        timeout = _ref.timeout;
    headers = _objectSpread2(_objectSpread2({}, _headers), headers);
    params = _objectSpread2(_objectSpread2({}, _params), params);
    url = url || _baseUrl + target;

    if (method !== 'GET') {
      body = JSON.stringify(body);
    }

    if (method === 'GET' && params) {
      url += "?".concat(qsify(params));
    }

    return _executeRequest({
      url: url,
      target: target,
      body: body,
      headers: headers,
      exceptions: exceptions,
      method: method,
      timeout: timeout
    });
  };

  var qsify = function qsify(obj) {
    var ec = function ec(v) {
      return encodeURIComponent(v);
    };

    return Object.keys(obj).map(function (key) {
      return "".concat(ec(key), "=").concat(ec(obj[key]));
    }).join("&");
  }; //public functions


  var getRequest = function getRequest(obj) {
    return _request(_objectSpread2(_objectSpread2({}, obj), {}, {
      method: 'GET'
    }));
  };
  var postRequest = function postRequest(obj) {
    return _request(_objectSpread2(_objectSpread2({}, obj), {}, {
      method: 'POST'
    }));
  };

  var groupByGenre = function groupByGenre(list) {
    return list.reduce(function (acc, cur) {
      if (!acc[cur.genres[0]]) {
        acc[cur.genres[0]] = [];
      }

      acc[cur.genres[0]].push(cur);
      return acc;
    }, {});
  };

  var capitalize = function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  var _fetchPageData = function _fetchPageData(queryTemplate) {

    var _queryTemplate = _slicedToArray(queryTemplate, 1),
        query = _queryTemplate[0];

    return postRequest({
      url: "".concat(_baseUrl, "/graphql"),
      body: {
        query: query
      }
    }).then(function (_ref2) {
      var data = _ref2.data;
      var moviesList = data.moviesList;
      var groupedMovies = groupByGenre(moviesList);
      var movies = Object.keys(groupedMovies).map(function (key) {
        return {
          title: capitalize(key),
          media_type: 'movie',
          items: groupedMovies[key]
        };
      });
      return movies.sort(function (a, b) {
        return b.items.length - a.items.length;
      });
    });
  };

  var getSearchResults = function getSearchResults(query) {
    console.log(query.trim().toLowerCase());
    var gqlQuery = "\n        query {\n            moviesSearch(arguments: { keyword: \"".concat(query.trim().toLowerCase(), "\" }) {\n                id\n                title\n                description\n                genres\n                rating\n                year\n                images {\n                    bannerUrl\n                    posterUrl\n                    fanartUrl\n                }\n            }\n        }\n        ");
    return postRequest({
      url: "".concat(_baseUrl, "/graphql"),
      body: {
        query: gqlQuery
      }
    }).then(function (_ref3) {
      var data = _ref3.data;
      var results = data.moviesSearch;
      return results;
    });
  };
  var getHomePage = function getHomePage() {
    return _fetchPageData(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    query {\n        moviesList {\n            id\n            title\n            description\n            genres\n            rating\n            year\n            images {\n                bannerUrl\n                posterUrl\n                fanartUrl\n            }\n        }\n    }\n    "])));
  };
  var getBackdropUrl = function getBackdropUrl(imdbId) {
    return getRequest({
      url: "".concat(_tmdbBaseUrl, "/find/").concat(imdbId),
      params: _objectSpread2(_objectSpread2({}, _params), {}, {
        external_source: 'imdb_id'
      })
    }).then(function (_ref4) {
      var movie_results = _ref4.movie_results;

      var _movie_results = _slicedToArray(movie_results, 1),
          movie = _movie_results[0];

      return "https://image.tmdb.org/t/p/original".concat(movie.backdrop_path);
    });
  };
  var getDetailPage = function getDetailPage(mediaType, mediaId) {
    var query = "\n    query {\n        movieById(id: \"".concat(mediaId, "\") {\n            id\n            title\n            runtime\n            description\n            originalLanguage\n            genres\n            rating\n            year\n            images {\n                bannerUrl\n                posterUrl\n                fanartUrl\n            }\n            torrents {\n                quality\n            }\n        }\n    }\n    ");
    return postRequest({
      url: "".concat(_baseUrl, "/graphql"),
      body: {
        query: query
      }
    }).then(function (_ref5) {
      var data = _ref5.data;
      var movie = data.movieById;
      return _objectSpread2({
        media_type: mediaType
      }, movie);
    });
  };
  var getVideo = function getVideo(mediaType, mediaId) {
    var query = "\n    query {\n        getMovieFile(id: \"".concat(mediaId, "\") {\n            id\n            title\n            filePath\n        }\n    }\n    ");
    return postRequest({
      url: "".concat(_baseUrl, "/graphql"),
      body: {
        query: query
      }
    }).then(function (_ref6) {
      var data = _ref6.data;
      var video = data.getMovieFile;
      return {
        media_type: mediaType,
        videoUrl: video !== null && video !== void 0 && video.filePath ? "".concat(_baseUrl, "/files").concat(video.filePath) : null,
        title: video === null || video === void 0 ? void 0 : video.title,
        id: video === null || video === void 0 ? void 0 : video.id
      };
    });
  };
  var destroyMovieTorrent = function destroyMovieTorrent(movieId) {
    var query = "\n    query {\n        destroyMovieTorrent(id: \"".concat(movieId, "\", quality: FHD) {\n            isDestroyed\n        }\n    }\n    ");
    return postRequest({
      url: "".concat(_baseUrl, "/graphql"),
      body: {
        query: query
      }
    }).then(function (_ref7) {
      var data = _ref7.data;
      var isDestroyed = data.destroyMovieTorrent.isDestroyed;
      return {
        id: movieId,
        isDestroyed: isDestroyed
      };
    });
  };

  var Backdrop = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Backdrop, _Lightning$Component);

    var _super = _createSuper(Backdrop);

    function Backdrop() {
      _classCallCheck(this, Backdrop);

      return _super.apply(this, arguments);
    }

    _createClass(Backdrop, [{
      key: "_construct",
      value: function _construct() {
        this._targetSrc = null;
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        var backdrop = this.tag('Backdrop');
        this._transitionAlpha = backdrop.transition('alpha');
        this.tag('Backdrop').on('txLoaded', function (texture) {
          if (_this._backdrop.src === texture.src) {
            _this._backdropLoaded = true;

            _this._animateBackdrop();
          }
        });
        this.tag('ImgSource').on('txError', function (texture) {
          _this.fireAncestors('$updateAmbientBackground', {
            color: 0xff9300e0
          });
        });
        this.tag('ImgSource').on('txLoaded', function (texture) {
          if (_this._imgSource.src === texture.src) {
            _this._imgSrcLoaded = texture.source.nativeTexture;

            _this._animateBackdrop();
          }
        });

        this._transitionAlpha.on('finish', function () {
          if (backdrop.alpha === 0.001) {
            _this._loadSrc();
          }
        });

        this._baseColor = Colors('background').get();
      }
    }, {
      key: "_animateBackdrop",
      value: function _animateBackdrop() {
        if (!this._backdropLoaded || !this._imgSrcLoaded) {
          return;
        }

        if (this.stage.gl) {
          var color = this._extractedColor = extractCommonColor(this._imgSrcLoaded, this.stage.gl);
          this.fireAncestors('$updateAmbientBackground', {
            color: color
          });
        }

        this._backdropLoaded = false;
        this._imgSrcLoaded = false;
        transition(this._transitionAlpha, 1);
      }
    }, {
      key: "_loadSrc",
      value: function _loadSrc() {
        var _this2 = this;

        if (this._debounce) {
          clearTimeout(this._debounce);
        }

        this._debounce = setTimeout(function () {
          _this2._loadTextures(_this2._targetSrc);
        }, 50);
      }
    }, {
      key: "_loadTextures",
      value: function _loadTextures(src) {
        this._imgSource = Img(src).contain(300, 168);
        this._backdrop = Img(src).cover(1920, 740);
        this.tag('ImgSource').texture = this._imgSource;
        this.tag('Backdrop').texture = this._backdrop;
      }
    }, {
      key: "update",
      value: function () {
        var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(movieId) {
          var backdropUrl;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return getBackdropUrl(movieId);

                case 2:
                  backdropUrl = _context.sent;

                  if (!(backdropUrl === this._targetSrc)) {
                    _context.next = 6;
                    break;
                  }

                  this.fireAncestors('$updateAmbientBackground', {
                    color: this._extractedColor
                  });
                  return _context.abrupt("return");

                case 6:
                  this.setSmooth('alpha', !!(backdropUrl !== null));

                  if (this.tag('Backdrop').alpha === 0.001) {
                    this._loadTextures(backdropUrl);
                  } else {
                    transition(this._transitionAlpha, 0.001);
                  }

                  this._targetSrc = backdropUrl;

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function update(_x) {
          return _update.apply(this, arguments);
        }

        return update;
      }()
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 1920,
          h: 1080,
          ImgSource: {
            x: -299.5,
            w: 300,
            h: 168
          },
          Backdrop: {
            alpha: 0.001,
            w: function w(_w) {
              return _w;
            },
            h: 740,
            shader: {
              type: Lightning.shaders.FadeOut,
              fade: [0, 900, 900, 0]
            },
            transitions: {
              alpha: {
                duration: 1
              }
            }
          }
        };
      }
    }]);

    return Backdrop;
  }(Lightning.Component);

  var Item = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Item, _Lightning$Component);

    var _super = _createSuper(Item);

    function Item() {
      _classCallCheck(this, Item);

      return _super.apply(this, arguments);
    }

    _createClass(Item, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.patch({
          Poster: {
            texture: Img(this.item.poster).original()
          }
        });
      }
    }, {
      key: "_init",
      value: function _init() {
        var poster = this.tag('Poster');
        poster.on('txError', function () {
          poster.src = Utils.asset('images/missingImage.jpg');
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        var _this$item = this.item;
            _this$item.backdrop;
            var id = _this$item.id,
            title = _this$item.title,
            description = _this$item.description;
        this.fireAncestors('$updateBackdrop', {
          id: id
        });
        this.fireAncestors('$getDetailWidget').show({
          id: id,
          title: title,
          description: description
        });
        this.patch({
          Focus: {
            smooth: {
              alpha: 1
            }
          },
          Poster: {
            smooth: {
              y: -15
            }
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          Focus: {
            smooth: {
              alpha: 0
            }
          },
          Poster: {
            smooth: {
              y: 0
            }
          }
        });
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this$item2 = this.item,
            id = _this$item2.id,
            media_type = _this$item2.media_type;
        Router.navigate("detail/".concat(media_type, "/").concat(id), {
          keepAlive: true
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Focus: {
            alpha: 0,
            y: -36,
            x: -20,
            w: function w(_w) {
              return _w + 40;
            },
            h: function h(_h) {
              return _h + 40;
            },
            rect: true,
            colorBottom: Colors('focus').get(),
            colorTop: Colors('focus').get(),
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              stroke: 5,
              strokeColor: 0xffffffff,
              fillColor: 0xffffffff,
              radius: 22,
              blend: 0.25
            }
          },
          Poster: {
            w: function w(_w2) {
              return _w2;
            },
            h: function h(_h2) {
              return _h2;
            },
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              radius: 12
            }
          }
        };
      }
    }, {
      key: "width",
      get: function get() {
        return 185;
      }
    }, {
      key: "height",
      get: function get() {
        return 278;
      }
    }, {
      key: "marginRight",
      get: function get() {
        return 40;
      }
    }, {
      key: "marginBottom",
      get: function get() {
        return 40;
      }
    }]);

    return Item;
  }(Lightning.Component);

  /*#__PURE__*/(function (_Lightning$Component) {
    _inherits(ItemDescription, _Lightning$Component);

    var _super = _createSuper(ItemDescription);

    function ItemDescription() {
      _classCallCheck(this, ItemDescription);

      return _super.apply(this, arguments);
    }

    _createClass(ItemDescription, [{
      key: "item",
      set: function set(obj) {
        this._item = obj;

        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        if (!this.active || !this._item) {
          return;
        }

        var _this$_item = this._item,
            title = _this$_item.title,
            description = _this$_item.description;
        this.tag('Wrapper').patch({
          ItemTitle: {
            text: title
          },
          ItemDescription: {
            text: description
          }
        });

        this._fadeAnimation.start();
      }
    }, {
      key: "_init",
      value: function _init() {
        this._fadeAnimation = this.animation({
          delay: 0.2,
          duration: 0.3,
          actions: [{
            p: 'alpha',
            v: {
              0: 0.001,
              1: 1
            }
          }, {
            p: 'x',
            v: {
              0: 270,
              1: 230
            }
          }]
        });
      }
    }, {
      key: "_active",
      value: function _active() {
        this._update();
      }
    }, {
      key: "hide",
      value: function hide() {
        this._fadeAnimation.stopNow();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0.001,
          Wrapper: {
            flex: {
              direction: 'column'
            },
            ItemTitle: {
              w: 1260,
              text: {
                fontFace: 'Bold',
                wrap: true,
                fontSize: 74,
                lineHeight: 88
              }
            },
            ItemDescription: {
              w: 960,
              text: {
                fontFace: 'Regular',
                wrap: true,
                maxLines: 4,
                fontSize: 36,
                lineHeight: 44
              }
            }
          }
        };
      }
    }]);

    return ItemDescription;
  })(Lightning.Component);

  var Page = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Page, _Lightning$Component);

    var _super = _createSuper(Page);

    function Page() {
      _classCallCheck(this, Page);

      return _super.apply(this, arguments);
    }

    _createClass(Page, [{
      key: "pageTransition",
      value: function pageTransition(pageIn, pageOut) {
        return this._pageTransition(pageIn, pageOut);
      }
    }, {
      key: "_pageTransition",
      value: function _pageTransition(pageIn, pageOut) {
        pageOut.setSmooth('alpha', 0, {
          delay: 0.0,
          duration: 0.2
        });

        if (this.hideBackground) {
          this.fireAncestors('$hideBackground');
        } else {
          this.fireAncestors('$showBackground');
        }

        return new Promise(function (resolve) {
          pageIn.visible = true;
          pageIn.alpha = 0.001;
          pageIn.transition('alpha').on('finish', function () {
            if (pageIn.alpha === 1) {
              pageOut.visible = false;
              resolve(true);
            }
          });
          pageIn.setSmooth('alpha', 1, {
            delay: 0.2,
            duration: 0.2
          });
        });
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        this.stage.gc();
      }
    }, {
      key: "_handleBack",
      value: function _handleBack(e) {
        var navCheck = Router.isNavigating();

        if (navCheck) {
          return true;
        }

        return false;
      }
    }]);

    return Page;
  }(Lightning.Component);

  var CollectionWrapper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(CollectionWrapper, _Lightning$Component);

    var _super = _createSuper(CollectionWrapper);

    function CollectionWrapper() {
      _classCallCheck(this, CollectionWrapper);

      return _super.apply(this, arguments);
    }

    _createClass(CollectionWrapper, [{
      key: "_construct",
      value: function _construct() {
        this._direction = CollectionWrapper.DIRECTION.row;
        this._scrollTransitionSettings = this.stage.transitions.createSettings({});
        this._spacing = 0;
        this._autoResize = false;
        this._requestingItems = false;
        this._requestThreshold = 1;
        this._requestsEnabled = false;
        this._gcThreshold = 5;
        this._gcIncrement = 0;
        this._forceLoad = false;
        this.clear();
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this._updateScrollTransition();
      }
    }, {
      key: "_updateScrollTransition",
      value: function _updateScrollTransition() {
        var axis = this._direction === 1 ? 'y' : 'x';
        this.wrapper.transition(axis, this._scrollTransitionSettings);
        this._scrollTransition = this.wrapper.transition(axis);
      }
    }, {
      key: "_indexChanged",
      value: function _indexChanged(obj) {
        var _this = this;

        var previous = obj.previousIndex,
            target = obj.index,
            max = obj.dataLength,
            mainIndex = obj.mainIndex,
            previousMainIndex = obj.previousMainIndex,
            lines = obj.lines;

        if (!isNaN(previousMainIndex) && !isNaN(mainIndex) && !isNaN(lines)) {
          previous = previousMainIndex;
          target = mainIndex;
          max = lines;
        }

        if (this._requestsEnabled && !this._requestingItems) {
          if (previous < target && target + this._requestThreshold >= max) {
            this._requestingItems = true;
            this.signal('onRequestItems', obj).then(function (response) {
              var type = typeof response;

              if (Array.isArray(response) || type === 'object' || type === 'string' || type === 'number') {
                _this.add(response);
              }

              if (response === false) {
                _this.enableRequests = false;
              }

              _this._requestingItems = false;
            });
          }
        }

        this._refocus();

        this.scrollCollectionWrapper(obj);
        this.signal('onIndexChanged', obj);
      }
    }, {
      key: "setIndex",
      value: function setIndex(index) {
        var targetIndex = limitWithinRange(index, 0, this._items.length - 1);
        var previousIndex = this._index;
        this._index = targetIndex;

        this._indexChanged({
          previousIndex: previousIndex,
          index: targetIndex,
          dataLength: this._items.length
        });

        return previousIndex !== targetIndex;
      }
    }, {
      key: "clear",
      value: function clear() {
        this._uids = [];
        this._items = [];
        this._index = 0;

        if (this.wrapper) {
          var hadChildren = this.wrapper.children > 0;
          this.wrapper.patch({
            x: 0,
            y: 0,
            children: []
          });

          if (hadChildren) {
            this._collectGarbage(true);
          }
        }
      }
    }, {
      key: "add",
      value: function add(item) {
        this.addAt(item);
      }
    }, {
      key: "addAt",
      value: function addAt(item) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._items.length;

        if (index >= 0 && index <= this._items.length) {
          var _this$_items;

          if (!Array.isArray(item)) {
            item = [item];
          }

          var items = this._normalizeDataItems(item);

          (_this$_items = this._items).splice.apply(_this$_items, [index, 0].concat(_toConsumableArray(items)));

          this.plotItems();
          this.setIndex(this._index);
        } else {
          throw new Error('addAt: The index ' + index + ' is out of bounds ' + this._items.length);
        }
      }
    }, {
      key: "remove",
      value: function remove(item) {
        if (this.hasItems && item.assignedID) {
          for (var i = 0; i < this.wrapper.children.length; i++) {
            if (this.wrapper.children[i].assignedID === item.assignedID) {
              return this.removeAt(i);
            }
          }
        } else {
          throw new Error('remove: item not found');
        }
      }
    }, {
      key: "removeAt",
      value: function removeAt(index) {
        var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (index < 0 && index >= this._items.length) {
          throw new Error('removeAt: The index ' + index + ' is out of bounds ' + this._items.length);
        }

        var item = this._items[index];

        this._items.splice(index, amount);

        this.plotItems();
        return item;
      }
    }, {
      key: "reload",
      value: function reload(item) {
        this.clear();
        this.add(item);
      }
    }, {
      key: "plotItems",
      value: function plotItems(items, options) {//placeholder
      }
    }, {
      key: "reposition",
      value: function reposition() {
        var _this2 = this;

        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 70;

        if (this._repositionDebounce) {
          clearTimeout(this._repositionDebounce);
        }

        this._repositionDebounce = setTimeout(function () {
          _this2.repositionItems();
        }, time);
      }
    }, {
      key: "repositionItems",
      value: function repositionItems() {
        //placeHolder
        this.signal('onItemsRepositioned');
      }
    }, {
      key: "up",
      value: function up() {
        return this._attemptNavigation(-1, 1);
      }
    }, {
      key: "down",
      value: function down() {
        return this._attemptNavigation(1, 1);
      }
    }, {
      key: "left",
      value: function left() {
        return this._attemptNavigation(-1, 0);
      }
    }, {
      key: "right",
      value: function right() {
        return this._attemptNavigation(1, 0);
      }
    }, {
      key: "first",
      value: function first() {
        return this.setIndex(0);
      }
    }, {
      key: "last",
      value: function last() {
        return this.setIndex(this._items.length - 1);
      }
    }, {
      key: "next",
      value: function next() {
        return this.setIndex(this._index + 1);
      }
    }, {
      key: "previous",
      value: function previous() {
        return this.setIndex(this._index - 1);
      }
    }, {
      key: "_attemptNavigation",
      value: function _attemptNavigation(shift, direction) {
        if (this.hasItems) {
          return this.navigate(shift, direction);
        }

        return false;
      }
    }, {
      key: "navigate",
      value: function navigate(shift) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._direction;

        if (direction !== this._direction) {
          return false;
        }

        return this.setIndex(this._index + shift);
      }
    }, {
      key: "scrollCollectionWrapper",
      value: function scrollCollectionWrapper(obj) {
        var previous = obj.previousIndex,
            target = obj.index,
            max = obj.dataLength,
            mainIndex = obj.mainIndex,
            previousMainIndex = obj.previousMainIndex,
            lines = obj.lines;

        if (!isNaN(previousMainIndex) && !isNaN(mainIndex) && !isNaN(lines)) {
          previous = previousMainIndex;
          target = mainIndex;
          max = lines;
        }

        var _this$_getPlotPropert = this._getPlotProperties(this._direction),
            directionIsRow = _this$_getPlotPropert.directionIsRow,
            main = _this$_getPlotPropert.main,
            mainDim = _this$_getPlotPropert.mainDim,
            mainMarginFrom = _this$_getPlotPropert.mainMarginFrom,
            mainMarginTo = _this$_getPlotPropert.mainMarginTo;

        var cw = this.currentItemWrapper;
        var bound = this[mainDim];

        if (bound === 0) {
          bound = directionIsRow ? 1920 : 1080;
        }

        var offset = Math.min(this.wrapper[main], this._scrollTransition && this._scrollTransition.targetValue || 0);

        var sizes = this._getItemSizes(cw);

        var marginFrom = sizes[mainMarginFrom] || sizes.margin || 0;
        var marginTo = sizes[mainMarginTo] || sizes.margin || 0;
        var scroll = this._scroll;

        if (!isNaN(scroll)) {
          if (scroll >= 0 && scroll <= 1) {
            scroll = bound * scroll - (cw[main] + cw[mainDim] * scroll);
          } else {
            scroll = scroll - cw[main];
          }
        } else if (typeof scroll === 'function') {
          scroll = scroll.apply(this, [cw, obj]);
        } else if (typeof scroll === 'object') {
          var _scroll = scroll,
              _scroll$jump = _scroll.jump,
              jump = _scroll$jump === void 0 ? false : _scroll$jump,
              _scroll$after = _scroll.after,
              after = _scroll$after === void 0 ? false : _scroll$after,
              _scroll$backward = _scroll.backward,
              backward = _scroll$backward === void 0 ? 0.0 : _scroll$backward,
              _scroll$forward = _scroll.forward,
              forward = _scroll$forward === void 0 ? 1.0 : _scroll$forward;

          if (jump) {
            var mod = target % jump;

            if (mod === 0) {
              scroll = marginFrom - cw[main];
            }

            if (mod === jump - 1) {
              var actualSize = marginFrom + cw[mainDim] + marginTo;
              scroll = mod * actualSize + marginFrom - cw[main];
            }
          } else if (after) {
            scroll = 0;

            if (target >= after - 1) {
              var _actualSize = marginFrom + cw[mainDim] + marginTo;

              scroll = (after - 1) * _actualSize + marginFrom - cw[main];
            }
          } else {
            var backwardBound = bound * this._normalizePixelToPercentage(backward, bound);

            var forwardBound = bound * this._normalizePixelToPercentage(forward, bound);

            if (target < max - 1 && previous < target && offset + cw[main] + cw[mainDim] > forwardBound) {
              scroll = forwardBound - (cw[main] + cw[mainDim]);
            } else if (target > 0 && target < previous && offset + cw[main] < backwardBound) {
              scroll = backwardBound - cw[main];
            } else if (target === max - 1) {
              scroll = bound - (cw[main] + cw[mainDim]);
            } else if (target === 0) {
              scroll = marginFrom - cw[main];
            }
          }
        } else if (isNaN(scroll)) {
          if (previous < target && offset + cw[main] + cw[mainDim] > bound) {
            scroll = bound - (cw[main] + cw[mainDim]);
          } else if (target < previous && offset + cw[main] < 0) {
            scroll = marginFrom - cw[main];
          }
        }

        if (this.active && !isNaN(scroll) && this._scrollTransition) {
          if (this._scrollTransition.isRunning()) {
            this._scrollTransition.reset(scroll, 0.05);
          } else {
            this._scrollTransition.start(scroll);
          }
        } else if (!isNaN(scroll)) {
          this.wrapper[main] = scroll;
        }
      }
    }, {
      key: "$childInactive",
      value: function $childInactive(_ref) {
        var child = _ref.child;

        if (typeof child === 'object') {
          var index = child.componentIndex;

          for (var key in this._items[index]) {
            if (child.component[key] !== undefined) {
              this._items[index][key] = child.component[key];
            }
          }
        }

        this._collectGarbage();
      }
    }, {
      key: "$getChildComponent",
      value: function $getChildComponent(_ref2) {
        var index = _ref2.index;
        return this._items[index];
      }
    }, {
      key: "_resizeWrapper",
      value: function _resizeWrapper(crossSize) {
        var obj = crossSize;

        if (!isNaN(crossSize)) {
          var _obj;

          var _this$_getPlotPropert2 = this._getPlotProperties(this._direction),
              main = _this$_getPlotPropert2.main,
              mainDim = _this$_getPlotPropert2.mainDim,
              crossDim = _this$_getPlotPropert2.crossDim;

          var lastItem = this.wrapper.childList.last;
          obj = (_obj = {}, _defineProperty(_obj, mainDim, lastItem[main] + lastItem[mainDim]), _defineProperty(_obj, crossDim, crossSize), _obj);
        }

        this.wrapper.patch(obj);

        if (this._autoResize) {
          this.patch(obj);
        }
      }
    }, {
      key: "_generateUniqueID",
      value: function _generateUniqueID() {
        var id = '';

        while (this._uids[id] || id === '') {
          id = Math.random().toString(36).substr(2, 9);
        }

        this._uids[id] = true;
        return id;
      }
    }, {
      key: "_getPlotProperties",
      value: function _getPlotProperties(direction) {
        var directionIsRow = direction === 0;
        return {
          directionIsRow: directionIsRow ? true : false,
          mainDirection: directionIsRow ? 'rows' : 'columns',
          main: directionIsRow ? 'x' : 'y',
          mainDim: directionIsRow ? 'w' : 'h',
          mainMarginTo: directionIsRow ? 'marginRight' : 'marginBottom',
          mainMarginFrom: directionIsRow ? 'marginLeft' : 'marginUp',
          crossDirection: !directionIsRow ? 'columns' : 'rows',
          cross: directionIsRow ? 'y' : 'x',
          crossDim: directionIsRow ? 'h' : 'w',
          crossMarginTo: directionIsRow ? 'marginBottom' : 'marginRight',
          crossMarginFrom: directionIsRow ? 'marginUp' : 'marginLeft'
        };
      }
    }, {
      key: "_getItemSizes",
      value: function _getItemSizes(item) {
        var itemType = item.type;

        if (item.component && item.component.__attached) {
          item = item.component;
        }

        return {
          w: item.w || itemType && itemType['width'],
          h: item.h || itemType && itemType['height'],
          margin: item.margin || itemType && itemType['margin'] || 0,
          marginLeft: item.marginLeft || itemType && itemType['marginLeft'],
          marginRight: item.marginRight || itemType && itemType['marginRight'],
          marginTop: item.marginTop || itemType && itemType['marginTop'],
          marginBottom: item.marginBottom || itemType && itemType['marginBottom']
        };
      }
    }, {
      key: "_collectGarbage",
      value: function _collectGarbage(immediate) {
        this._gcIncrement++;

        if (immediate || this.active && this._gcThreshold !== 0 && this._gcIncrement >= this._gcThreshold) {
          this._gcIncrement = 0;
          this.stage.gc();
        }
      }
    }, {
      key: "_normalizeDataItems",
      value: function _normalizeDataItems(array) {
        var _this3 = this;

        return array.map(function (item, index) {
          return _this3._normalizeDataItem(item) || index;
        }).filter(function (item) {
          if (!isNaN(item)) {
            console.warn("Item at index: ".concat(item, ", is not a valid item. Removing it from dataset"));
            return false;
          }

          return true;
        });
      }
    }, {
      key: "_normalizeDataItem",
      value: function _normalizeDataItem(item, index) {
        if (typeof item === 'string' || typeof item === 'number') {
          item = {
            label: item.toString()
          };
        }

        if (typeof item === 'object') {
          var id = this._generateUniqueID();

          return _objectSpread2({
            assignedID: id,
            type: this.itemType,
            collectionWrapper: this,
            isAlive: false
          }, item);
        }

        return index;
      }
    }, {
      key: "_normalizePixelToPercentage",
      value: function _normalizePixelToPercentage(value, max) {
        if (value && value > 1) {
          return value / max;
        }

        return value || 0;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        if (this.hasItems) {
          return this.currentItemWrapper;
        }

        return this;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return this.right();
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return this.left();
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return this.up();
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        return this.down();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        if (this._repositionDebounce) {
          clearTimeout(this._repositionDebounce);
        }

        this._collectGarbage(true);
      }
    }, {
      key: "forceLoad",
      get: function get() {
        return this._forceLoad;
      },
      set: function set(bool) {
        this._forceLoad = bool;
      }
    }, {
      key: "requestingItems",
      get: function get() {
        return this._requestingItems;
      }
    }, {
      key: "requestThreshold",
      get: function get() {
        return this._requestThreshold;
      },
      set: function set(num) {
        this._requestThreshold = num;
      }
    }, {
      key: "enableRequests",
      get: function get() {
        return this._requestsEnabled;
      },
      set: function set(bool) {
        this._requestsEnabled = bool;
      }
    }, {
      key: "gcThreshold",
      get: function get() {
        return this._gcThreshold;
      },
      set: function set(num) {
        this._gcThreshold = num;
      }
    }, {
      key: "wrapper",
      get: function get() {
        return this.tag('Wrapper');
      }
    }, {
      key: "hasItems",
      get: function get() {
        return this.wrapper && this.wrapper.children && this.wrapper.children.length > 0;
      }
    }, {
      key: "currentItemWrapper",
      get: function get() {
        return this.wrapper.children[this._index];
      }
    }, {
      key: "currentItem",
      get: function get() {
        return this.currentItemWrapper.component;
      }
    }, {
      key: "direction",
      get: function get() {
        return Object.keys(CollectionWrapper.DIRECTION)[this._direction];
      },
      set: function set(string) {
        this._direction = CollectionWrapper.DIRECTION[string] || CollectionWrapper.DIRECTION.row;
      }
    }, {
      key: "items",
      get: function get() {
        var itemWrappers = this.itemWrappers;
        return this._items.map(function (item, index) {
          if (itemWrappers[index] && itemWrappers[index].component.isAlive) {
            return itemWrappers[index].component;
          }

          return item;
        });
      },
      set: function set(array) {
        this.clear();
        this.add(array);
      }
    }, {
      key: "length",
      get: function get() {
        return this._items.length;
      }
    }, {
      key: "index",
      get: function get() {
        return this._index;
      },
      set: function set(index) {
        this.setIndex(index);
      }
    }, {
      key: "itemWrappers",
      get: function get() {
        return this.wrapper.children;
      }
    }, {
      key: "scrollTransition",
      get: function get() {
        return this._scrollTransition;
      },
      set: function set(obj) {
        this._scrollTransitionSettings.patch(obj);

        if (this.active) {
          this._updateScrollTransition();
        }
      }
    }, {
      key: "scroll",
      set: function set(value) {
        this._scroll = value;
      }
    }, {
      key: "scrollTo",
      get: function get() {
        return this._scroll;
      }
    }, {
      key: "autoResize",
      get: function get() {
        return this._autoResize;
      },
      set: function set(bool) {
        this._autoResize = bool;
      }
    }, {
      key: "spacing",
      get: function get() {
        return this._spacing;
      },
      set: function set(num) {
        this._spacing = num;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Wrapper: {}
        };
      }
    }, {
      key: "itemType",
      get: function get() {
        return undefined;
      }
    }]);

    return CollectionWrapper;
  }(Lightning.Component);
  CollectionWrapper.DIRECTION = {
    row: 0,
    column: 1
  };

  var Cursor = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Cursor, _Lightning$Component);

    var _super = _createSuper(Cursor);

    function Cursor() {
      _classCallCheck(this, Cursor);

      return _super.apply(this, arguments);
    }

    _createClass(Cursor, [{
      key: "_construct",
      value: function _construct() {
        this._blink = true;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._blinkAnimation = this.animation({
          duration: 1,
          repeat: -1,
          actions: [{
            p: 'alpha',
            v: {
              0: 0,
              0.5: 1,
              1: 0
            }
          }]
        });
      }
    }, {
      key: "show",
      value: function show() {
        if (this._blink) {
          this._blinkAnimation.start();
        } else {
          this.alpha = 1;
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this._blink) {
          this._blinkAnimation.stop();
        } else {
          this.alpha = 0;
        }
      }
    }, {
      key: "blink",
      get: function get() {
        return this._blink;
      },
      set: function set(bool) {
        this._blink = bool;

        if (this.active) {
          if (bool) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0
        };
      }
    }]);

    return Cursor;
  }(Lightning.Component);

  var ItemWrapper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(ItemWrapper, _Lightning$Component);

    var _super = _createSuper(ItemWrapper);

    function ItemWrapper() {
      _classCallCheck(this, ItemWrapper);

      return _super.apply(this, arguments);
    }

    _createClass(ItemWrapper, [{
      key: "create",
      value: function create() {
        if (this.children.length > 0) {
          return;
        }

        var component = this.fireAncestors('$getChildComponent', {
          index: this.componentIndex
        });
        component.isAlive = true;
        var w = this.w,
            h = this.h,
            margin = this.margin,
            marginUp = this.marginUp,
            marginBottom = this.marginBottom,
            marginRight = this.marginRight,
            marginLeft = this.marginLeft;
        this.children = [_objectSpread2(_objectSpread2({}, component), {}, {
          w: w,
          h: h,
          margin: margin,
          marginUp: marginUp,
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginBottom: marginBottom
        })];

        if (this.hasFocus()) {
          this._refocus();
        }
      }
    }, {
      key: "component",
      get: function get() {
        return this.children[0] || this.fireAncestors('$getChildComponent', {
          index: this.componentIndex
        });
      }
    }, {
      key: "_active",
      value: function _active() {
        this.create();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        this._setState('');

        this.children[0].isAlive = true;
        this.fireAncestors('$childInactive', {
          child: this
        });
        this.childList.clear();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.children && this.children[0] || this;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          clipbox: true
        };
      }
    }]);

    return ItemWrapper;
  }(Lightning.Component);

  var KeyWrapper = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(KeyWrapper, _Lightning$Component);

    var _super = _createSuper(KeyWrapper);

    function KeyWrapper() {
      _classCallCheck(this, KeyWrapper);

      return _super.apply(this, arguments);
    }

    _createClass(KeyWrapper, [{
      key: "_update",
      value: function _update() {
        var currentKey = this.children && this.children[0];

        if (currentKey && currentKey.action === this._key.data.action) {
          currentKey.patch(_objectSpread2({}, this._key));
        } else {
          this.children = [_objectSpread2({
            type: this._key.keyType
          }, this._key)];
        }

        if (this.hasFocus()) {
          this._refocus();
        }
      }
    }, {
      key: "key",
      get: function get() {
        return this._key;
      },
      set: function set(obj) {
        this._key = obj;

        if (this.active) {
          this._update();
        }
      }
    }, {
      key: "_active",
      value: function _active() {
        this._update();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        this.childList.clear();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.children && this.children[0] || this;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          clipbox: true
        };
      }
    }]);

    return KeyWrapper;
  }(Lightning.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
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
   */
  var limitWithinRange = function limitWithinRange(num, min, max) {
    return Math.min(Math.max(num, min), max);
  };

  var Grid = /*#__PURE__*/function (_CollectionWrapper) {
    _inherits(Grid, _CollectionWrapper);

    var _super = _createSuper(Grid);

    function Grid() {
      _classCallCheck(this, Grid);

      return _super.apply(this, arguments);
    }

    _createClass(Grid, [{
      key: "_construct",
      value: function _construct() {
        this._crossSpacing = 5;
        this._mainSpacing = 5;
        this._rows = 0;
        this._columns = 0;

        _get(_getPrototypeOf(Grid.prototype), "_construct", this).call(this);
      }
    }, {
      key: "clear",
      value: function clear() {
        _get(_getPrototypeOf(Grid.prototype), "clear", this).call(this);

        this._mainIndex = 0;
        this._crossIndex = 0;
      }
    }, {
      key: "setIndex",
      value: function setIndex(index) {
        var targetIndex = limitWithinRange(index, 0, this._items.length - 1);
        var previousIndex = this._index;

        var _this$_findLocationOf = this._findLocationOfIndex(this._index),
            previousMainIndex = _this$_findLocationOf.mainIndex,
            previousCrossIndex = _this$_findLocationOf.crossIndex;

        var _this$_findLocationOf2 = this._findLocationOfIndex(targetIndex),
            mainIndex = _this$_findLocationOf2.mainIndex,
            crossIndex = _this$_findLocationOf2.crossIndex;

        this._mainIndex = mainIndex;
        this._crossIndex = crossIndex;
        this._index = targetIndex;

        this._indexChanged({
          previousIndex: previousIndex,
          index: targetIndex,
          mainIndex: mainIndex,
          previousMainIndex: previousMainIndex,
          crossIndex: crossIndex,
          previousCrossIndex: previousCrossIndex,
          lines: this._lines.length,
          dataLength: this._items.length
        });
      }
    }, {
      key: "_findLocationOfIndex",
      value: function _findLocationOfIndex(index) {
        for (var i = 0; i < this._lines.length; i++) {
          if (this._lines[i].includes(index)) {
            return {
              mainIndex: i,
              crossIndex: this._lines[i].indexOf(index)
            };
          }
        }

        return {
          mainIndex: -1,
          crossIndex: -1
        };
      }
    }, {
      key: "plotItems",
      value: function plotItems() {
        var _this = this,
            _this$_resizeWrapper;

        var items = this._items;
        var wrapper = this.wrapper;

        var _this$_getPlotPropert = this._getPlotProperties(this._direction),
            directionIsRow = _this$_getPlotPropert.directionIsRow,
            mainDirection = _this$_getPlotPropert.mainDirection,
            main = _this$_getPlotPropert.main,
            mainDim = _this$_getPlotPropert.mainDim,
            mainMarginTo = _this$_getPlotPropert.mainMarginTo,
            mainMarginFrom = _this$_getPlotPropert.mainMarginFrom,
            cross = _this$_getPlotPropert.cross,
            crossDim = _this$_getPlotPropert.crossDim,
            crossMarginTo = _this$_getPlotPropert.crossMarginTo,
            crossMarginFrom = _this$_getPlotPropert.crossMarginFrom;

        var crossSize = this[crossDim];
        var mainPos = 0,
            crossPos = 0,
            lineIndex = 0;
        var animateItems = [];
        var viewboundMain = directionIsRow ? 1920 : 1080;
        var viewboundCross = directionIsRow ? 1080 : 1920;
        var renderContext = this.core.renderContext;
        this._lines = [[]]; //create empty line array

        var cl = [];
        var newChildren = items.map(function (item, index) {
          var _objectSpread2$1;

          var sizes = _this._getItemSizes(item);

          var targetCrossFromMargin = sizes[crossMarginFrom] || sizes.margin || 0;

          if (index === 0) {
            mainPos += sizes[mainMarginFrom] || sizes.margin || 0;
          }

          if (cl.length > 0 && (_this[mainDirection] > 0 && _this[mainDirection] === cl.length || _this[mainDirection] === 0 && crossPos + targetCrossFromMargin + sizes[crossDim] > crossSize)) {
            var bil = _this._getBiggestInLine(cl);

            mainPos = bil[main] + bil[mainDim] + (bil[mainMarginTo] || bil.margin || _this._mainSpacing);
            crossPos = targetCrossFromMargin;

            _this._lines.push([]);

            cl = [];
            lineIndex++;
          } else {
            crossPos += targetCrossFromMargin;
          }

          var ref = "IW-".concat(item.assignedID);
          var tmp = mainPos;
          var tcp = crossPos;
          var existingItemWrapper = wrapper.tag(ref);

          if (existingItemWrapper && (existingItemWrapper.active && (crossPos !== existingItemWrapper[cross] || mainPos !== existingItemWrapper[main]) || !existingItemWrapper.active && (renderContext["p".concat(main)] + wrapper[main] + mainPos <= viewboundMain || renderContext["p".concat(cross)] + wrapper[cross] + crossPos <= viewboundCross))) {
            tmp = existingItemWrapper[main];
            tcp = existingItemWrapper[cross];
            animateItems.push(index);
          }

          var newItem = _objectSpread2(_objectSpread2({
            ref: ref,
            type: ItemWrapper,
            componentIndex: index,
            forceLoad: _this._forceLoad
          }, sizes), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "assigned".concat(main.toUpperCase()), mainPos), _defineProperty(_objectSpread2$1, "assigned".concat(cross.toUpperCase()), crossPos), _defineProperty(_objectSpread2$1, main, tmp), _defineProperty(_objectSpread2$1, cross, tcp), _objectSpread2$1));

          crossPos += sizes[crossDim] + (sizes[crossMarginTo] || sizes.margin || _this._crossSpacing);

          _this._lines[lineIndex].push(index);

          cl.push(newItem);
          return newItem;
        });
        wrapper.children = newChildren;
        animateItems.forEach(function (index) {
          var item = wrapper.children[index];
          item.patch({
            smooth: {
              x: item.assignedX,
              y: item.assignedY
            }
          });
        });

        var biggestInLastLine = this._getBiggestInLine(cl);

        this._resizeWrapper((_this$_resizeWrapper = {}, _defineProperty(_this$_resizeWrapper, mainDim, biggestInLastLine[main] + biggestInLastLine[mainDim]), _defineProperty(_this$_resizeWrapper, crossDim, crossSize), _this$_resizeWrapper));
      }
    }, {
      key: "repositionItems",
      value: function repositionItems() {
        var _this2 = this,
            _this$_resizeWrapper2;

        var wrapper = this.wrapper;

        if (!wrapper && wrapper.children.length) {
          return true;
        }

        var _this$_getPlotPropert2 = this._getPlotProperties(this._direction),
            main = _this$_getPlotPropert2.main,
            mainDim = _this$_getPlotPropert2.mainDim,
            mainMarginTo = _this$_getPlotPropert2.mainMarginTo,
            mainMarginFrom = _this$_getPlotPropert2.mainMarginFrom,
            cross = _this$_getPlotPropert2.cross,
            crossDim = _this$_getPlotPropert2.crossDim,
            crossMarginTo = _this$_getPlotPropert2.crossMarginTo,
            crossMarginFrom = _this$_getPlotPropert2.crossMarginFrom;

        var crossSize = this[crossDim];
        var mainPos = 0,
            crossPos = 0,
            lineIndex = 0; //create empty line array

        var cl = [];
        this.lines = [[]];
        wrapper.children.forEach(function (item, index) {
          var _item$patch;

          var sizes = _this2._getItemSizes(item);

          var targetCrossFromMargin = sizes[crossMarginFrom] || sizes.margin || 0;

          if (index === 0) {
            mainPos += sizes[mainMarginFrom] || sizes.margin || 0;
          }

          if (cl.length > 0 && (_this2[mainDirection] > 0 && _this2[mainDirection] === cl.length || _this2[mainDirection] === 0 && crossPos + targetCrossFromMargin + sizes[crossDim] > crossSize)) {
            var bil = _this2._getBiggestInLine(cl);

            mainPos = bil[main] + bil[mainDim] + (bil[mainMarginTo] || bil.margin || _this2._mainSpacing);
            crossPos = targetCrossFromMargin;

            _this2._lines.push([]);

            cl = [];
            lineIndex++;
          } else {
            crossPos += targetCrossFromMargin;
          }

          item.patch((_item$patch = {}, _defineProperty(_item$patch, "assigned".concat(main.toUpperCase()), mainPos), _defineProperty(_item$patch, "assigned".concat(cross.toUpperCase()), crossPos), _defineProperty(_item$patch, main, mainPos), _defineProperty(_item$patch, cross, crossPos), _item$patch));
          crossPos += sizes[crossDim] + (sizes[crossMarginTo] || sizes.margin || _this2._crossSpacing);

          _this2._lines[lineIndex].push(index);

          cl.push(newItem);
        });

        var biggestInLastLine = this._getBiggestInLine(cl);

        this._resizeWrapper((_this$_resizeWrapper2 = {}, _defineProperty(_this$_resizeWrapper2, mainDim, biggestInLastLine[main] + biggestInLastLine[mainDim]), _defineProperty(_this$_resizeWrapper2, crossDim, crossSize), _this$_resizeWrapper2));

        _get(_getPrototypeOf(Grid.prototype), "repositionItems", this).call(this);
      }
    }, {
      key: "_getBiggestInLine",
      value: function _getBiggestInLine(line) {
        var _this$_getPlotPropert3 = this._getPlotProperties(this._direction),
            mainDim = _this$_getPlotPropert3.mainDim;

        return line.reduce(function (biggestItem, newItem) {
          if (newItem[mainDim] > biggestItem[mainDim]) {
            return newItem;
          }

          return biggestItem;
        });
      }
    }, {
      key: "navigate",
      value: function navigate(shift, direction) {
        var _this3 = this;

        var _this$_getPlotPropert4 = this._getPlotProperties(this._direction),
            directionIsRow = _this$_getPlotPropert4.directionIsRow,
            cross = _this$_getPlotPropert4.cross,
            crossDim = _this$_getPlotPropert4.crossDim;

        var overCross = directionIsRow && direction === CollectionWrapper.DIRECTION.column || !directionIsRow && direction === CollectionWrapper.DIRECTION.row;
        var targetMainIndex = this._mainIndex + !!!overCross * shift;
        var targetCrossIndex = this._crossIndex + !!overCross * shift;
        var targetIndex = this._index;

        if (overCross && targetCrossIndex > -1 && targetCrossIndex <= this._lines[targetMainIndex].length) {
          if (this._lines[targetMainIndex][targetCrossIndex] !== undefined) {
            targetIndex = this._lines[targetMainIndex][targetCrossIndex];
            this._previous = undefined;
          }
        } else if (!overCross && targetMainIndex < this._lines.length && targetMainIndex > -1) {
          var targetLine = this._lines[targetMainIndex];

          if (this._previous && this._previous.mainIndex === targetMainIndex) {
            targetIndex = this._previous.realIndex;
            targetCrossIndex = this._previous.crossIndex;
          } else if (targetLine) {
            var currentItem = this.currentItemWrapper;
            var m = targetLine.map(function (item) {
              var targetItem = _this3.wrapper.children[item];

              if (targetItem[cross] <= currentItem[cross] && currentItem[cross] <= targetItem[cross] + targetItem[crossDim]) {
                return targetItem[cross] + targetItem[crossDim] - currentItem[cross];
              }

              if (targetItem[cross] >= currentItem[cross] && targetItem[cross] <= currentItem[cross] + currentItem[crossDim]) {
                return currentItem[cross] + currentItem[crossDim] - targetItem[cross];
              }

              return -1;
            });
            var acc = -1;
            var t = -1;

            for (var i = 0; i < m.length; i++) {
              if (m[i] === -1 && acc > -1) {
                break;
              }

              if (m[i] > acc) {
                acc = m[i];
                t = i;
              }
            }

            if (t > -1) {
              targetCrossIndex = t;
              targetIndex = targetLine[t];
            }
          }

          this._previous = {
            mainIndex: this._mainIndex,
            crossIndex: this._crossIndex,
            realIndex: this._index
          };
        }

        if (this._index !== targetIndex) {
          this.setIndex(targetIndex);
          return true;
        }

        return false;
      }
    }, {
      key: "rows",
      get: function get() {
        return this._rows;
      },
      set: function set(num) {
        this._rows = num;
        this.direction = 'row';
      }
    }, {
      key: "columns",
      get: function get() {
        return this._columns;
      },
      set: function set(num) {
        this._columns = num;
        this.direction = 'column';
      }
    }, {
      key: "crossSpacing",
      get: function get() {
        return this._crossSpacing;
      },
      set: function set(num) {
        this._crossSpacing = num;
      }
    }, {
      key: "mainSpacing",
      get: function get() {
        return this._mainSpacing;
      },
      set: function set(num) {
        this._mainSpacing = num;
      }
    }, {
      key: "spacing",
      set: function set(num) {
        this._spacing = num;
        this._mainSpacing = num;
        this._crossSpacing = num;
      }
    }]);

    return Grid;
  }(CollectionWrapper);

  var InputField$1 = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(InputField, _Lightning$Component);

    var _super = _createSuper(InputField);

    function InputField() {
      _classCallCheck(this, InputField);

      return _super.apply(this, arguments);
    }

    _createClass(InputField, [{
      key: "_construct",
      value: function _construct() {
        this._input = '';
        this._previousInput = '';
        this._description = '';
        this._cursorX = 0;
        this._cursorIndex = 0;
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        var preLabel = this.tag('PreLabel');
        var cursor = this.tag('Cursor');
        var postLabel = this.tag('PostLabel');

        var positionCursor = function positionCursor() {
          _this.h = preLabel.renderHeight || postLabel.renderHeight;
          cursor.x = preLabel.renderWidth + _this._cursorX;
          postLabel.x = cursor.x + cursor.w * (1 - cursor.mountX);
        };

        preLabel.on('txLoaded', positionCursor);
        postLabel.on('txLoaded', positionCursor);
      }
    }, {
      key: "onInputChanged",
      value: function onInputChanged(_ref) {
        var _ref$input = _ref.input,
            input = _ref$input === void 0 ? '' : _ref$input;
        var targetIndex = Math.max(input.length - this._input.length + this._cursorIndex, 0);
        this._input = input;

        this._update(targetIndex);
      }
    }, {
      key: "_update",
      value: function _update() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var hasInput = this._input.length > 0;
        var cursor = this.tag('Cursor');
        var pre = this._description;
        var post = '';

        if (hasInput) {
          pre = this._input.substring(0, index);
          post = this._input.substring(index, this._input.length);
          cursor.show();
        } else {
          cursor.hide();
        }

        this.patch({
          PreLabel: {
            text: {
              text: pre
            }
          },
          PostLabel: {
            text: {
              text: post
            }
          }
        });

        if (this.h === 0) {
          this.tag('PreLabel').loadTexture();
          this.h = this.tag('PreLabel').renderHeight;
        }

        this._cursorIndex = index;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        this._update(Math.min(this._input.length, this._cursorIndex + 1));
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        this._update(Math.max(0, this._cursorIndex - 1));
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._update();
      }
    }, {
      key: "input",
      get: function get() {
        return this._input;
      }
    }, {
      key: "hasInput",
      get: function get() {
        return this._input.length > 0;
      }
    }, {
      key: "cursorIndex",
      get: function get() {
        return this._cursorIndex;
      }
    }, {
      key: "inputText",
      get: function get() {
        return this._inputText;
      },
      set: function set(obj) {
        this._inputText = obj;
        this.tag('PreLabel').patch({
          text: obj
        });
        this.tag('PostLabel').patch({
          text: obj
        });
      }
    }, {
      key: "description",
      get: function get() {
        return this._description;
      },
      set: function set(str) {
        this._description = str;
      }
    }, {
      key: "cursor",
      get: function get() {
        return this.tag('Cursor');
      },
      set: function set(obj) {
        if (obj.x) {
          this._cursorX = obj.x;
          delete obj.x;
        }

        this.tag('Cursor').patch(obj);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          PreLabel: {},
          PostLabel: {},
          Cursor: {
            type: Cursor,
            rect: true,
            w: 4,
            h: 54,
            x: 0,
            y: 0
          }
        };
      }
    }]);

    return InputField;
  }(Lightning.Component);

  var Key$1 = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Key, _Lightning$Component);

    var _super = _createSuper(Key);

    function Key() {
      _classCallCheck(this, Key);

      return _super.apply(this, arguments);
    }

    _createClass(Key, [{
      key: "_construct",
      value: function _construct() {
        this._backgroundColors = {};
        this._labelColors = {};
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      },
      set: function set(obj) {
        this._data = obj;

        this._update();
      }
    }, {
      key: "labelText",
      get: function get() {
        return this._labelText;
      },
      set: function set(obj) {
        this._labelText = obj;
        this.tag('Label').patch({
          text: obj
        });
      }
    }, {
      key: "label",
      get: function get() {
        return this.tag('Label');
      },
      set: function set(obj) {
        this.tag('Label').patch(obj);
      }
    }, {
      key: "labelColors",
      get: function get() {
        return this._labelColors;
      },
      set: function set(obj) {
        this._labelColors = obj;

        this._update();
      }
    }, {
      key: "backgroundColors",
      get: function get() {
        return this._backgroundColors;
      },
      set: function set(obj) {
        this._backgroundColors = obj;

        this._update();
      }
    }, {
      key: "background",
      get: function get() {
        return this.tag('Background');
      },
      set: function set(obj) {
        this.tag('Background').patch(obj);
      }
    }, {
      key: "_update",
      value: function _update() {
        if (!this.active) {
          return;
        }

        var _this$_data$label = this._data.label,
            label = _this$_data$label === void 0 ? '' : _this$_data$label;
        var hasFocus = this.hasFocus();
        var _this$_backgroundColo = this._backgroundColors,
            focused = _this$_backgroundColo.focused,
            _this$_backgroundColo2 = _this$_backgroundColo.unfocused,
            unfocused = _this$_backgroundColo2 === void 0 ? 0xff000000 : _this$_backgroundColo2;
        var _this$_labelColors = this._labelColors,
            labelFocused = _this$_labelColors.focused,
            _this$_labelColors$un = _this$_labelColors.unfocused,
            labelUnfocused = _this$_labelColors$un === void 0 ? 0xffffffff : _this$_labelColors$un;
        this.patch({
          Background: {
            color: hasFocus && focused ? focused : unfocused
          },
          Label: {
            text: {
              text: label
            },
            color: hasFocus && labelFocused ? labelFocused : labelUnfocused
          }
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._update();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        var _this$_backgroundColo3 = this._backgroundColors,
            focused = _this$_backgroundColo3.focused,
            _this$_backgroundColo4 = _this$_backgroundColo3.unfocused,
            unfocused = _this$_backgroundColo4 === void 0 ? 0xff000000 : _this$_backgroundColo4;
        var _this$_labelColors2 = this._labelColors,
            labelFocused = _this$_labelColors2.focused,
            _this$_labelColors2$u = _this$_labelColors2.unfocused,
            labelUnfocused = _this$_labelColors2$u === void 0 ? 0xffffffff : _this$_labelColors2$u;
        this.patch({
          Background: {
            smooth: {
              color: focused || unfocused
            }
          },
          Label: {
            smooth: {
              color: labelFocused || labelUnfocused
            }
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        var _this$_backgroundColo5 = this._backgroundColors.unfocused,
            unfocused = _this$_backgroundColo5 === void 0 ? 0xff000000 : _this$_backgroundColo5;
        var _this$_labelColors$un2 = this._labelColors.unfocused,
            labelUnfocused = _this$_labelColors$un2 === void 0 ? 0xffffffff : _this$_labelColors$un2;
        this.patch({
          Background: {
            smooth: {
              color: unfocused
            }
          },
          Label: {
            smooth: {
              color: labelUnfocused
            }
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {
            w: function w(_w) {
              return _w;
            },
            h: function h(_h) {
              return _h;
            },
            rect: true
          },
          Label: {
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            }
          }
        };
      }
    }, {
      key: "width",
      get: function get() {
        return 80;
      }
    }, {
      key: "height",
      get: function get() {
        return 80;
      }
    }]);

    return Key;
  }(Lightning.Component);

  var Keyboard = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Keyboard, _Lightning$Component);

    var _super = _createSuper(Keyboard);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      return _super.apply(this, arguments);
    }

    _createClass(Keyboard, [{
      key: "_construct",
      value: function _construct() {
        this._input = '';
        this._inputField = undefined;
        this._maxCharacters = 56;
        this.resetFocus();
      }
    }, {
      key: "resetFocus",
      value: function resetFocus() {
        this._columnIndex = 0;
        this._rowIndex = 0;
        this._previousKey = null;
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this._keys = this.tag('Keys');

        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this = this;

        var _this$_config = this._config,
            layouts = _this$_config.layouts,
            _this$_config$buttonT = _this$_config.buttonTypes,
            buttonTypes = _this$_config$buttonT === void 0 ? {} : _this$_config$buttonT,
            _this$_config$styling = _this$_config.styling,
            styling = _this$_config$styling === void 0 ? {} : _this$_config$styling;

        if (!this._layout || this._layout && layouts[this._layout] === undefined) {
          console.error("Configured layout \"".concat(this._layout, "\" does not exist. Picking first available: \"").concat(Object.keys(layouts)[0], "\""));
          this._layout = Object.keys(layouts)[0];
        }

        var _styling$horizontalSp = styling.horizontalSpacing,
            horizontalSpacing = _styling$horizontalSp === void 0 ? 0 : _styling$horizontalSp,
            _styling$verticalSpac = styling.verticalSpacing,
            verticalSpacing = _styling$verticalSpac === void 0 ? 0 : _styling$verticalSpac,
            _styling$align = styling.align,
            align = _styling$align === void 0 ? 'left' : _styling$align;
        var rowPosition = 0;
        var isEvent = /^[A-Z][A-Za-z0-9]{1}/;
        var hasLabel = /\:/;

        if (buttonTypes.default === undefined) {
          buttonTypes.default = Key$1;
        }

        this._keys.children = layouts[this._layout].map(function (row, rowIndex) {
          var _ref = styling["Row".concat(rowIndex + 1)] || {},
              _ref$x = _ref.x,
              x = _ref$x === void 0 ? 0 : _ref$x,
              _ref$margin = _ref.margin,
              margin = _ref$margin === void 0 ? 0 : _ref$margin,
              marginRight = _ref.marginRight,
              marginLeft = _ref.marginLeft,
              marginTop = _ref.marginTop,
              marginBottom = _ref.marginBottom,
              _ref$spacing = _ref.spacing,
              rowHorizontalSpacing = _ref$spacing === void 0 ? horizontalSpacing || 0 : _ref$spacing,
              _ref$align = _ref.align,
              rowAlign = _ref$align === void 0 ? align : _ref$align;

          var keyPosition = 0;
          var rowHeight = 0;
          var rowKeys = row.map(function (key, keyIndex) {
            var origin = key;
            var keyType = buttonTypes.default;
            var action = 'Input';
            var label = key;

            if (isEvent.test(key)) {
              if (hasLabel.test(key)) {
                key = key.split(':');
                label = key[1].toString();
                key = key[0];
              }

              if (buttonTypes[key]) {
                keyType = buttonTypes[key];
                action = key.action || key;
              }
            }

            var keySpacing = keyType.margin || keyType.type.margin;
            var _keyType = keyType,
                _keyType$w = _keyType.w,
                w = _keyType$w === void 0 ? keyType.type.width || 0 : _keyType$w,
                _keyType$h = _keyType.h,
                h = _keyType$h === void 0 ? keyType.type.height || 0 : _keyType$h,
                _keyType$marginLeft = _keyType.marginLeft,
                marginLeft = _keyType$marginLeft === void 0 ? keyType.type.marginLeft || keySpacing || 0 : _keyType$marginLeft,
                _keyType$marginRight = _keyType.marginRight,
                marginRight = _keyType$marginRight === void 0 ? keyType.type.marginRight || keySpacing || rowHorizontalSpacing : _keyType$marginRight;
            rowHeight = h > rowHeight ? h : rowHeight;
            var currentPosition = keyPosition + marginLeft;
            keyPosition += marginLeft + w + marginRight;
            return {
              ref: "Key-{".concat(keyIndex + 1, "}"),
              type: KeyWrapper,
              keyboard: _this,
              x: currentPosition,
              w: w,
              h: h,
              key: _objectSpread2({
                data: {
                  origin: origin,
                  key: key,
                  label: label,
                  action: action
                },
                w: w,
                h: h
              }, keyType)
            };
          });
          var rowOffset = x + (marginLeft || margin);
          var rowMount = 0;

          if (_this.w && rowAlign === 'center') {
            rowOffset = _this.w / 2;
            rowMount = 0.5;
          }

          if (_this.w && rowAlign === 'right') {
            rowOffset = _this.w - (marginRight || margin);
            rowMount = 1;
          }

          var currentPosition = rowPosition + (marginTop || margin);
          rowPosition = currentPosition + rowHeight + (marginBottom || margin || verticalSpacing);
          return {
            ref: "Row-".concat(rowIndex + 1),
            x: rowOffset,
            mountX: rowMount,
            w: keyPosition,
            y: currentPosition,
            children: rowKeys
          };
        });

        this._refocus();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.currentKeyWrapper || this;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return this.navigate('row', 1);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return this.navigate('row', -1);
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return this.navigate('column', -1);
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        return this.navigate('column', 1);
      }
    }, {
      key: "_handleKey",
      value: function _handleKey(_ref2) {
        var key = _ref2.key,
            _ref2$code = _ref2.code,
            code = _ref2$code === void 0 ? 'CustomKey' : _ref2$code;

        if (code === 'Backspace' && this._input.length === 0) {
          return false;
        }

        if (key === ' ') {
          key = 'Space';
        }

        var targetFound = this._findKey(key);

        if (targetFound) {
          this._handleEnter();
        }

        return targetFound;
      }
    }, {
      key: "_findKey",
      value: function _findKey(str) {
        var rows = this._config.layouts[this._layout];
        var i = 0,
            j = 0;

        for (; i < rows.length; i++) {
          for (j = 0; j < rows[i].length; j++) {
            var key = rows[i][j];

            if (str.length > 1 && key.indexOf(str) > -1 || key.toUpperCase() === str.toUpperCase()) {
              this._rowIndex = i;
              this._columnIndex = j;
              return true;
            }
          }
        }

        return false;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this$currentKey$data = this.currentKey.data,
            origin = _this$currentKey$data.origin,
            action = _this$currentKey$data.action;
        var event = {
          index: this._input.length,
          key: origin
        };

        if (this._inputField && this._inputField.cursorIndex) {
          event.index = this._inputField.cursorIndex;
        }

        if (action !== 'Input') {
          var split = event.key.split(':');
          var call = "on".concat(split[0]);
          var eventFunction = this[call];
          event.key = split[1];

          if (eventFunction && eventFunction.apply && eventFunction.call) {
            eventFunction.call(this, event);
          }

          this.signal(call, event);
        } else {
          this.addAt(event.key, event.index);
        }
      }
    }, {
      key: "_changeInput",
      value: function _changeInput(input) {
        if (input >= this._maxCharacters) {
          return;
        }

        var eventData = {
          previousInput: this._input,
          input: this._input = input
        };

        if (this._inputField && this._inputField.onInputChanged) {
          this._inputField.onInputChanged(eventData);
        }

        this.signal('onInputChanged', eventData);
      }
    }, {
      key: "focus",
      value: function focus(str) {
        this._findKey(str);
      }
    }, {
      key: "add",
      value: function add(str) {
        this._changeInput(this._input + str);
      }
    }, {
      key: "addAt",
      value: function addAt(str, index) {
        if (index > this._input.length - 1) {
          this.add(str);
        } else if (index > -1) {
          this._changeInput(this._input.substring(0, index) + str + this._input.substring(index, this._input.length));
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        this._changeInput(this._input.substring(0, this._input.length - 1));
      }
    }, {
      key: "removeAt",
      value: function removeAt(index) {
        if (index > this._input.length - 1) {
          this.remove();
        } else if (index > -1) {
          this._changeInput(this._input.substring(0, index - 1) + this._input.substring(index, this._input.length));
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        this._changeInput('');
      }
    }, {
      key: "layout",
      value: function layout(key) {
        if (key === this._layout) {
          return;
        }

        this._layout = key;

        if (this.attached) {
          this.resetFocus();

          this._update();
        }
      }
    }, {
      key: "inputField",
      value: function inputField(component) {
        if (component && component.isComponent) {
          this._inputField = component;
        } else {
          this._inputField = undefined;
        }
      }
    }, {
      key: "navigate",
      value: function navigate(direction, shift) {
        var targetIndex = (direction === 'row' ? this._columnIndex : this._rowIndex) + shift;
        var currentRow = this.rows[this._rowIndex];

        if (direction === 'row' && targetIndex > -1 && targetIndex < currentRow.children.length) {
          this._previous = null;
          return this._columnIndex = targetIndex;
        }

        if (direction === 'column' && targetIndex > -1 && targetIndex < this.rows.length) {
          var currentRowIndex = this._rowIndex;
          var currentColumnIndex = this._columnIndex;

          if (this._previous && this._previous.row === targetIndex) {
            var tmp = this._previous.column;
            this._previous.column = this._columnIndex;
            this._columnIndex = tmp;
            this._rowIndex = this._previous.row;
          } else {
            var targetRow = this.rows[targetIndex];
            var currentKey = this.currentKeyWrapper;
            var currentX = this.rows[this._rowIndex].x + currentKey.x;
            var m = targetRow.children.map(function (key) {
              var keyX = targetRow.x + key.x;

              if (keyX <= currentX && currentX < keyX + key.w) {
                return keyX + key.w - currentX;
              }

              if (keyX >= currentX && keyX <= currentX + currentKey.w) {
                return currentX + currentKey.w - keyX;
              }

              return -1;
            });
            var acc = -1;
            var t = -1;

            for (var i = 0; i < m.length; i++) {
              if (m[i] === -1 && acc > -1) {
                break;
              }

              if (m[i] > acc) {
                acc = m[i];
                t = i;
              }
            }

            if (t > -1) {
              this._rowIndex = targetIndex;
              this._columnIndex = t;
            }
          }

          if (this._rowIndex !== currentRowIndex) {
            this._previous = {
              column: currentColumnIndex,
              row: currentRowIndex
            };
            return this._rowIndex = targetIndex;
          }
        }

        return false;
      }
    }, {
      key: "onSpace",
      value: function onSpace(_ref3) {
        var index = _ref3.index;
        this.addAt(' ', index);
      }
    }, {
      key: "onBackspace",
      value: function onBackspace(_ref4) {
        var index = _ref4.index;
        this.removeAt(index);
      }
    }, {
      key: "onClear",
      value: function onClear() {
        this.clear();
      }
    }, {
      key: "onLayout",
      value: function onLayout(_ref5) {
        var key = _ref5.key;
        this.layout(key);
      }
    }, {
      key: "config",
      get: function get() {
        return this._config;
      },
      set: function set(obj) {
        this._config = obj;

        if (this.active) {
          this._update();
        }
      }
    }, {
      key: "currentInputField",
      get: function get() {
        return this._inputField;
      },
      set: function set(component) {
        this.inputField(component);
      }
    }, {
      key: "currentLayout",
      get: function get() {
        return this._layout;
      },
      set: function set(str) {
        this.layout(str);
      }
    }, {
      key: "maxCharacters",
      get: function get() {
        return this._maxCharacters;
      },
      set: function set(num) {
        this._maxCharacters = num;
      }
    }, {
      key: "rows",
      get: function get() {
        return this._keys && this._keys.children;
      }
    }, {
      key: "currentKeyWrapper",
      get: function get() {
        return this.rows && this.rows[this._rowIndex].children[this._columnIndex];
      }
    }, {
      key: "currentKey",
      get: function get() {
        return this.currentKeyWrapper && this.currentKeyWrapper.key;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Keys: {
            w: function w(_w) {
              return _w;
            }
          }
        };
      }
    }]);

    return Keyboard;
  }(Lightning.Component);

  var List = /*#__PURE__*/function (_CollectionWrapper) {
    _inherits(List, _CollectionWrapper);

    var _super = _createSuper(List);

    function List() {
      _classCallCheck(this, List);

      return _super.apply(this, arguments);
    }

    _createClass(List, [{
      key: "plotItems",
      value: function plotItems() {
        var _this = this;

        var items = this._items;
        var wrapper = this.wrapper;

        var _this$_getPlotPropert = this._getPlotProperties(this._direction),
            directionIsRow = _this$_getPlotPropert.directionIsRow,
            main = _this$_getPlotPropert.main,
            mainDim = _this$_getPlotPropert.mainDim,
            mainMarginTo = _this$_getPlotPropert.mainMarginTo,
            mainMarginFrom = _this$_getPlotPropert.mainMarginFrom,
            cross = _this$_getPlotPropert.cross,
            crossDim = _this$_getPlotPropert.crossDim;

        var crossPos = 0,
            crossSize = 0,
            position = 0;
        var animateItems = [];
        var viewboundMain = directionIsRow ? 1920 : 1080;
        var viewboundCross = directionIsRow ? 1080 : 1920;
        var renderContext = this.core.renderContext;
        var newChildren = items.map(function (item, index) {
          var _objectSpread2$1;

          var sizes = _this._getItemSizes(item);

          position += sizes[mainMarginFrom] || sizes.margin || 0;

          if (crossSize < sizes[crossDim]) {
            crossSize = sizes[crossDim];
          }

          var ref = "IW-".concat(item.assignedID);
          var mainPos = position;
          crossPos = item[cross] || crossPos;
          var tmp = mainPos;
          var tcp = crossPos;
          var existingItemWrapper = wrapper.tag(ref);

          if (existingItemWrapper && (existingItemWrapper.active && (crossPos !== existingItemWrapper[cross] || mainPos !== existingItemWrapper[main]) || !existingItemWrapper.active && (renderContext["p".concat(main)] + wrapper[main] + mainPos <= viewboundMain || renderContext["p".concat(cross)] + wrapper[cross] + crossPos <= viewboundCross))) {
            tmp = existingItemWrapper[main];
            tcp = existingItemWrapper[cross];
            animateItems.push(index);
          }

          position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || _this._spacing);
          return _objectSpread2(_objectSpread2({
            ref: ref,
            type: ItemWrapper,
            componentIndex: index,
            forceLoad: _this._forceLoad
          }, sizes), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "assigned".concat(main.toUpperCase()), mainPos), _defineProperty(_objectSpread2$1, "assigned".concat(cross.toUpperCase()), crossPos), _defineProperty(_objectSpread2$1, main, tmp), _defineProperty(_objectSpread2$1, cross, tcp), _objectSpread2$1));
        });
        wrapper.children = newChildren;
        animateItems.forEach(function (index) {
          var item = wrapper.children[index];
          item.patch({
            smooth: {
              x: item.assignedX,
              y: item.assignedY
            }
          });
        });

        this._resizeWrapper(crossSize);
      }
    }, {
      key: "repositionItems",
      value: function repositionItems() {
        var _this2 = this;

        var wrapper = this.wrapper;

        if (!wrapper && wrapper.children.length) {
          return true;
        }

        var _this$_getPlotPropert2 = this._getPlotProperties(this._direction),
            main = _this$_getPlotPropert2.main,
            mainDim = _this$_getPlotPropert2.mainDim,
            mainMarginTo = _this$_getPlotPropert2.mainMarginTo,
            mainMarginFrom = _this$_getPlotPropert2.mainMarginFrom,
            cross = _this$_getPlotPropert2.cross,
            crossDim = _this$_getPlotPropert2.crossDim;

        var crossPos = 0,
            crossSize = 0,
            position = 0;
        wrapper.children.forEach(function (item) {
          var _objectSpread3;

          var sizes = _this2._getItemSizes(item.component);

          position += sizes[mainMarginFrom] || sizes.margin || 0;
          crossPos = item[cross] || crossPos;

          if (crossSize < sizes[crossDim]) {
            crossSize = sizes[crossDim];
          }

          var mainPos = position;
          position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || _this2.spacing);
          item.patch(_objectSpread2((_objectSpread3 = {}, _defineProperty(_objectSpread3, "assigned".concat(main.toUpperCase()), mainPos), _defineProperty(_objectSpread3, "assigned".concat(cross.toUpperCase()), 0), _defineProperty(_objectSpread3, main, mainPos), _defineProperty(_objectSpread3, cross, crossPos), _objectSpread3), sizes));
        });

        this._resizeWrapper(crossSize);

        _get(_getPrototypeOf(List.prototype), "repositionItems", this).call(this);
      }
    }]);

    return List;
  }(CollectionWrapper);

  var Strip = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Strip, _Lightning$Component);

    var _super = _createSuper(Strip);

    function Strip() {
      _classCallCheck(this, Strip);

      return _super.apply(this, arguments);
    }

    _createClass(Strip, [{
      key: "index",
      get: function get() {
        return this.tag('List').index;
      },
      set: function set(num) {
        this._index = num;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._transitionAlpha = this.transition('alpha');
        this._transitionLabel = this.tag('Label').transition('y');
        this._labelAnimation = this.tag('Label').animation({
          duration: 0.2,
          actions: [{
            p: 'y',
            v: {
              0: 0,
              1: -30
            }
          }, {
            p: 'scale',
            v: {
              0: 0.8,
              1: 1
            }
          }]
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        var parentIndex = this.collectionWrapper.index;
        var index = this.cparent.componentIndex;
        this.patch({
          alpha: index >= parentIndex,
          Label: {
            text: {
              text: this.title
            }
          },
          List: {
            itemType: this.itemType,
            items: this.items,
            index: this._index
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        if (!this.cparent) {
          return;
        }

        var parentIndex = this.collectionWrapper.index;
        var index = this.cparent.componentIndex;

        if (index !== parentIndex) {
          this.tag('List').setIndex(0);
        }

        if (index < parentIndex) {
          transition(this._transitionAlpha, 0.001);
        }

        this._labelAnimation.stop();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        transition(this._transitionAlpha, 1);

        this._labelAnimation.start();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('List');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0.001,
          transitions: {
            alpha: {
              duration: 0.25
            }
          },
          Label: {
            x: 90,
            y: 0,
            pivotX: 0,
            pivotY: 1,
            scale: 0.8,
            text: {
              fontFace: 'Medium',
              fontSize: 48
            }
          },
          List: {
            y: 80,
            x: 90,
            type: List,
            w: 1600,
            spacing: 40
          }
        };
      }
    }, {
      key: "marginBottom",
      get: function get() {
        return 30;
      }
    }]);

    return Strip;
  }(Lightning.Component);

  var Detail$1 = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Detail, _Lightning$Component);

    var _super = _createSuper(Detail);

    function Detail() {
      _classCallCheck(this, Detail);

      return _super.apply(this, arguments);
    }

    _createClass(Detail, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        var poster = this.tag('LargePoster');
        var moreInfo = this.tag('MoreInfo');
        poster.on('txError', function () {
          poster.src = Utils.asset('images/largeMissingImage.jpg');
        });
        poster.on('txLoaded', function () {
          moreInfo.x = 1730;

          _this.patch({
            Info: {
              DescriptionWrapper: {
                Description: {
                  smooth: {
                    alpha: 0
                  }
                },
                DescriptionFull: {
                  smooth: {
                    alpha: 1
                  }
                }
              }
            },
            MoreInfo: {
              smooth: {
                x: [1690, {
                  duration: 0.2
                }],
                alpha: [1, {
                  duration: 0.2
                }]
              }
            },
            MoreInfo2: {
              smooth: {
                alpha: 1
              }
            }
          });
        });
        var fullDescription = this.tag('DescriptionFull');
        fullDescription.on('txLoaded', function () {
          _this.tag('MoreInfo2').y = 110 + _this.tag('DescriptionWrapper').finalY + fullDescription.renderHeight;
        });
        this._fadeAnimation = this.tag('Info').animation({
          delay: 0.2,
          duration: 0.3,
          actions: [{
            p: 'alpha',
            v: {
              0: 0.001,
              1: 1
            }
          }, {
            p: 'x',
            v: {
              0: 270,
              1: 230
            }
          }]
        });
      }
    }, {
      key: "show",
      value: function show(data) {
        if (this._data && this._data.id === data.id) {
          return;
        }

        this._data = data;
        var title = data.title,
            description = data.description;
        this.tag('Info').patch({
          Title: {
            text: title
          },
          DescriptionWrapper: {
            Description: {
              text: description
            },
            DescriptionFull: {
              text: description
            }
          }
        });

        this._fadeAnimation.start();
      }
    }, {
      key: "showMore",
      value: function showMore(data) {
        this._loadingData = true;
        var number_of_episodes = data.number_of_episodes,
            number_of_seasons = data.number_of_seasons,
            media_type = data.media_type,
            large_poster = data.large_poster,
            backdrop = data.backdrop,
            genres = data.genres,
            _data$runtime = data.runtime,
            runtime = _data$runtime === void 0 ? '' : _data$runtime;
        var titleInfo = [media_type.charAt(0).toUpperCase() + media_type.slice(1)];

        if (genres.length > 0) {
          titleInfo.push(genres.map(function (genre) {
            return genre;
          }).join(', '));
        }

        if (runtime && (runtime + '').length > 0) {
          var formatted = runtime + ' m';

          if (runtime > 59) {
            formatted = "".concat(Math.floor(runtime / 60), " h ").concat(runtime % 60, " m");
          }

          runtime = formatted;
        }

        if (number_of_episodes && number_of_seasons) {
          if (number_of_seasons === 1) {
            runtime = "".concat(number_of_episodes, " episodes");
          } else {
            runtime = "".concat(number_of_seasons, " seasons");
          }
        }

        this.fireAncestors('$updateBackdrop', {
          src: backdrop
        });
        this.patch({
          MoreInfo: {
            LargePoster: {
              texture: Img(large_poster).original()
            },
            Runtime: {
              text: runtime
            }
          },
          MoreInfo2: {
            TitleInfo: {
              text: titleInfo.join(" \u2022 ")
            }
          }
        });
        this._data = data;
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          Info: {
            DescriptionWrapper: {
              Description: {
                alpha: 1
              },
              DescriptionFull: {
                alpha: 0
              }
            }
          },
          MoreInfo: {
            smooth: {
              alpha: 0.001,
              x: 1730
            }
          },
          MoreInfo2: {
            smooth: {
              alpha: 0.001
            }
          }
        });
      }
    }, {
      key: "_handleKey",
      value: function _handleKey() {
        return true;
      }
    }, {
      key: "_handleBack",
      value: function _handleBack() {
        Router.back();
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var _this$_data = this._data,
            id = _this$_data.id,
            media_type = _this$_data.media_type;
        Router.navigate("player/".concat(media_type, "/").concat(id));
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('PlayButton');
      }
    }], [{
      key: "_template",
      value: function _template() {
        var _PlayButton;

        return {
          zIndex: 9,
          Info: {
            x: 230,
            y: 90,
            alpha: 0.001,
            flex: {
              direction: 'column'
            },
            Title: {
              w: 1060,
              renderOffscreen: true,
              text: {
                fontFace: 'Bold',
                wrap: true,
                fontSize: 74,
                lineHeight: 88
              }
            },
            DescriptionWrapper: {
              h: 580,
              w: 960,
              Description: {
                w: 960,
                renderOffscreen: true,
                text: {
                  fontFace: 'Regular',
                  wrap: true,
                  maxLines: 4,
                  fontSize: 36,
                  lineHeight: 44
                }
              },
              DescriptionFull: {
                alpha: 0,
                w: 960,
                renderOffscreen: true,
                text: {
                  fontFace: 'Regular',
                  wrap: true,
                  maxLines: 10,
                  fontSize: 36,
                  lineHeight: 44
                }
              }
            }
          },
          MoreInfo: {
            alpha: 0.001,
            mountX: 1,
            x: 1690,
            y: 90,
            w: 300,
            h: 450,
            LargePoster: {
              shader: {
                type: Lightning.shaders.RoundedRectangle,
                radius: 18
              }
            },
            PlayButton: (_PlayButton = {
              type: Button,
              y: 780,
              w: 90,
              h: 90,
              text: {
                fontSize: 24,
                text: 'Watch Now',
                lineHeight: 30
              },
              icon: 'images/play.png'
            }, _defineProperty(_PlayButton, "text", 'Watch Now'), _defineProperty(_PlayButton, "content", {
              w: 70,
              h: 70
            }), _PlayButton),
            Runtime: {
              y: 805,
              x: 120,
              text: {
                fontFace: 'Bold',
                fontSize: 32,
                lineHeight: 28
              }
            }
          },
          MoreInfo2: {
            alpha: 0.001,
            x: 230,
            y: 40,
            flex: {
              direction: 'column'
            },
            TitleInfo: {
              text: {
                fontFace: 'MediumItalic',
                fontSize: 32,
                lineHeight: 28
              }
            }
          }
        };
      }
    }]);

    return Detail;
  }(Lightning.Component);

  var Key = /*#__PURE__*/function (_BaseKey) {
    _inherits(Key, _BaseKey);

    var _super = _createSuper(Key);

    function Key() {
      _classCallCheck(this, Key);

      return _super.apply(this, arguments);
    }

    _createClass(Key, [{
      key: "_init",
      value: function _init() {
        this._focusAnimation = this.animation({
          duration: 0.2,
          actions: [{
            t: 'Focus',
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }, {
            t: 'Focus',
            p: 'h',
            v: {
              0: this.h,
              1: this.h + 10
            }
          }, {
            t: 'Focus',
            p: 'w',
            v: {
              0: this.w,
              1: this.w + 10
            }
          }, {
            t: 'Label',
            p: 'alpha',
            v: {
              0: 0.8,
              1: 1
            }
          }]
        });
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      },
      set: function set(obj) {
        this._data = obj;

        this._update();
      }
    }, {
      key: "_update",
      value: function _update() {
        if (!this.active) {
          return;
        }

        var label = this._data.label;
        this.patch({
          Label: {
            text: label
          }
        });
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this._update();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._focusAnimation.start();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focusAnimation.stop();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 0,
          h: 0,
          Focus: {
            alpha: 0,
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            },
            w: function w(_w) {
              return _w + 10;
            },
            h: function h(_h) {
              return _h + 10;
            },
            rect: true,
            colorBottom: Colors('focus2').get(),
            colorTop: Colors('focus').get(),
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              stroke: 7,
              strokeColor: 0xffffffff,
              fillColor: 0x00ffffff,
              radius: 22,
              blend: 1
            }
          },
          Label: {
            alpha: 0.8,
            mountX: 0.5,
            x: function x(w) {
              return w / 2;
            },
            color: Colors('white').get(),
            mountY: 0.42,
            y: function y(h) {
              return h / 2;
            },
            text: {
              fontFace: 'Regular',
              fontSize: 44
            }
          }
        };
      }
    }, {
      key: "width",
      get: function get() {
        return 80;
      }
    }, {
      key: "height",
      get: function get() {
        return 80;
      }
    }]);

    return Key;
  }(Key$1);
  var IconKey = /*#__PURE__*/function (_Key) {
    _inherits(IconKey, _Key);

    var _super2 = _createSuper(IconKey);

    function IconKey() {
      _classCallCheck(this, IconKey);

      return _super2.apply(this, arguments);
    }

    _createClass(IconKey, [{
      key: "_update",
      value: function _update() {//block parent update
      }
    }, {
      key: "icon",
      get: function get() {
        return this._icon;
      },
      set: function set(src) {
        this._icon = src;
        this.patch({
          Icon: {
            src: Utils.asset(this._icon)
          }
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Focus: {
            alpha: 0,
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            },
            w: function w(_w2) {
              return _w2 + 10;
            },
            h: function h(_h2) {
              return _h2 + 10;
            },
            rect: true,
            colorBottom: Colors('focus2').get(),
            colorTop: Colors('focus').get(),
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              stroke: 7,
              strokeColor: 0xffffffff,
              fillColor: 0x00ffffff,
              radius: 22,
              blend: 1
            }
          },
          Icon: {
            mount: 0.5,
            x: function x(w) {
              return w / 2;
            },
            y: function y(h) {
              return h / 2;
            }
          }
        };
      }
    }]);

    return IconKey;
  }(Key);

  var Dialog = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Dialog, _Lightning$Component);

    var _super = _createSuper(Dialog);

    function Dialog() {
      _classCallCheck(this, Dialog);

      return _super.apply(this, arguments);
    }

    _createClass(Dialog, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        this.transition('alpha').on('finish', function () {
          if (_this.alpha === 0) {
            _this.visible = false;
          }
        });

        this._blurContent();
      }
    }, {
      key: "_blurContent",
      value: function _blurContent() {
        var mirror = this.tag('FastBlur').content.tag('MirrorContent');
        mirror.texture = this.fireAncestors('$getAppContentTexture');
        mirror.texture.enableClipping(0, 0, 700, 480);
      }
    }, {
      key: "_handleKey",
      value: function _handleKey() {
        return true;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var index = this.tag('Buttons').index;
        var current = this._actions[index];

        if (!!(current && current.action && current.action.call && current.action.apply)) {
          current.action.call();
        }
      }
    }, {
      key: "open",
      value: function open(_ref) {
        var _this2 = this;

        var _ref$header = _ref.header,
            header = _ref$header === void 0 ? '' : _ref$header,
            _ref$message = _ref.message,
            message = _ref$message === void 0 ? '' : _ref$message,
            _ref$actions = _ref.actions,
            actions = _ref$actions === void 0 ? [] : _ref$actions;
        Router.focusWidget('Dialog');

        if (actions.length === 0) {
          actions.push({
            label: "Back",
            action: function action() {
              _this2.close();
            }
          });
        }

        this._actions = actions;
        this.patch({
          header: header,
          message: message,
          Wrapper: {
            Buttons: {
              items: actions.map(function (action) {
                return {
                  type: Key,
                  w: 170,
                  h: 80,
                  data: {
                    label: action.label
                  }
                };
              })
            }
          }
        });
        this.visible = true;
        this.setSmooth('alpha', 1);
      }
    }, {
      key: "close",
      value: function close() {
        this.tag('Buttons').clear();
        this.setSmooth('alpha', 0);
        Router.focusPage();
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Buttons');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          zIndex: 9,
          w: 1920,
          h: 1080,
          rect: true,
          color: Colors('black').alpha(0.8).get(),
          Background: {
            x: 610,
            y: 300,
            w: 700,
            h: 480,
            rtt: true,
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              radius: 22
            },
            FastBlur: {
              w: 700,
              h: 480,
              zIndex: 9,
              type: Lightning.components.FastBlurComponent,
              amount: 3,
              content: {
                MirrorContent: {
                  color: Colors('white').darker(0.4).get()
                }
              }
            }
          },
          Wrapper: {
            x: 610,
            y: 300,
            w: 700,
            h: 480,
            Labels: {
              w: 660,
              x: 350,
              y: 220,
              mountX: 0.5,
              mountY: 1,
              flex: {
                direction: 'column'
              },
              Header: {
                mountX: 0.5,
                x: function x(w) {
                  return w / 2;
                },
                text: {
                  text: this.bindProp('header'),
                  fontSize: 54,
                  fontFace: 'Regular'
                }
              },
              Message: {
                mountX: 0.5,
                x: function x(w) {
                  return w / 2;
                },
                y: 50,
                w: 620,
                color: Colors('white').alpha(0.65).get(),
                text: {
                  text: this.bindProp('message'),
                  wordWrap: true,
                  fontSize: 36,
                  lineHeight: 48,
                  textAlign: 'center',
                  fontFace: 'MediumItalic'
                }
              }
            },
            Buttons: {
              type: List,
              mountX: 0.5,
              y: 320,
              x: 350,
              spacing: 50,
              autoResize: true,
              direction: 'row',
              signals: {
                onItemsRepositioned: true
              }
            }
          }
        };
      }
    }]);

    return Dialog;
  }(Lightning.Component);

  var Menu = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Menu, _Lightning$Component);

    var _super = _createSuper(Menu);

    function Menu() {
      _classCallCheck(this, Menu);

      return _super.apply(this, arguments);
    }

    _createClass(Menu, [{
      key: "_blurContent",
      value: function _blurContent() {
        var mirror = this.tag('FastBlur').content.tag('MirrorContent');
        mirror.texture = this.fireAncestors('$getAppContentTexture');
        mirror.texture.enableClipping(0, 0, 140, 1080);
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this._items = ['home', 'search', 'close']; // 'movies', 'series',

        var items = this._items.map(function (item) {
          return {
            type: MenuItem,
            item: item,
            selected: false
          };
        });

        this.tag('List').add(items);

        this._blurContent();
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        var focus = this.tag('Focus');
        this._focusTransitionH = focus.transition('h');
        this._focusTransitionY = focus.transition('y');

        this._focusTransitionY.on('finish', function () {
          transition(_this._focusTransitionH, 100);
        });

        this._focusTransitionH.on('finish', function () {
          if (focus.h === 100) {
            _this._pivotAnimation(0.5);
          }
        });

        this._focusMenuAnimation = this.animation({
          duration: 0.3,
          actions: [{
            t: 'Focus.Lighting',
            p: 'shader.innerColor',
            v: {
              0: Colors('white').get(),
              1: Colors('focus').get()
            }
          }, {
            t: 'Focus.Lighting',
            p: 'shader.outerColor',
            v: {
              0: Colors('white').get(),
              1: Colors('focus2').get()
            }
          }, {
            t: 'RadialShadow',
            p: 'shader.radius',
            v: {
              0: 70,
              1: 1400
            }
          }]
        });
      }
    }, {
      key: "onIndexChanged",
      value: function onIndexChanged(_ref) {
        var _ref$previousIndex = _ref.previousIndex,
            previousIndex = _ref$previousIndex === void 0 ? this.tag('List').index : _ref$previousIndex,
            _ref$index = _ref.index,
            index = _ref$index === void 0 ? this._selectedIndex : _ref$index;

        if (this.active && previousIndex !== index) {
          this._navigatingDirection = previousIndex < index ? 1 : -1;
          var focus = this.tag('Focus');
          var targetMount = this._navigatingDirection > 0 ? 1 : 0;
          var mod = targetMount * 100;

          if (focus.mountY !== targetMount) {
            focus.mountY = targetMount;
            focus.y = focus.y + this._navigatingDirection * 100;
          }

          this._pivotAnimation(targetMount);

          this._navigatingTo = Menu.focusDefaultPosition + 130 * index + mod;

          if (this._focusTransitionH.targetValue !== 200) {
            transition(this._focusTransitionH, 200, 0.1);
          }

          transition(this._focusTransitionY, this._navigatingTo);
        }
      }
    }, {
      key: "_pivotAnimation",
      value: function _pivotAnimation(value) {
        if (value === this._pivotValue) {
          return;
        }

        this._anim = animation(this._anim, 'Focus', this, {
          duration: 0.3,
          actions: [{
            t: 'Lighting',
            p: 'shader.pivotY',
            v: {
              0: this.tag('Lighting').shader.pivotY,
              1: value
            }
          }]
        });
        this._pivotValue = value;
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        this.tag('Focus').animation({
          duration: 0.4,
          actions: [{
            p: 'mountY',
            v: {
              0.5: 1
            }
          }, {
            p: 'y',
            v: {
              0.5: this._focusTransitionY.targetValue + 100
            }
          }, {
            p: 'h',
            v: {
              0.5: 125,
              1: 100
            }
          }, {
            t: 'Lighting',
            p: 'shader.pivotY',
            v: {
              0: this.tag('Lighting').shader.pivotY,
              0.5: 0,
              1: 0.5
            }
          }]
        }).start();
        this._pivotValue = 0.5;
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        this.tag('Focus').animation({
          duration: 0.4,
          actions: [{
            p: 'mountY',
            v: {
              0.5: 0
            }
          }, {
            p: 'y',
            v: {
              0.5: this._focusTransitionY.targetValue - 100
            }
          }, {
            p: 'h',
            v: {
              0.5: 125,
              1: 100
            }
          }, {
            t: 'Lighting',
            p: 'shader.pivotY',
            v: {
              0: this.tag('Lighting').shader.pivotY,
              0.5: 1,
              1: 0.5
            }
          }]
        }).start();
        this._pivotValue = 0.5;
      }
    }, {
      key: "_handleKey",
      value: function _handleKey() {
        return true;
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        Router.focusPage();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._focusMenuAnimation.start();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focusMenuAnimation.stop();

        if (!Router.isNavigating()) {
          this.tag('List').setIndex(this._selectedIndex);
        }
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('List');
      }
    }, {
      key: "_onActivated",
      value: function _onActivated(page) {
        var list = this.tag('List');

        var currentRouteIndex = this._selectedIndex = this._items.indexOf(page[Router.symbols['route']]);

        list.items.forEach(function (item, index) {
          item.selected = index === currentRouteIndex;
        });
        list.setIndex(currentRouteIndex);

        if (!this.active) {
          transition(this._focusTransitionY, Menu.focusDefaultPosition + 130 * currentRouteIndex, 1);

          this._focusTransitionY.finish();
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          w: 140,
          h: 1080,
          Shadow: {
            x: 140,
            w: 110,
            h: 1080,
            rect: true,
            zIndex: 8,
            color: Colors('black').alpha(0.8).get(),
            shader: {
              type: Lightning.shaders.FadeOut,
              right: 110
            }
          },
          RadialShadow: {
            w: 1920,
            h: 1080,
            rect: true,
            color: 0x00ffffff,
            zIndex: 8,
            shader: {
              type: Lightning.shaders.RadialGradient,
              radius: 70,
              innerColor: Colors('black').alpha(0.8).get(),
              outerColor: Colors('white').alpha(0).get(),
              pivotX: 0,
              pivotY: 0.5
            }
          },
          Background: {
            FastBlur: {
              w: 140,
              h: 1080,
              zIndex: 9,
              type: Lightning.components.FastBlurComponent,
              amount: 3,
              content: {
                MirrorContent: {
                  color: Colors('white').darker(0.4).get()
                }
              }
            }
          },
          Focus: {
            zIndex: 10,
            x: function x(w) {
              return w;
            },
            mountX: 0.5,
            w: 14,
            h: 100,
            y: Menu.focusDefaultPosition,
            rtt: true,
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              radius: 7
            },
            transitions: {
              y: {
                duration: 0.2
              },
              h: {
                duration: 0.2
              }
            },
            Lighting: {
              w: function w(_w) {
                return _w;
              },
              h: function h(_h) {
                return _h;
              },
              rect: true,
              shader: {
                type: Lightning.shaders.RadialGradient,
                innerColor: Colors('white').get(),
                outerColor: Colors('white').get(),
                radius: 50,
                pivot: 0.5
              }
            }
          },
          List: {
            zIndex: 10,
            forceLoad: true,
            direction: 'column',
            y: 375,
            x: 20,
            w: 140,
            h: 620,
            type: List,
            signals: {
              onIndexChanged: true
            }
          }
        };
      }
    }, {
      key: "focusDefaultPosition",
      get: function get() {
        return 375;
      }
    }]);

    return Menu;
  }(Lightning.Component);

  var MenuItem = /*#__PURE__*/function (_Lightning$Component2) {
    _inherits(MenuItem, _Lightning$Component2);

    var _super2 = _createSuper(MenuItem);

    function MenuItem() {
      _classCallCheck(this, MenuItem);

      return _super2.apply(this, arguments);
    }

    _createClass(MenuItem, [{
      key: "_init",
      value: function _init() {
        this._updateFocusAnimation();
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.patch({
          Icon: {
            src: Utils.asset("images/".concat(this.item, ".png"))
          },
          Label: {
            text: this.item.charAt(0).toUpperCase() + this.item.slice(1)
          }
        });
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        if (this.item === 'close') {
          this.application.closeApp();
        } else {
          Router.navigate(this.item.toLowerCase());
        }
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._focusAnimation.start();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._focusAnimation.stop();
      }
    }, {
      key: "_updateFocusAnimation",
      value: function _updateFocusAnimation() {
        var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._selected;

        if (this._focusAnimation && this._focusAnimation.isActive()) {
          this._focusAnimation.stopNow();
        }

        this._focusAnimation = this.animation({
          duration: 0.2,
          actions: [{
            p: 'alpha',
            v: {
              0: bool ? 1 : 0.8,
              1: 1
            }
          }, {
            t: 'Label',
            p: 'alpha',
            v: {
              0: 0,
              1: 1
            }
          }, {
            t: 'Label',
            p: 'x',
            v: {
              0: 190,
              1: 170
            }
          }]
        });
      }
    }, {
      key: "selected",
      get: function get() {
        return this._selected;
      },
      set: function set(bool) {
        this._updateFocusAnimation(bool);

        this.alpha = bool ? 1 : 0.8;
        this._selected = bool;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0.8,
          Icon: {
            scale: 0.7
          },
          Label: {
            alpha: 0,
            x: 170,
            y: 50,
            mountY: 0.43,
            text: {
              fontFace: 'Medium',
              fontSize: 56
            }
          }
        };
      }
    }, {
      key: "marginBottom",
      get: function get() {
        return 30;
      }
    }, {
      key: "width",
      get: function get() {
        return 100;
      }
    }, {
      key: "height",
      get: function get() {
        return 100;
      }
    }]);

    return MenuItem;
  }(Lightning.Component);

  var InputField = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(InputField, _Lightning$Component);

    var _super = _createSuper(InputField);

    function InputField() {
      _classCallCheck(this, InputField);

      return _super.apply(this, arguments);
    }

    _createClass(InputField, [{
      key: "mirroredContent",
      get: function get() {
        return this.tag('FastBlur').content.tag('MirrorContent');
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this.mirroredContent.texture = this.fireAncestors('$getAppContentTexture');
        this.mirroredContent.texture.enableClipping(330, 140, 1590, 140);
      }
    }, {
      key: "_init",
      value: function _init() {
        this._minimize = this.animation({
          duration: 0.4,
          actions: [{
            p: 'positionX',
            v: {
              0: 330,
              0.5: 1330
            }
          }]
        });
      }
    }, {
      key: "input",
      get: function get() {
        return this.tag('Input');
      }
    }, {
      key: "maximize",
      value: function maximize() {
        if (!this._minized) {
          return;
        }

        this._minized = false;

        this._minimize.stop();

        this.tag('Input').cursor.show();
      }
    }, {
      key: "minimize",
      value: function minimize() {
        if (this._minized) {
          return;
        }

        this._minized = true;

        this._minimize.start();

        this.tag('Input').cursor.hide();
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.tag('Input').cursor.setSmooth('color', Colors('focus').get());
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Input');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          x: 330,
          y: 140,
          zIndex: 9,
          onPositionChanged: this.bindProp('positionX', function (comp) {
            if (comp.active) {
              comp.mirroredContent.x = 330 - comp.positionX;
              comp.x = comp.positionX;
            }

            return comp.positionX;
          }),
          positionX: 330,
          Background: {
            w: 1260,
            h: 140,
            rtt: true,
            shader: {
              type: Lightning.shaders.RoundedRectangle,
              radius: 22
            },
            FastBlur: {
              w: 1260,
              h: 140,
              zIndex: 9,
              type: Lightning.components.FastBlurComponent,
              amount: 3,
              content: {
                MirrorContent: {
                  color: Colors('white').darker(0.4).get()
                }
              }
            }
          },
          Labels: {
            Icon: {
              x: 70,
              y: 70,
              mount: 0.5,
              zIndex: 10,
              src: Utils.asset("images/search.png")
            },
            Input: {
              type: InputField$1,
              x: 140,
              y: 70,
              h: 54,
              mountY: 0.43,
              zIndex: 10,
              description: 'Search...',
              inputText: {
                fontFace: 'Regular',
                fontSize: 54
              },
              cursor: {
                y: 3,
                w: 7,
                h: 62,
                shader: {
                  type: Lightning.shaders.RoundedRectangle,
                  radius: 3
                }
              }
            }
          }
        };
      }
    }]);

    return InputField;
  }(Lightning.Component);

  var CutOut = /*#__PURE__*/function (_Lightning$shaders$We) {
    _inherits(CutOut, _Lightning$shaders$We);

    var _super = _createSuper(CutOut);

    function CutOut(ctx) {
      var _this;

      _classCallCheck(this, CutOut);

      _this = _super.call(this, ctx);
      _this._ic = 0xffffffff;
      _this._normalizedIC = _this._getNormalizedColor(_this._ic);
      _this._oc = 0xffffffff;
      _this._normalizedOC = _this._getNormalizedColor(_this._oc);
      return _this;
    }

    _createClass(CutOut, [{
      key: "innerColor",
      get: function get() {
        return this._ic;
      },
      set: function set(argb) {
        this._ic = argb;
        this._normalizedIC = this._getNormalizedColor(argb);
        this.redraw();
      }
    }, {
      key: "outerColor",
      get: function get() {
        return this._oc;
      },
      set: function set(argb) {
        this._oc = argb;
        this._normalizedOC = this._getNormalizedColor(argb);
        this.redraw();
      }
    }, {
      key: "_getNormalizedColor",
      value: function _getNormalizedColor(color) {
        var col = Lightning.StageUtils.getRgbaComponentsNormalized(color);
        col[0] *= col[3];
        col[1] *= col[3];
        col[2] *= col[3];
        return new Float32Array(col);
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(operation) {
        _get(_getPrototypeOf(CutOut.prototype), "setupUniforms", this).call(this, operation);

        this._setUniform('innerColor', this._normalizedIC, this.gl.uniform4fv);

        this._setUniform('outerColor', this._normalizedOC, this.gl.uniform4fv);
      }
    }]);

    return CutOut;
  }(Lightning.shaders.WebGLDefaultShader);
  CutOut.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec4 innerColor;\n    uniform vec4 outerColor;\n    void main(void){\n        vec4 tx = texture2D(uSampler, vTextureCoord) * vColor;\n        gl_FragColor = mix( outerColor * vColor, innerColor * vColor, tx.a);\n    }\n";

  var Splash = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Splash, _Lightning$Component);

    var _super = _createSuper(Splash);

    function Splash() {
      _classCallCheck(this, Splash);

      return _super.apply(this, arguments);
    }

    _createClass(Splash, [{
      key: "_init",
      value: function _init() {
        this._openAnimation = this.tag('CutOut').animation({
          duration: 1.4,
          actions: [{
            t: 'V',
            p: 'alpha',
            v: {
              0: 0,
              0.25: 1
            }
          }, {
            t: 'V',
            p: 'y',
            v: {
              0: 70,
              0.25: -20,
              0.35: 0
            }
          }, {
            t: 'O',
            p: 'alpha',
            v: {
              0.25: 0,
              0.5: 1
            }
          }, {
            t: 'O',
            p: 'y',
            v: {
              0.25: 70,
              0.5: -20,
              0.6: 0
            }
          }, {
            t: 'D',
            p: 'alpha',
            v: {
              0.5: 0,
              0.75: 1
            }
          }, {
            t: 'D',
            p: 'y',
            v: {
              0.5: 70,
              0.75: -20,
              0.85: 0
            }
          }, {
            t: 'ExampleApp',
            p: 'x',
            v: {
              0.6: 680,
              0.9: 815
            }
          }, {
            t: 'ExampleApp',
            p: 'alpha',
            v: {
              0.6: 0,
              0.9: 1
            }
          }, {
            p: 'shader.outerColor',
            v: {
              0.80: 0xffffffff,
              1: 0x00ffffff
            }
          }, {
            p: 'shader.innerColor',
            v: {
              0.80: 0x00ffffff,
              1: 0xffffffff
            }
          }]
        });

        this._openAnimation.on('finish', function () {
          setTimeout(function () {
            Router.resume();
          }, 1000);
        });
      }
    }, {
      key: "_active",
      value: function _active() {
        this.fireAncestors('$updateAmbientBackground', {
          color: 0xff9300e0
        });

        this._openAnimation.start();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          CutOut: {
            w: 1920,
            h: 1080,
            rtt: true,
            shader: {
              type: CutOut
            },
            Logo: {
              h: 270,
              w: 844,
              y: 480,
              x: 960,
              mount: 0.5,
              V: {
                y: 70,
                src: Utils.asset('images/logo/v.png')
              },
              O: {
                y: 70,
                x: 276,
                src: Utils.asset('images/logo/o.png')
              },
              D: {
                y: 70,
                x: 576,
                src: Utils.asset('images/logo/d.png')
              }
            },
            ExampleApp: {
              x: 815,
              y: 655,
              src: Utils.asset('images/logo/example-app.png')
            }
          }
        };
      }
    }]);

    return Splash;
  }(Lightning.Component);

  var Main = /*#__PURE__*/function (_Page) {
    _inherits(Main, _Page);

    var _super = _createSuper(Main);

    function Main() {
      _classCallCheck(this, Main);

      return _super.apply(this, arguments);
    }

    _createClass(Main, [{
      key: "pageTransition",
      value: function pageTransition(pageIn, pageOut) {
        var menu = pageIn.widgets.menu;

        if (menu.alpha !== 1) {
          menu.visible = true;
          menu.alpha = 0.001;
          menu.setSmooth('alpha', 1, {
            delay: 0.2,
            duration: 0.2
          });
        }

        return _get(_getPrototypeOf(Main.prototype), "pageTransition", this).call(this, pageIn, pageOut);
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('Content');
      }
    }, {
      key: "$updateItemTitle",
      value: function $updateItemTitle(e) {
        this.tag('ItemDescription').item = e;
      }
    }, {
      key: "addStrips",
      value: function addStrips(array) {
        if (this._hasData) {
          return;
        }

        this._hasData = true;
        var content = this.tag('Content');
        content.add(array);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        Router.focusWidget('Menu');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Content: {
            x: 140,
            type: List,
            w: function w(_w) {
              return _w;
            },
            y: 580,
            h: 500,
            direction: 'column',
            scroll: 0,
            scrollTransition: {
              duration: 0.4
            }
          }
        };
      }
    }]);

    return Main;
  }(Page);

  var keyboardConfig = {
    layouts: {
      'ABC': [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'], ['Layout:123', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Space', 'Backspace']],
      '123': [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['Layout:ABC', 'Space', 'Backspace']]
    },
    styling: {
      align: 'center',
      horizontalSpacing: 15,
      verticalSpacing: 20
    },
    buttonTypes: {
      default: {
        type: Key
      },
      Layout: {
        type: Key,
        w: 110
      },
      Backspace: {
        type: IconKey,
        icon: '/images/backspace.png'
      },
      Space: {
        type: IconKey,
        w: 110,
        icon: '/images/space.png'
      }
    }
  };

  var Search = /*#__PURE__*/function (_Page) {
    _inherits(Search, _Page);

    var _super = _createSuper(Search);

    function Search() {
      _classCallCheck(this, Search);

      return _super.apply(this, arguments);
    }

    _createClass(Search, [{
      key: "pageTransition",
      value: function pageTransition(pageIn, pageOut) {
        //hide menu widget
        pageIn.widgets.menu.setSmooth('alpha', 0, {
          delay: 0.0,
          duration: 0.2
        });
        var inputfield = pageIn.widgets.inputfield; //show inputfield widget if not visible

        if (inputfield.alpha !== 1) {
          inputfield.visible = true;
          inputfield.alpha = 0.001;
          inputfield.setSmooth('alpha', 1, {
            delay: 0.2,
            duration: 0.2
          });
        } //fire super


        return _get(_getPrototypeOf(Search.prototype), "pageTransition", this).call(this, pageIn, pageOut);
      }
    }, {
      key: "onInputChanged",
      value: function onInputChanged(_ref) {
        var input = _ref.input;
        //hide grid when input has changed
        var grid = this.tag('Content');
        grid.setSmooth('alpha', 0.001); //if input length is 0 clear timeout else start search timeout

        if (input.length === 0) {
          this._clearSearchTimeout();
        } else {
          this._startSearchTimeout();
        } //store input value to be used when search timeout is fired


        this._input = input;
      }
    }, {
      key: "_setup",
      value: function _setup() {
        //connect inputfield widget with keyboard
        this.tag('Keyboard').inputField(this.widgets.inputfield.input);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        //when active for the first time focus keyboard
        this._setState('Keyboard');
      }
    }, {
      key: "_startSearchTimeout",
      value: function _startSearchTimeout() {
        var _this = this;

        this._clearSearchTimeout(); //after 600 ms fire _doSearch


        this._searchTimeout = setTimeout(function () {
          _this._doSearch();
        }, 600);
      }
    }, {
      key: "_clearSearchTimeout",
      value: function _clearSearchTimeout() {
        if (this._searchTimeout) {
          clearTimeout(this._searchTimeout);
        }
      }
    }, {
      key: "_doSearch",
      value: function _doSearch() {
        var _this$onSearch,
            _this$onSearch$apply,
            _this2 = this;

        //if onSearch exists and is a function, execute function and handle results
        if (this._input.length <= 4) return;

        if ((_this$onSearch = this.onSearch) !== null && _this$onSearch !== void 0 && (_this$onSearch$apply = _this$onSearch.apply) !== null && _this$onSearch$apply !== void 0 && _this$onSearch$apply.call) {
          this.onSearch(this._input).then(function (response) {
            //clear grid of current items
            var grid = _this2.tag('Content');

            grid.clear(); //when response data length is bigger than 0 add them to grid

            if (response.length > 0) {
              grid.add(response);
              grid.setSmooth('alpha', 1, {
                delay: 0.2
              });
            }
          });
        }
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this3 = this;

        var grid = this.tag('Content');
        this._focusTransitionY = grid.transition('y');
        grid.transition('alpha').on('finish', function () {
          if (grid.alpha === 0.001 && _this3._input.length === 0) {
            grid.clear();
          }
        });
        this._hideKeyboard = this.tag('Keyboard').animation({
          duration: 0.4,
          actions: [{
            p: 'x',
            v: {
              0: 960,
              0.5: 1000
            }
          }, {
            p: 'alpha',
            v: {
              0: 1,
              0.5: 0
            }
          }]
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Keyboard: {
            mountX: 0.5,
            y: 330,
            x: 960,
            w: 935,
            type: Keyboard,
            currentLayout: 'ABC',
            config: keyboardConfig,
            signals: {
              onInputChanged: true
            }
          },
          Content: {
            alpha: 0.001,
            y: 90,
            mountX: 0.5,
            x: 960,
            type: SearchGrid,
            w: 1535,
            h: 1080,
            columns: 7,
            scroll: 640,
            scrollTransition: {
              duration: 0.4
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this4) {
          _inherits(Keyboard, _this4);

          var _super2 = _createSuper(Keyboard);

          function Keyboard() {
            _classCallCheck(this, Keyboard);

            return _super2.apply(this, arguments);
          }

          _createClass(Keyboard, [{
            key: "$enter",
            value: function $enter() {
              this.fireAncestors('$updateBackdrop', {
                src: null
              });
              this.fireAncestors('$updateAmbientBackground', {
                color: 0xff9300e0
              });

              this._hideKeyboard.stop();

              this.widgets.inputfield.maximize();
              this.widgets.detail.setSmooth('alpha', 0.001, {
                duration: 0.2,
                delay: 0
              });
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._hideKeyboard.start();

              this.widgets.inputfield.minimize();
              this.widgets.detail.setSmooth('alpha', 1, {
                duration: 0.2,
                delay: 0.2
              });
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('Keyboard');
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              Router.focusWidget('InputField');
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              if (this.tag('Content').hasItems) {
                this._setState('Grid');
              }
            }
          }]);

          return Keyboard;
        }(this), /*#__PURE__*/function (_this5) {
          _inherits(Grid, _this5);

          var _super3 = _createSuper(Grid);

          function Grid() {
            _classCallCheck(this, Grid);

            return _super3.apply(this, arguments);
          }

          _createClass(Grid, [{
            key: "$enter",
            value: function $enter() {
              transition(this._focusTransitionY, 0);
            }
          }, {
            key: "$exit",
            value: function $exit() {
              transition(this._focusTransitionY, 90);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag('Content');
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              this._setState('Keyboard');
            }
          }]);

          return Grid;
        }(this)];
      }
    }]);

    return Search;
  }(Page);

  var SearchGrid = /*#__PURE__*/function (_Grid) {
    _inherits(SearchGrid, _Grid);

    var _super4 = _createSuper(SearchGrid);

    function SearchGrid() {
      _classCallCheck(this, SearchGrid);

      return _super4.apply(this, arguments);
    }

    _createClass(SearchGrid, [{
      key: "_indexChanged",
      value: function _indexChanged(event) {
        var _this6 = this;

        _get(_getPrototypeOf(SearchGrid.prototype), "_indexChanged", this).call(this, event);

        this._lines.forEach(function (line, lineIndex) {
          line.forEach(function (wrapper) {
            _this6.itemWrappers[wrapper].setSmooth('alpha', lineIndex < event.mainIndex ? 0.001 : 1);
          });
        });
      }
    }]);

    return SearchGrid;
  }(Grid);

  var Detail = /*#__PURE__*/function (_Page) {
    _inherits(Detail, _Page);

    var _super = _createSuper(Detail);

    function Detail() {
      _classCallCheck(this, Detail);

      return _super.apply(this, arguments);
    }

    _createClass(Detail, [{
      key: "pageTransition",
      value: function pageTransition(pageIn, pageOut) {
        pageIn.widgets.menu.setSmooth('alpha', 0, {
          delay: 0.0,
          duration: 0.2
        });
        pageIn.widgets.inputfield.setSmooth('alpha', 0, {
          delay: 0.0,
          duration: 0.2
        });
        pageIn.widgets.detail.setSmooth('alpha', 1, {
          delay: 0.2,
          duration: 0.2
        });
        return _get(_getPrototypeOf(Detail.prototype), "pageTransition", this).call(this, pageIn, pageOut);
      }
    }, {
      key: "_active",
      value: function _active() {
        Router.focusWidget('detail');
      }
    }]);

    return Detail;
  }(Page);

  var Player = /*#__PURE__*/function (_Page) {
    _inherits(Player, _Page);

    var _super = _createSuper(Player);

    function Player() {
      _classCallCheck(this, Player);

      return _super.apply(this, arguments);
    }

    _createClass(Player, [{
      key: "pageTransition",
      value: function pageTransition(pageIn, pageOut) {
        var widgets = pageIn.widgets; //hide all widgets in app;

        for (var key in widgets) {
          widgets[key].setSmooth('alpha', 0, {
            delay: 0.0,
            duration: 0.2
          });
        } //fire super


        return _get(_getPrototypeOf(Player.prototype), "pageTransition", this).call(this, pageIn, pageOut);
      }
    }, {
      key: "setData",
      value: function setData(data) {
        this._data = data;

        this._update();

        this.movieId = data.id;

        if (!data.videoUrl) {
          // Router.back()
          this.showError('Video MP4 File Not Found');
          return;
        }

        this.initializeVideo(data.videoUrl);
      }
    }, {
      key: "showError",
      value: function showError(message) {
        var dialog = this.tag('Dialog');
        dialog.open({
          header: "Error!",
          message: message
        });
        setTimeout(function () {
          dialog.close();
          Router.back();
        }, 3000);
      }
    }, {
      key: "_setup",
      value: function _setup() {
        var _this = this;

        //map player buttons
        var buttons = ['previous', 'play', 'next'].map(function (icon) {
          return {
            type: IconKey,
            w: 110,
            h: 110,
            icon: "images/".concat(icon, ".png"),
            action: icon
          };
        }); //playerButtons list

        var playerButtons = this.tag('PlayerButtons'); //add mapped player buttons

        playerButtons.add(buttons); //force playerButtons list index to 1

        playerButtons.index = 1; //use the animation functinality to fake playback replace the following events with player events

        this._progressAnimation = this.animation({
          duration: 60,
          repeat: -1,
          actions: []
        });

        this._progressAnimation.on('progress', function () {
          var currentTime = VideoPlayer.currentTime,
              duration = VideoPlayer.duration;

          var w = _this.tag('Progressbar').w;

          _this.tag('Troth').w = w * (currentTime / duration);
        }); //When the asset is starting


        this._progressAnimation.on('start', function () {
          _this._showOverlay();

          _this._startOverlayTimeout();

          _this._updatePlayButton(false);

          _this._hideScreenBlock();
        }); //This event should be fired when the play event is fired. resume == play


        this._progressAnimation.on('resume', function () {
          _this._startOverlayTimeout();

          _this._updatePlayButton(false);
        }); //this event should be fired when the pause event is fired.


        this._progressAnimation.on('pause', function () {
          _this._updatePlayButton(true);
        }); //this event should be fired when the stop event is fired.


        this._progressAnimation.on('stop', function (p) {
          _this._showOverlay();

          _this._showScreenBlock();
        });

        this.tag('Placeholder').on('txLoaded', function () {
          _this.tag('Placeholder').setSmooth('alpha', 1, {
            duration: 0.1
          });

          _this._progressAnimation.start();
        });
        var blackAlpha = Colors('black').alpha(0.3).get(); //create overlay hide animation

        this._hideControls = this.animation({
          duration: 0.2,
          stopMethod: 'reverse',
          actions: [{
            t: 'Top',
            p: 'alpha',
            v: {
              0: 1,
              1: 0
            }
          }, {
            t: 'Top',
            p: 'colorBottom',
            v: {
              0: blackAlpha,
              1: 0x00000000
            }
          }, {
            t: 'Title',
            p: 'y',
            v: {
              0: 90,
              1: 50
            }
          }, {
            t: 'Title',
            p: 'alpha',
            v: {
              0: 1,
              1: 0
            }
          }, {
            t: 'Bottom',
            p: 'alpha',
            v: {
              0: 1,
              1: 0
            }
          }, {
            t: 'Bottom',
            p: 'colorTop',
            v: {
              0: blackAlpha,
              1: 0x00000000
            }
          }, {
            t: 'Progressbar',
            p: 'y',
            v: {
              0: 830,
              1: 870
            }
          }, {
            t: 'Progressbar',
            p: 'alpha',
            v: {
              0: 1,
              1: 0
            }
          }, {
            t: 'PlayerButtons',
            p: 'y',
            v: {
              0: 890,
              1: 930
            }
          }, {
            t: 'PlayerButtons',
            p: 'alpha',
            v: {
              0: 1,
              1: 0
            }
          }]
        });

        this._hideControls.on('stopFinish', function () {
          //when controls are visible try hiding after delay
          _this._startOverlayTimeout();
        });
      }
    }, {
      key: "_showOverlay",
      value: function _showOverlay() {
        //show controls.
        this._hideControls.stop();
      }
    }, {
      key: "_startOverlayTimeout",
      value: function _startOverlayTimeout() {
        var _this2 = this;

        this._clearOverlayTimeout(); //create timeout for 3000 ms


        this._overlayTimeout = setTimeout(function () {
          //if active and player is progressing (player is playing)
          if (_this2.active && _this2._progressAnimation.isActive()) {
            _this2._hideControls.start();
          }
        }, 3000);
      }
    }, {
      key: "_clearOverlayTimeout",
      value: function _clearOverlayTimeout() {
        if (this._overlayTimeout) {
          clearTimeout(this._overlayTimeout);
        }
      }
    }, {
      key: "_update",
      value: function _update() {// //if not active or no data dont update
        // if(!this.active || !this._data) {
        //     return;
        // }
        // const {title, backdrop} = this._data;
        // this.patch({
        //     Placeholder: {texture: Img(backdrop).contain(1920, 1080)},
        //     Title: {text: title}
        // });
      }
    }, {
      key: "_showScreenBlock",
      value: function _showScreenBlock() {
        this.tag('ScreenBlock').alpha = 1;
      }
    }, {
      key: "_hideScreenBlock",
      value: function _hideScreenBlock() {
        this.tag('ScreenBlock').alpha = 0;
      }
    }, {
      key: "_updatePlayButton",
      value: function _updatePlayButton() {
        var toPlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        //update play pause buttong to play icon when toPlay is true.
        this.tag('PlayerButtons').items[1].icon = "images/".concat(toPlay ? 'play' : 'pause', ".png");

        if (!toPlay) {
          this._startOverlayTimeout();
        }
      }
    }, {
      key: "$videoPlayerPlaying",
      value: function $videoPlayerPlaying() {
        this._hideScreenBlock();

        this._updatePlayButton(false);

        this._progressAnimation.play();
      }
    }, {
      key: "formatTime",
      value: function formatTime(seconds) {
        if (!seconds) {
          return '00:00:00';
        }

        return new Date(seconds * 1000).toISOString().slice(11, -5);
      } // this will be invoked on timeupdate

    }, {
      key: "$videoPlayerTimeUpdate",
      value: function $videoPlayerTimeUpdate(_, currentTime) {
        var formattedCurrentTime = this.formatTime(currentTime);
        var formattedTimeLeft = this.formatTime(VideoPlayer.duration - currentTime);
        this.tag('CurrentTime').text = formattedCurrentTime;
        this.tag('TimeLeft').text = formattedTimeLeft;
      } // this will be invoked when the video ends

    }, {
      key: "$videoPlayerEnded",
      value: function $videoPlayerEnded() {} // this will be invoked when the video starts playing

    }, {
      key: "$videoPlayerPlay",
      value: function $videoPlayerPlay() {} // this will be invoked when the video pauses

    }, {
      key: "$videoPlayerPause",
      value: function $videoPlayerPause() {} // this will be invoked when the video stops

    }, {
      key: "$videoPlayerStop",
      value: function $videoPlayerStop() {} // this will be invoked when the video raises an error

    }, {
      key: "$videoPlayerError",
      value: function $videoPlayerError() {}
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        var currentButton = this.tag('PlayerButtons').currentItem;

        switch (currentButton.action) {
          case 'play':
            if (this._progressAnimation.isActive()) {
              this._progressAnimation.pause();

              VideoPlayer.pause();
            } else {
              this._progressAnimation.play();

              VideoPlayer.play();
            }

            break;

          case 'next':
            VideoPlayer.skip(30);
            break;

          case 'previous':
            VideoPlayer.skip(-30);
            break;
        }
      }
    }, {
      key: "_captureKey",
      value: function _captureKey() {
        if (this._hideControls.p !== 0) {
          this._showOverlay();
        }

        return false;
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {// this._update();
        // this.tag('Loader').start();
      }
    }, {
      key: "initializeVideo",
      value: function initializeVideo(videoUrl) {
        VideoPlayer._videoEl.style.backgroundColor = 'black';
        VideoPlayer.consumer(this);
        VideoPlayer.open(videoUrl);
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        _get(_getPrototypeOf(Player.prototype), "_inactive", this).call(this); //stop fake media progress


        this._progressAnimation.stopNow(); //show controls instantly reverting it to starting point


        this._hideControls.stopNow();

        VideoPlayer.close(); //playback placeholder remove from code when implementing player

        this.tag('Placeholder').alpha = 0.001;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('PlayerButtons');
      }
    }, {
      key: "hideBackground",
      get: function get() {
        return true;
      }
    }, {
      key: "_handleBack",
      value: function _handleBack() {
        destroyMovieTorrent(this.params.mediaId).then(function (data) {
          console.log(data);
        });
        var navCheck = Router.isNavigating();

        if (navCheck) {
          return true;
        }

        return false;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Dialog: {
            visible: false,
            type: Dialog,
            zIndex: 101
          },
          Placeholder: {
            alpha: 0.001,
            w: 1920,
            h: 1080
          },
          ScreenBlock: {
            w: 1920,
            h: 1080,
            rect: true,
            color: Colors('black').get()
          },
          Overlay: {
            Top: {
              rect: true,
              w: 1920,
              h: 540,
              colorBottom: Colors('black').alpha(0.3).get(),
              colorTop: Colors('black').alpha(0.85).get()
            },
            Bottom: {
              rect: true,
              w: 1920,
              h: 540,
              mountY: 1,
              y: 1080,
              colorTop: Colors('black').alpha(0.3).get(),
              colorBottom: Colors('black').alpha(0.85).get()
            }
          },
          Title: {
            x: 230,
            y: 90,
            w: 1060,
            text: {
              fontFace: 'Bold',
              wrap: true,
              fontSize: 74,
              lineHeight: 88
            }
          },
          PlayerButtons: {
            y: 890,
            x: 960,
            mountX: 0.5,
            type: List,
            autoResize: true,
            spacing: 50,
            forceLoad: true
          },
          Progressbar: {
            y: 830,
            x: 960,
            w: 1620,
            h: 8,
            mountX: 0.5,
            Frame: {
              w: function w(_w) {
                return _w;
              },
              h: function h(_h) {
                return _h;
              },
              rect: true,
              alpha: 0.7,
              shader: {
                type: Lightning.shaders.RoundedRectangle,
                radius: 2
              }
            },
            Troth: {
              mountY: 0.5,
              y: 4,
              x: -10,
              w: 20,
              h: 20,
              rect: true,
              shader: {
                type: Lightning.shaders.RoundedRectangle,
                radius: 10
              }
            },
            TimeLeft: {
              mountX: 1,
              x: 1620,
              y: 20,
              text: {
                fontSize: 24,
                text: '1:20:30',
                lineHeight: 30
              }
            },
            CurrentTime: {
              mountX: 1,
              x: 75,
              y: 20,
              text: {
                fontSize: 24,
                text: '00:00:00',
                lineHeight: 30
              }
            }
          }
        };
      }
    }]);

    return Player;
  }(Page);

  var createPageComponents = function createPageComponents(strips) {
    return strips.map(function (_ref) {
      var title = _ref.title,
          media_type = _ref.media_type,
          items = _ref.items;
      return {
        type: Strip,
        itemType: Item,
        h: Item.height + 80,
        title: title,
        index: 0,
        items: createItemCollection(items, media_type)
      };
    });
  };
  var createItemCollection = function createItemCollection(items) {
    var media_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tv';
    console.log({
      items: items
    });
    return items.map(function (item) {
      return {
        item: applyItemModel(_objectSpread2({
          media_type: media_type
        }, item))
      };
    });
  };
  var applyItemModel = function applyItemModel(item) {
    var id = item.id,
        title = item.title,
        name = item.name,
        _item$media_type = item.media_type,
        media_type = _item$media_type === void 0 ? 'tv' : _item$media_type,
        number_of_episodes = item.number_of_episodes,
        number_of_seasons = item.number_of_seasons,
        genres = item.genres,
        runtime = item.runtime,
        description = item.description,
        _item$images = item.images,
        posterUrl = _item$images.posterUrl,
        bannerUrl = _item$images.bannerUrl;
        _item$images.fanartUrl;
    return {
      id: id,
      media_type: media_type,
      number_of_episodes: number_of_episodes,
      number_of_seasons: number_of_seasons,
      genres: genres,
      runtime: runtime,
      title: media_type === 'tv' ? name : title,
      description: description,
      poster: posterUrl,
      large_poster: posterUrl,
      backdrop: bannerUrl
    };
  };
  var applyPlayerModel = function applyPlayerModel(item) {
    return _objectSpread2({}, item);
  };

  var routes = [{
    path: 'home',
    component: Main,
    on: function () {
      var _on = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getHomePage().then(function (response) {
                  console.log({
                    response: response
                  });
                  page.addStrips(createPageComponents(response));
                  return true;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function on(_x) {
        return _on.apply(this, arguments);
      }

      return on;
    }(),
    widgets: ['menu', 'detail']
  }, // {
  //     path: 'movies',
  //     component: Main,
  //     on: async (page) => {
  //         getMoviesPage()
  //             .then((response) => {
  //                 page.addStrips(createPageComponents(response));
  //                 return true;
  //             })
  //     },
  //     widgets: ['menu', 'detail']
  // },
  // {
  //     path: 'series',
  //     component: Main,
  //     on: async (page) => {
  //         getSeriesPage()
  //             .then((response) => {
  //                 page.addStrips(createPageComponents(response));
  //                 return true;
  //             })
  //     },
  //     widgets: ['menu', 'detail']
  // },
  _defineProperty({
    path: 'search',
    component: Search,
    widgets: ['inputfield'],
    on: function () {
      var _on2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page.tag('Content').itemType = Item;

                page.onSearch = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            return _context2.abrupt("return", getSearchResults(input).then(function (response) {
                              return createItemCollection(response, 'movie');
                            }));

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3) {
                    return _ref.apply(this, arguments);
                  };
                }();

                return _context3.abrupt("return", true);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function on(_x2) {
        return _on2.apply(this, arguments);
      }

      return on;
    }()
  }, "widgets", ['inputfield', 'detail']), {
    path: 'detail/:mediaType/:mediaId',
    component: Detail,
    before: function () {
      var _before = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(page, _ref3) {
        var mediaType, mediaId;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                mediaType = _ref3.mediaType, mediaId = _ref3.mediaId;
                getDetailPage(mediaType, mediaId).then(function (response) {
                  var dataItem = applyItemModel(response);
                  page.widgets.detail.show(dataItem);
                  page.widgets.detail.showMore(dataItem);
                  return true;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function before(_x4, _x5) {
        return _before.apply(this, arguments);
      }

      return before;
    }(),
    widgets: ['detail']
  }, {
    path: 'player/:mediaType/:mediaId',
    component: Player,
    before: function () {
      var _before2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(page, _ref4) {
        var mediaType, mediaId;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                mediaType = _ref4.mediaType, mediaId = _ref4.mediaId;
                getVideo(mediaType, mediaId).then(function (response) {
                  var dataItem = applyPlayerModel(response);
                  page.setData(dataItem);
                  return true;
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function before(_x6, _x7) {
        return _before2.apply(this, arguments);
      }

      return before;
    }(),
    widgets: ['dialog']
  }, {
    path: '$',
    component: Splash
  }];
  var routerConfig = {
    root: routes[0].path,
    routes: routes
  };

  var App = /*#__PURE__*/function (_Router$App) {
    _inherits(App, _Router$App);

    var _super = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super.apply(this, arguments);
    }

    _createClass(App, [{
      key: "_handleAppClose",
      value: function _handleAppClose() {
        var _this = this;

        var dialog = this.tag('Dialog');
        dialog.open({
          header: "Closing App?!",
          message: "Are you sure you want to close the app?",
          actions: [{
            label: 'No',
            action: function action() {
              dialog.close();
            }
          }, {
            label: 'Yes',
            action: function action() {
              _this.application.closeApp();
            }
          }]
        });
      }
    }, {
      key: "$getDetailWidget",
      value: function $getDetailWidget() {
        return this.tag('Widgets.Detail');
      }
    }, {
      key: "$getAppContentTexture",
      value: function $getAppContentTexture() {
        return this.tag('Content').getTexture();
      }
    }, {
      key: "$updateBackdrop",
      value: function $updateBackdrop(e) {
        this.tag('Backdrop').update(e.id);
      }
    }, {
      key: "$updateAmbientBackground",
      value: function $updateAmbientBackground(e) {
        this.tag('AmbientBackground').update(e.color);
      }
    }, {
      key: "$hideBackground",
      value: function $hideBackground() {
        this.tag('Content').patch({
          AmbientBackground: {
            smooth: {
              alpha: [0, {
                duration: 0.2,
                delay: 0.0
              }]
            }
          },
          Backdrop: {
            smooth: {
              alpha: [0, {
                duration: 0.2,
                delay: 0.0
              }]
            }
          }
        });
      }
    }, {
      key: "$showBackground",
      value: function $showBackground() {
        this.tag('Content').patch({
          AmbientBackground: {
            smooth: {
              alpha: [1, {
                duration: 0.2,
                delay: 0.2
              }]
            }
          },
          Backdrop: {
            smooth: {
              alpha: [1, {
                duration: 0.2,
                delay: 0.2
              }]
            }
          }
        });
      }
    }, {
      key: "_setup",
      value: function _setup() {
        Router.startRouter(routerConfig, this);
      }
    }], [{
      key: "getFonts",
      value: function getFonts() {
        return [{
          family: 'Regular',
          url: Utils.asset('fonts/Montserrat-Regular.ttf')
        }, {
          family: 'Medium',
          url: Utils.asset('fonts/Montserrat-Medium.ttf')
        }, {
          family: 'Bold',
          url: Utils.asset('fonts/Montserrat-Bold.ttf')
        }, {
          family: 'MediumItalic',
          url: Utils.asset('fonts/Montserrat-MediumItalic.ttf')
        }];
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Content: {
            zIndex: 1,
            rtt: true,
            w: 1920,
            h: 1080,
            AmbientBackground: {
              type: AmbientBackground
            },
            Backdrop: {
              type: Backdrop
            },
            Pages: {
              forceZIndexContext: true
            }
          },
          Loading: {},
          Widgets: {
            Menu: {
              type: Menu,
              visible: true
            },
            InputField: {
              type: InputField,
              visible: true
            },
            Detail: {
              type: Detail$1,
              visible: true
            },
            Dialog: {
              visible: false,
              type: Dialog,
              zIndex: 101
            }
          }
        };
      }
    }, {
      key: "colors",
      value: function colors() {
        return true;
      }
    }]);

    return App;
  }(Router.App);

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
  function index () {
    return Launch.apply(void 0, [App].concat(Array.prototype.slice.call(arguments)));
  }

  return index;

})();
