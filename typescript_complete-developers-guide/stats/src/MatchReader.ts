import { CsvFileReader } from './CsvFileReader'
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

export class MatchReader extends CsvFileReader {
    
    mapRow(row: string[]): MatchData {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // type assertion - tell TypeScript to use the enum type
                row[6] 
            ]

    }
}