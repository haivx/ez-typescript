import { Analyzer } from "../Summary";
import { MatchData } from "../types";
import { MatchResult } from "../types";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let win = 0;

        for (let match of matches) {
          if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
            win++;
          } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
            win++;
          }
        }

        return `Team ${this.team} wons ${win} games.`
    } 
}