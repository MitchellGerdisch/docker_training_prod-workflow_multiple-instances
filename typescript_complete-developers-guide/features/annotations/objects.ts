// object with function and typing
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 42,
    long: 80,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// some destructuring
// with destructuring, you need to set the type by providing the structure of profile for the
// bits you care about
const { age }: { age: number } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
