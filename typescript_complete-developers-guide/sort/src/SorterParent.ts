// This is version of Sorter used as a parent to the collections classes.
// See ChildNumbersCollection.ts as an example.

// AND since this class is never inetantiated directly but only as a parent class,
// we can configure the SorterParent class as a Abstract class

// These are the instructions for how to interact with the Sorter class.
// Instead of specifying the different classes (e.g. NumbersCollection, CharactersCollection, etc)
// We just tell the calling entity that it needs to pass something that returns a length property
// and has a swap and compare method.
// Note we don't have to import NumbersCollection or anything since all we care about is that
// the calling entity passes an instance of an object with these properties/methods
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// Defining this as an abstract class
export abstract class SorterParent {
  // So we identify the required methods that the child class(es) must implement.
  // This will mesh with the interface definition
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const length = this.length;
    // Can also be written using ES2015 destructuring:
    // const { length } = this.collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
