// type inference
// type inference can/should be used whenever possible
let apples = 5;
apples = 10;

// "unnecessary" type annotation
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
// create an array of strings
let colors: string[] = ['red', 'green', 'blue'];

let numberMatrix: number[][] = [
  [1, 2],
  [3, 4],
];

let truths: boolean[] = [true, false, false, true];

// Class
class Car {}
let car: Car = new Car();

// Object literal
// So we have a variable, point that is typed to a thing what has a numeric x property and a numeric y property
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
// the first bit are the annotations for the input (i of type number) and output of type void
// We are basically telling typescript what the function takes as inputs and what it returns.
// It's not the function. It's just a description of the function.
// Then the actual function comes after the "="
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// function that returns "any"
const json = '{"x":10, "y":20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords.x);

// case where we can't infer the value type.
// stupid example where a variable is set to a boolean or a number depending on if greater than zero
let numbers = [-1, -4, 12];
// We need to set type to be either boolean or number
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
