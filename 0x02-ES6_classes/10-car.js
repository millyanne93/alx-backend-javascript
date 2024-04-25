const cloneCarSymbol = Symbol();

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneCarSymbol] = this.cloneCar.bind(this);
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default Car;
