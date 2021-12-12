import _ from 'lodash';
import { LettersValidator } from './validator';

export type CardinalDirection = "North" | "East" | "South" | "West";

export enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

export function auth() {
  const roles: string[] = ["南京", "北京", "西安", "广州", "成都"];
  console.table(roles);
}

export function move(direction: CardinalDirection) {
  console.log("move direction: ", direction);
}

export function draw(color: Color) {
  console.log("color: ", color);
}

export function sort() {
  const users = [
    { user: "fred", age: 48 },
    { user: "barney", age: 34 },
    { user: "fred", age: 40 },
    { user: "barney", age: 36 },
  ];
  const list = _.orderBy(users, 'age', 'asc');
  console.table(list);
  global.circle = 'aircraft';
  console.log(global.circle);
  console.log(globalThis.circle);
}

function main() {
  const city = 'wuhan';
  new LettersValidator().isAcceptable(city);
}

main();