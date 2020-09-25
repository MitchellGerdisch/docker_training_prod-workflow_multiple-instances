import fs from 'fs';
import { MatchResult } from './MatchResult';

type MatchData = [
  Date,
  string, // home team
  string, // away team
  number, // home team score
  number, // away team score
  MatchResult, // who won or was it a draw
  string // ref
];

export class CsvFileReader {
  // property that contains the parsed file
  data: string[][] = [];

  // public keyword makes "filename" an input property to the class
  // constructor doesn't do anything.
  // the read method will do the parse
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', // we want a string representing the contents of the file. so tell it to encode it as utf-8.
      })
      .split('\n') // array of strings where each string is a match
      .map((row: string): string[] => {
        return row.split(',');
      }); // array of arrays where each internal array containing the data for the given match
  }
}
