import { MatchData } from "./types";
import { HtmlReports } from "./reportTarget/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    static buildAndPrintReport(name: string) {
        return new Summary(new WinsAnalysis(name), new HtmlReports())
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }
    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output);
    }
}
