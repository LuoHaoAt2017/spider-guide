class Circle {
  x: number;
  y: number;
  r: number;
  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

function sum(x: number, y: number) {
  return x + y;
}

const total = (x: number, y: number) => {
  return x + y;
}

function main() {
  const circle = new Circle(0, 0, 1);
  console.log('circle: ', circle);
}

main();