// object version
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// tuple version
// tuples have specific orderings and so the annotation needs to match that ordering
// which in this case has 3 different types.
// And in this case, we want to declare a type alias for "Drink"
// This all said, tuples are not really all that useful  - maybe if working with a CSV file.
// Objects are really the way to go.
// But now you understand how tuples would be declared and annotated.
type Drink = [string, boolean, number]; // tuple type declaration
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 5];

const carSpecs: [number, number] = [300, 4500];
const carSpecifications = {
  horsepower: 400,
  weight: 4500,
};
