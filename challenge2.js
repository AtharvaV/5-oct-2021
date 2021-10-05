'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed = this.speed + 10;
  }

  brake() {
    this.speed = this.speed - 5;
  }
}

const ford = new Car('Ford', 120);
