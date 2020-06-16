"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FError = void 0;
var FError;
(function (FError_1) {
    var FError = (function (_super) {
        __extends(FError, _super);
        function FError(name, msg, extraInfo) {
            var _this = _super.call(this, msg) || this;
            _this.name = name;
            _this.extraInfo = extraInfo;
            return _this;
        }
        return FError;
    }(Error));
    function throwError(name, msg, extraInfo) {
        throw new FError(name, msg, extraInfo);
    }
    function reThrow(e) {
        return throwError(e.name, e.message, e.extraInfo);
    }
    function on(pattern, fn) {
        return function (event) {
            return event.name === pattern
                ? fn(event.extraInfo)
                : reThrow(event);
        };
    }
})(FError = exports.FError || (exports.FError = {}));
//# sourceMappingURL=index.js.map