import superagent from 'superagent';
import cheerio from 'cheerio';

interface Person {
  name: string;
  info: string;
}

export class Spider {

  private url: string = '';

  private list: Person[] = [];

  constructor(url: string) {
    this.url = url;
    this.getHtml();
  }

  async getHtml() {
    const res = await superagent.post(this.url);
    this.parseHtml(res.text);
  }

  parseHtml(html: string) {
    const $ = cheerio.load(html);
    const items = $('#allNameBar').find('dd span a');
    items.each((index, item) => {
      const name = $(item).text();
      const info = $(item).attr('href') || '';
      this.list.push({
        name: name,
        info: info,
      });
    });
    console.table(this.list);
  }
}

function main() {
  // 中国科学院全体院士名单
  const url = 'http://casad.cas.cn/ysxx2017/ysmdyjj/qtysmd_124280';
  new Spider(url);
}

main();