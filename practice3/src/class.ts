export class UserClass {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge(): number {
    return 0; // this needs to be implemented
  }

  amIolder(): boolean {
    return false; // this needs to be implemented
  }

  getFullName(): string {
    return this.name + ' Xu';
  }

  sayName(): string {
    return `My name is ${this.name}`;
  }
}
