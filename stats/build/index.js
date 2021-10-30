"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var types_1 = require("./types");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var manUWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === types_1.MatchResult.HomeWin) {
        manUWins++;
    }
    else if (match[2] === "Man United" && match[5] === types_1.MatchResult.AwayWin) {
        manUWins++;
    }
}
console.log("Man United wons", manUWins);
