// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lUMqH":[function(require,module,exports) {
var _asyncToGenerator = require("@swc/helpers/_/_async_to_generator");
var _toConsumableArray = require("@swc/helpers/_/_to_consumable_array");
var _tsGenerator = require("@swc/helpers/_/_ts_generator");
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "034ba94d06c9fc6e";
module.bundle.HMR_BUNDLE_ID = "211937e84366bd9f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = function() {
        var _ref = (0, _asyncToGenerator._)(function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */ , assets, handled, processedAssets, i, id, i1, id1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ansiDiagnostic, stack, overlay;
            return (0, _tsGenerator._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        checkedAssets = {} /*: {|[string]: boolean|} */ ;
                        assetsToAccept = [];
                        assetsToDispose = [];
                        data = JSON.parse(event.data);
                        if (!(data.type === "update")) return [
                            3,
                            3
                        ];
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        assets = data.assets.filter(function(asset) {
                            return asset.envHash === HMR_ENV_HASH;
                        });
                        // Handle HMR Update
                        handled = assets.every(function(asset) {
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (!handled) return [
                            3,
                            2
                        ];
                        console.clear();
                        // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                        if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                        return [
                            4,
                            hmrApplyUpdates(assets)
                        ];
                    case 1:
                        _state.sent();
                        // Dispose all old assets.
                        processedAssets = {} /*: {|[string]: boolean|} */ ;
                        for(i = 0; i < assetsToDispose.length; i++){
                            id = assetsToDispose[i][1];
                            if (!processedAssets[id]) {
                                hmrDispose(assetsToDispose[i][0], id);
                                processedAssets[id] = true;
                            }
                        }
                        // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                        processedAssets = {};
                        for(i1 = 0; i1 < assetsToAccept.length; i1++){
                            id1 = assetsToAccept[i1][1];
                            if (!processedAssets[id1]) {
                                hmrAccept(assetsToAccept[i1][0], id1);
                                processedAssets[id1] = true;
                            }
                        }
                        return [
                            3,
                            3
                        ];
                    case 2:
                        fullReload();
                        _state.label = 3;
                    case 3:
                        if (data.type === "error") {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                // Log parcel errors to console
                                for(_iterator = data.diagnostics.ansi[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    ansiDiagnostic = _step.value;
                                    stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                                    console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            if (typeof document !== "undefined") {
                                // Render the fancy html overlay
                                removeErrorOverlay();
                                overlay = createErrorOverlay(data.diagnostics.html);
                                // $FlowFixMe
                                document.body.appendChild(overlay);
                            }
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(event) {
            return _ref.apply(this, arguments);
        };
    }();
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var diagnostic = _step.value;
            var stack = diagnostic.frames.length ? diagnostic.frames.reduce(function(p, frame) {
                return "".concat(p, '\n<a href="/__parcel_launch_editor?file=').concat(encodeURIComponent(frame.location), '" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">').concat(frame.location, "</a>\n").concat(frame.code);
            }, "") : diagnostic.stack;
            errorHTML += '\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          \uD83D\uDEA8 '.concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return "<div>\uD83D\uDCA1 " + hint + "</div>";
            }).join(""), "\n        </div>\n        ").concat(diagnostic.documentation ? '<div>\uD83D\uDCDD <a style="color: violet" href="'.concat(diagnostic.documentation, '" target="_blank">Learn more</a></div>') : "", "\n      </div>\n    ");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            var script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise(function(resolve, reject) {
                var _document$head;
                script.onload = function() {
                    return resolve(script);
                };
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise(function(resolve, reject) {
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
function hmrApplyUpdates(assets) {
    return _hmrApplyUpdates.apply(this, arguments);
}
function _hmrApplyUpdates() {
    _hmrApplyUpdates = (0, _asyncToGenerator._)(function(assets) {
        var scriptsToRemove, promises;
        return (0, _tsGenerator._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    global.parcelHotUpdate = Object.create(null);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        4,
                        5
                    ]);
                    if (!!supportsSourceURL) return [
                        3,
                        3
                    ];
                    promises = assets.map(function(asset) {
                        var _hmrDownload;
                        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch(function(err) {
                            // Web extension fix
                            if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                                extCtx.runtime.reload();
                                return;
                            }
                            throw err;
                        });
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 2:
                    scriptsToRemove = _state.sent();
                    _state.label = 3;
                case 3:
                    assets.forEach(function(asset) {
                        hmrApply(module.bundle.root, asset);
                    });
                    return [
                        3,
                        5
                    ];
                case 4:
                    delete global.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach(function(script) {
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                    return [
                        7
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _hmrApplyUpdates.apply(this, arguments);
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            var fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            var _parents;
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            (_parents = parents).push.apply(_parents, (0, _toConsumableArray._)(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{"@swc/helpers/_/_async_to_generator":"5mBn2","@swc/helpers/_/_to_consumable_array":"5e51q","@swc/helpers/_/_ts_generator":"fKzQt"}],"cOBXp":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    var file = "".concat(errorLocation.fileName, ":").concat(errorLocation.lineNumber || 1, ":").concat(errorLocation.colNumber || 1);
    fetch("/__parcel_launch_editor?file=".concat(encodeURIComponent(file)));
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function onError() {}
});
window.addEventListener("parcelhmraccept", function() {
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"lqMaI","74ad5ea14201648c":"fbcKT"}],"2pjgJ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8b7a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8b7a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCallCheck = require("@swc/helpers/_/_class_call_check");
var _createClass = require("@swc/helpers/_/_create_class");
var _inherits = require("@swc/helpers/_/_inherits");
var _createSuper = require("@swc/helpers/_/_create_super");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _user = require("./User");
var _userDefault = parcelHelpers.interopDefault(_user);
var _userClass = require("./UserClass");
var _userClassDefault = parcelHelpers.interopDefault(_userClass);
var _react = require("react");
var _userContext = require("../utils/UserContext");
var _userContextDefault = parcelHelpers.interopDefault(_userContext);
var About = /*#__PURE__*/ function(Component) {
    "use strict";
    (0, _inherits._)(About, Component);
    var _super = (0, _createSuper._)(About);
    function About(props) {
        (0, _classCallCheck._)(this, About);
        return _super.call(this, props);
    }
    (0, _createClass._)(About, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
            // console.log("Component did mount parent called")
            }
        },
        {
            key: "render",
            value: function render() {
                // console.log("Caliling a parent render")
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex justify-center items-center py-4",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _userClassDefault.default), {
                        name: "first",
                        location: "Gorakhpur"
                    }, void 0, false, {
                        fileName: "src/components/About.js",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "src/components/About.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this);
            }
        }
    ]);
    return About;
}((0, _react.Component));
exports.default = About; /*  

-Mounting Cycle

constructor(dummy)
Render(dummy)
    <HTML Dummy>
Component Did Mount
    <API Call>
    <this.setState> -- state variable is updated





----UPDATE cycle

    render(API data)
    <HTML (new API data)>
    Component did update

*/ 

  $parcel$ReactRefreshHelpers$8b7a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@swc/helpers/_/_class_call_check":"cKKyE","@swc/helpers/_/_create_class":"eMNVQ","@swc/helpers/_/_inherits":"hQyD1","@swc/helpers/_/_create_super":"dYa9S","react/jsx-dev-runtime":"groLI","./User":"lNhW7","./UserClass":"aG1Q3","react":"hF9UG","../utils/UserContext":"bpESg","@parcel/transformer-js/src/esmodule-helpers.js":"fXYHq","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"i6JEG"}],"lNhW7":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ae26 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ae26.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _this = undefined;
var User = function() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "user-card",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                children: "Name: Akshay"
            }, void 0, false, {
                fileName: "src/components/User.js",
                lineNumber: 4,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                children: "Location: Dehradun"
            }, void 0, false, {
                fileName: "src/components/User.js",
                lineNumber: 5,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                children: "Contact: @Sarvesh8180"
            }, void 0, false, {
                fileName: "src/components/User.js",
                lineNumber: 6,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "src/components/User.js",
        lineNumber: 3,
        columnNumber: 9
    }, _this);
};
_c = User;
exports.default = User;
var _c;
$RefreshReg$(_c, "User");

  $parcel$ReactRefreshHelpers$ae26.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"groLI","@parcel/transformer-js/src/esmodule-helpers.js":"fXYHq","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"i6JEG"}],"aG1Q3":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$64ae = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$64ae.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncToGenerator = require("@swc/helpers/_/_async_to_generator");
var _classCallCheck = require("@swc/helpers/_/_class_call_check");
var _createClass = require("@swc/helpers/_/_create_class");
var _inherits = require("@swc/helpers/_/_inherits");
var _createSuper = require("@swc/helpers/_/_create_super");
var _tsGenerator = require("@swc/helpers/_/_ts_generator");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
//class component
var UserClass = /*#__PURE__*/ function(_React_Component) {
    "use strict";
    (0, _inherits._)(UserClass, _React_Component);
    var _super = (0, _createSuper._)(UserClass);
    function UserClass(props) {
        (0, _classCallCheck._)(this, UserClass);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Default Location"
            }
        };
        return _this;
    }
    (0, _createClass._)(UserClass, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                return (0, _asyncToGenerator._)(function() {
                    var data, json;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    fetch("https://api.github.com/users/Sarvesh2120")
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    4,
                                    data.json()
                                ];
                            case 2:
                                json = _state.sent();
                                console.log(json);
                                _this.setState({
                                    userInfo: json
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                console.log("component did update");
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                console.log("it calls when we leave the page");
            }
        },
        {
            key: "render",
            value: function render() {
                // console.log("child render")
                var _this_state_userInfo = this.state.userInfo, name = _this_state_userInfo.name, location = _this_state_userInfo.location, avatar_url = _this_state_userInfo.avatar_url, WebName = _this_state_userInfo.WebName, followers = _this_state_userInfo.followers;
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "max-w-sm m-2 overflow-hidden rounded shadow-lg items-center justify-center text-center pb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "user-card",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    className: "w-full",
                                    src: "https://static.displate.com/280x392/displate/2022-11-26/418f2ea00ab3707b5d78c5cb371ffccc_bf11e1878a760a6558e805bb5c0f9f3b.jpg",
                                    alt: "img"
                                }, void 0, false, {
                                    fileName: "src/components/UserClass.js",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "px-6 py-4 mb-2 text-xl font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                            className: "text-base text-gray-700",
                                            children: [
                                                "Name:",
                                                name
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/UserClass.js",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                            className: "text-base text-gray-700",
                                            children: [
                                                "Location: ",
                                                location
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/UserClass.js",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                            className: "text-base text-gray-700",
                                            children: [
                                                "Followers: ",
                                                followers
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/UserClass.js",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/UserClass.js",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/UserClass.js",
                            lineNumber: 51,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                to: "/",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ",
                                    children: "Contact for food"
                                }, void 0, false, {
                                    fileName: "src/components/UserClass.js",
                                    lineNumber: 64,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "src/components/UserClass.js",
                                lineNumber: 63,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "src/components/UserClass.js",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/components/UserClass.js",
                    lineNumber: 50,
                    columnNumber: 13
                }, this);
            }
        }
    ]);
    return UserClass;
}((0, _reactDefault.default).Component);
exports.default = UserClass;

  $parcel$ReactRefreshHelpers$64ae.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@swc/helpers/_/_async_to_generator":"5mBn2","@swc/helpers/_/_class_call_check":"cKKyE","@swc/helpers/_/_create_class":"eMNVQ","@swc/helpers/_/_inherits":"hQyD1","@swc/helpers/_/_create_super":"dYa9S","@swc/helpers/_/_ts_generator":"fKzQt","react/jsx-dev-runtime":"groLI","react":"hF9UG","react-router-dom":"k4csy","@parcel/transformer-js/src/esmodule-helpers.js":"fXYHq","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"i6JEG"}]},["lUMqH","cOBXp"], null, "parcelRequireb6fc")

//# sourceMappingURL=About.4366bd9f.js.map
