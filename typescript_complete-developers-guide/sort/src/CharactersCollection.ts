export class CharactersCollection {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  // This is a way to use a method to return what is essentially treated as a property.
  // So I can access numCollection.length.
  // I could have also had the constructor just set a property named length.
  get length(): number {
    return this.data.length;
  }

  // Compare using default character codes doesn't work since "a" is not less than "X" if you use the default character code math.
  // "X" character code is 88 while "a" is 97.
  // So we'll use lowercase method to give a fair comparison
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  // Swapping in a string is trickier since you can't just assign a new value to an index in a string.
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const lefthand = characters[leftIndex];

    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = lefthand;
    this.data = characters.join('');
  }
}
