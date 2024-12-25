//Фабричный метод
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

class CarFactoryMethod {
  createCar(model) {}
}

class SportFactory extends CarFactoryMethod {
  createCar(model) {
    return new Sport(model);
  }
}

class CompactFactory extends CarFactoryMethod {
  createCar(model) {
    return new Compact(model);
  }
}

// Использование
const sportFactory = new SportFactory();
const compactFactory = new CompactFactory();

const sportCar = sportFactory.createCar("Ferrari 488");
const compactCar = compactFactory.createCar("Honda Fit");

sportCar.drive(); // Вывод: Driving a Ferrari 488
compactCar.drive(); // Вывод: Driving a Honda Fit
