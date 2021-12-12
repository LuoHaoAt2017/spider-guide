export enum Level {
  Novice = 1,
  Master = 2,
  Expert = 3,
}

export abstract class User {
  protected name: string = "";

  protected score: number = 0;

  protected level: Level = Level.Novice;

  constructor(name: string = "", score: number = 0) {
    this.name = name;
    this.score = score;
  }
}

export class Novice extends User {
  constructor() {
    super();
  }
}

export class Master extends User {
  constructor() {
    super();
  }
}

export class Expert extends User {
  constructor() {
    super();
  }

  reply() {
    this.score = this.score + 10;
  }
}