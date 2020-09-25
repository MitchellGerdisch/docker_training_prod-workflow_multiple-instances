import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

//const reader = new CsvFileReader('football.csv');
const reader = new MatchReader('football.csv');
reader.read(); // populate the data property

let manUnitedWins = 0;
// iterate over each array in matches
// match is an array of strings which represents the given match.
// home team is index 1, away team is index 2, home or away won in index

// Use an enum to represent the values in the CSV that represent the different types of match results
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// go through the data and find the correct matches
for (let match of reader.data) {
  if (
    (match[1] === 'Man United' && match[5] == MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] == MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);
