import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { NumbersCollectionChild } from './NumbersCollectionChild';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const array = [1000, 7, -1, 10, 0];
console.log('BEFORE', array);
const numCollection = new NumbersCollection(array);
const arraySorter = new Sorter(numCollection);
arraySorter.sort();
console.log('AFTER', arraySorter.collection);

const string = 'Mitchell';
console.log('BEFORE', string);
const charactersCollection = new CharactersCollection(string);
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log('AFTER', charSorter.collection);

const list = new LinkedList();
list.add(5);
list.add(0);
list.add(15);
list.add(-1);
console.log('BEFORE');
list.print();
const listSorter = new Sorter(list);
listSorter.sort();
console.log('AFTER');
list.print();

const nums = [60, -7, -11, 10, 0];
const numColl = new NumbersCollectionChild(nums);
console.log('BEFORE', numColl.data);
numColl.sort();
console.log('AFTER', numColl.data);
