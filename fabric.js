//Шаблон "Фабрика"
class Car {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`Driving a ${this.model}`);
  }
}

class Sport extends Car {
  constructor(model) {
    super(model);
  }
}

class Compact extends Car {
  constructor(model) {
    super(model);
  }
}

class CarFactory {
  static createCar(type, model) {
    switch (type) {
      case "sport":
        return new Sport(model);
      case "compact":
        return new Compact(model);
      default:
        return null;
    }
  }
}

// Использование
const sportCar = CarFactory.createCar("sport", "Ferrari 488");
const compactCar = CarFactory.createCar("compact", "Honda Fit");

sportCar.drive(); 
compactCar.drive();
