const carMakers = ['Ford', 'Chevy', 'Toyota'];
const dates = [new Date(), new Date()];
const carModels = [['F150'], ['Corolla'], ['Volt']];

const maker = carMakers[0];
const make = carModels.pop();

// Using map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('10-10-20');
importantDates.push(new Date());
