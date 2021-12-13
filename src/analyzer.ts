import fs from "fs";
import cheerio from "cheerio";
import moment from "moment";

interface Person {
  name: string;
  href: string;
}

interface InfoNode {
  time: string;
  data: Person[];
}

interface Content {
  [propName: string]: Person[];
}

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

// 中国科学院
export class SciencesAnalyzer implements Analyzer {
  getExpertData(html: string): InfoNode {
    const list: Person[] = [];
    const $ = cheerio.load(html);
    const items = $("#allNameBar").find("dd span a");
    items.each(function (index, item) {
      const name = $(item).text();
      const info = $(item).attr("href") || "";
      list.push({
        name: name,
        href: info,
      });
    });
    const time = moment().format("YYYY-MM-dd hh:mm:ss");
    return {
      time: time,
      data: list,
    };
  }

  generateContent(content: InfoNode, filePath: string): Content {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[content.time] = content.data;
    return fileContent;
  }

  analyze(html: string, filePath: string): string {
    const info = this.getExpertData(html);
    const content = this.generateContent(info, filePath);
    return JSON.stringify(content);
  }
}
// 中国工程院
export class EngineerAnalyzer implements Analyzer {
  analyze(html: string, filePath: string) {
    const data = this.getData(html);
    const content = this.mergeData(data, filePath);
    return JSON.stringify(content);
  }

  getData(html: string): InfoNode {
    const list: Person[] = [];
    const $ = cheerio.load(html);
    const items = $(".right_md_ysmd").find("li.name_list a");
    items.each(function (index, item) {
      const name = $(item).text();
      const info = $(item).attr("href") || "";
      list.push({
        name: name,
        href: info,
      });
    });
    const time = moment().format("YYYY-MM-dd hh:mm:ss");
    return {
      time: time,
      data: list,
    };
  }

  mergeData(content: InfoNode, filePath: string): Content {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[content.time] = content.data;
    return fileContent;
  }
}