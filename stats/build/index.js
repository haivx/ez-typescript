"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var reader = MatchReader_1.MatchReader.readerFile('football.csv');
reader.load();
var summary = Summary_1.Summary.buildAndPrintReport('Manu ');
summary.buildAndPrintReport(reader.matches);
