export class NumbersCollection {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  // This is a way to use a method to return what is essentially treated as a property.
  // So I can access numCollection.length.
  // I could have also had the constructor just set a property named
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const lefthand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = lefthand;
  }
}
