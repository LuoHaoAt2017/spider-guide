"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.sort = exports.draw = exports.move = exports.auth = exports.Color = void 0;
var lodash_1 = __importDefault(require("lodash"));
var validator_1 = require("./validator");
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["GREEN"] = "GREEN";
    Color["BLUE"] = "BLUE";
})(Color = exports.Color || (exports.Color = {}));
function auth() {
    var roles = ["南京", "北京", "西安", "广州", "成都"];
    console.table(roles);
}
exports.auth = auth;
function move(direction) {
    console.log("move direction: ", direction);
}
exports.move = move;
function draw(color) {
    console.log("color: ", color);
}
exports.draw = draw;
function sort() {
    var users = [
        { user: "fred", age: 48 },
        { user: "barney", age: 34 },
        { user: "fred", age: 40 },
        { user: "barney", age: 36 },
    ];
    var list = lodash_1.default.orderBy(users, 'age', 'asc');
    console.table(list);
}
exports.sort = sort;
function main() {
    var city = 'wuhan';
    new validator_1.LettersValidator().isAcceptable(city);
}
exports.main = main;
//# sourceMappingURL=previous.js.map