"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expert = exports.Master = exports.Novice = exports.Level = exports.User = exports.auth = void 0;
function auth() {
    var roles = ['南京', '北京', '西安', '广州', '成都'];
    console.table(roles);
}
exports.auth = auth;
var User = /** @class */ (function () {
    function User(name, score) {
        if (name === void 0) { name = ''; }
        if (score === void 0) { score = 0; }
        this.name = '';
        this.score = 0;
        this.level = Level.Novice;
        this.name = name;
        this.score = score;
    }
    return User;
}());
exports.User = User;
var Level;
(function (Level) {
    Level[Level["Novice"] = 1] = "Novice";
    Level[Level["Master"] = 2] = "Master";
    Level[Level["Expert"] = 3] = "Expert";
})(Level = exports.Level || (exports.Level = {}));
var Novice = /** @class */ (function (_super) {
    __extends(Novice, _super);
    function Novice() {
        return _super.call(this) || this;
    }
    return Novice;
}(User));
exports.Novice = Novice;
var Master = /** @class */ (function (_super) {
    __extends(Master, _super);
    function Master() {
        return _super.call(this) || this;
    }
    return Master;
}(User));
exports.Master = Master;
var Expert = /** @class */ (function (_super) {
    __extends(Expert, _super);
    function Expert() {
        return _super.call(this) || this;
    }
    Expert.prototype.reply = function () {
        this.score = this.score + 10;
    };
    return Expert;
}(User));
exports.Expert = Expert;
auth();
//# sourceMappingURL=index.js.map