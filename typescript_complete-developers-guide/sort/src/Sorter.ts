// This version is what was used originally to create a Sorter class that is instantiated by index.ts
// to act on the various types of collections.
// We then moved to a model where Sorter is used as a parent class to the collections classes -
// see SorterParent.ts

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

export class Sorter {
  // Recall, the below declaration of collection and constructor can be shorthanded as:
  //constructor(public collection: number[]) {}
  collection: Sortable;
  constructor(collection: Sortable) {
    this.collection = collection;
  }

  sort(): void {
    const length = this.collection.length;
    // Can also be written using ES2015 destructuring:
    // const { length } = this.collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
