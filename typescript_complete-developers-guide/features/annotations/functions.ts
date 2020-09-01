// even though type inference will work for the return, thus making the type for the return value
// unnecessary, you really shouldn't use it.
// Always annotate both the inputs (required) and the output (optional but good form)
const add = (a: number, b: number): number => {
  return a + b;
};

// example with function declaratin instead of arrow function
function divide(a: number, b: number): number {
  return a / b;
}

// example with anonymous function
const multiple = function (a: number, b: number): number {
  return a * b;
};

// function that doesn't return anything
const logger = (message: string): void => {
  console.log(message);
};

// function that doesn't really return
// But if the throw is a conditional case but otherwise would return a value (e.g. a string), then
// set the type to "string" or whatever.
const throwError = (message: string): never => {
  throw new Error(message);
};

// Example with destructuring
// Destructuring is where you can pull out the fields of an object in the function parameters instead of passing the object
let todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// function without destructuring
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// function with desctructuring
// So destructure parameter into the fields and then give the type annotations
const showWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
