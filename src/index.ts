export function auth() {
  const roles: string[] = ['南京', '北京', '西安', '广州'];
  console.log(roles);
}

auth();

export abstract class User {
  protected name = '';

  protected score = 0;

  protected level: Level = Level.Novice;

  constructor(name: string = '', score: number = 0) {
    this.name = name;
    this.score = score;
  }
}

export enum Level {
  Novice = 1,
  Master = 2,
  Expert = 3,
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
