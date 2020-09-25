import fs from "fs";
import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult"

type MatchData = [
    Date,
    string, // home team
    string, // away team
    number, // home team score
    number, // away team score
    MatchResult, // who won or was it a draw
    string // ref
]

export class CsvFileReader {
    // property that contains the parsed file
    data: MatchData[] = [];

    // public keyword makes "filename" an input property to the class
    // constructor doesn't do anything.
    // the read method will do the parse
    constructor(public filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8', // we want a string representing the contents of the file. so tell it to encode it as utf-8.
        })
        .split('\n') // array of strings where each string is a match
        .map((row: string): string[] => {
            return row.split(',');
        }) // array of arrays where each internal array containing the data for the given match
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // type assertion - tell TypeScript to use the enum type
                row[6] 
            ]

        })
}