import { MatchReader } from "./inheritance/MatchReader";
import { MatchResult } from './types';

const reader = new MatchReader("football.csv");
reader.read();

let manUWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUWins++;
  }
}

console.log("Man United wons", manUWins);

