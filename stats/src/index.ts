import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReports } from "./reportTarget/HtmlReport";

const reader = MatchReader.readerFile('football.csv');
reader.load();

const summary = Summary.buildAndPrintReport('Manu ')


summary.buildAndPrintReport(reader.matches)