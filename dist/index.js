"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkGenerator = function (Component) {
    return function (dynamicImport) { return exports.Chunk(dynamicImport, Component); };
};
exports.Chunk = function (dynamicImport, Component) {
    return /** @class */ (function () {
        function SvelteComponentHook(options) {
            options.props = __assign({}, options.props, { dynamicImport: dynamicImport });
            return new Component(options);
        }
        return SvelteComponentHook;
    }());
};
exports.default = exports.Chunk;
