/*
 * public modfier: can be called anywhere - this is the default for methods and properties.
 * private modifier: can only be called within the given class.
 * protected modifiedr: can only be called within the given class or child classes.
 */

/*
class Vehicle {
  color: string;
  // constructor is a special class function that is executed when an instance of the class is created
  // the constructor parameters are what was passed in when the object was instantiated
  constructor(carColor: string) {
    // set the object's color to the value that was passed in
    this.color = carColor;
  }
  protected drive(): void {
    console.log('vroom');
  }
  public honk(): void {
    console.log('beep');
  }
}
*/

// Here is the above Vehicle class re-written with a shorthand for the properties and constructor.
// NewVehicle is identical to Vehicle
class Vehicle {
  // By adding public modifier to color in constructor, the color property will be set to the
  // value passed in at instantiation
  constructor(public color: string) {}
  protected drive(): void {
    console.log('vroom');
  }
  public honk(): void {
    console.log('beep');
  }
}

/* create a new class, Car, that is a child of the parent class, Vehicle.
  that includes the methods from Vehicle 
   but overwrites the drive method */
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // NOTE: the Car constructor includes a color property but it does not have a modifier since we are reusing the color property from the parent.
    super(color); // THIS call to super() IS NEEDED FOR CHILD CLASSES. The child class constructor needs to call the parent constructor which is what "super()" does.
  }
  protected drive(): void {
    console.log('chugga chugga');
  }
  // drive() is private but startDrivingProcess is public (by default)
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('orange');
//vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

// create a new car with
// Car class specific number of wheels parameter
// and color parameter inherited from Car's Vehicle parent class.
const car = new Car(4, 'purple');
//car.drive();
car.startDrivingProcess();
car.honk();
console.log(car.color);
console.log(car.wheels);
