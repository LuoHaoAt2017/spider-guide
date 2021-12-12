"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = exports.LettersValidator = void 0;
var letterRegx = /^[a-zA-Z]+$/;
var numberRegx = /^[0-9]+$/;
var LettersValidator = /** @class */ (function () {
    function LettersValidator() {
    }
    LettersValidator.prototype.isAcceptable = function (s) {
        return letterRegx.test(s);
    };
    return LettersValidator;
}());
exports.LettersValidator = LettersValidator;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return numberRegx.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
//# sourceMappingURL=validator.js.map