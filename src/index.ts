import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import cheerio from 'cheerio';

interface Person {
  name: string;
  info: string;
}

export class Spider {

  private url: string = '';

  constructor(url: string) {
    this.url = url;
    this.process();
  }

  async process() {
    const html = await this.getHtml();
    const data = this.parseHtml(html);
    this.saveData(data);
  }

  async getHtml() {
    const res = await superagent.post(this.url);
    return res.text;
  }

  parseHtml(html: string): Person[] {
    const list: Person[] = [];
    const $ = cheerio.load(html);
    const items = $('#allNameBar').find('dd span a');
    items.each(function (index, item) {
      const name = $(item).text();
      const info = $(item).attr('href') || '';
      list.push({
        name: name,
        info: info,
      });
    });
    return list;
  }

  saveData(data: Person[]) {
    const filePath = path.resolve(__dirname, './data/person.json');
    let fileContent = [];
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    data = data.concat(fileContent);
    fs.writeFileSync(filePath, JSON.stringify(data), 'utf-8')
  }
}

function main() {
  // 中国科学院全体院士名单
  const url = 'http://casad.cas.cn/ysxx2017/ysmdyjj/qtysmd_124280';
  new Spider(url);
}

main();