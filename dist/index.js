"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chunk_svelte_1 = tslib_1.__importDefault(require("./chunk.svelte"));
exports.Chunk = function (dynmaicImport, Component) {
    if (Component === void 0) { Component = chunk_svelte_1.default; }
    return /** @class */ (function () {
        function SvelteComponentHook(options) {
            options.props = tslib_1.__assign({}, options.props, { dynmaicImport: dynmaicImport });
            return new Component(options);
        }
        return SvelteComponentHook;
    }());
};
exports.default = exports.Chunk;
