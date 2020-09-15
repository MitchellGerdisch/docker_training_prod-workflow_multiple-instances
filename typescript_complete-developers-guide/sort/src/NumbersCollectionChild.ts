// This is an example where we use Sorter(Parent) as a parent class instead of calling it
// as a separate class
import { SorterParent } from './SorterParent';

export class NumbersCollectionChild extends SorterParent {
  data: number[];

  constructor(data: number[]) {
    super();
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
