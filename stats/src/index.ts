import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReports } from "./reportTarget/HtmlReport";

const csvFileReader = new CsvFileReader('football.csv')

const reader = new MatchReader(csvFileReader);
reader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'), 
  new HtmlReports()
)


summary.buildAndPrintReport(reader.matches)