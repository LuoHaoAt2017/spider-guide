import fs from "fs";
import path from "path";
import superagent from "superagent";
import { Analyzer, SciencesAnalyzer, EngineerAnalyzer } from './analyzer';
export class Spider {

  async process(url: string, filePath: string, analyzer: Analyzer) {
    const html = await this.getRawHtml(url);
    const content = analyzer.analyze(html, filePath);
    this.writeFile(content, filePath);
  }

  async getRawHtml(url: string): Promise<string> {
    const res = await superagent.post(url);
    return res.text;
  }

  writeFile(fileContent: string, filePath: string) {
    fs.writeFileSync(filePath, fileContent, "utf-8");
  }
}

async function main() {
  // 中国科学院全体院士名单
  const sciencesUrl = "http://casad.cas.cn/ysxx2017/ysmdyjj/qtysmd_124280";
  const sciencesFilePath = path.resolve(__dirname, "./data/sciences.json");
  const sciencesAnalyzer = new SciencesAnalyzer();
  // 中国工程院全体院士名单
  const engineerUrl = "http://www.cae.cn/cae/html/main/col48/column_48_1.html";
  const engineerFilePath = path.resolve(__dirname, "./data/engineer.json");
  const engineerAnalyzer = new EngineerAnalyzer();
  // 网络蜘蛛
  const spider = new Spider();
  spider.process(sciencesUrl, sciencesFilePath, sciencesAnalyzer);
  spider.process(engineerUrl, engineerFilePath, engineerAnalyzer);
}

main();
