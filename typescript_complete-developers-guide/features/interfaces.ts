/*** 
const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};
***/

// Having to annotate all the object types is cumbersome at best.
// Interfaces to the rescue ...
/**** 
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};
***/

// Interface type declaration
interface InterfaceVehicle {
  // Not needed - see note at end   name: string;
  // Not needed - see note at end   year: number;
  // Not needed - see note at end   broken: boolean;
  summary(): string; // this type must include a function called summary that returns a string
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    // this is a function that returns a string as required by interface
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: InterfaceVehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// NOTE: since printVehicle only uses the summary property the Vehicle property does not need to have all the different
// fields. oldCivic can have different properties that the Vehicle-required function uses.
// But typescript doesn't really care.
// So interface can be declared without the other properties.
