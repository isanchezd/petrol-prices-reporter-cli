import { load } from 'cheerio';

export class DOMHandler {
  #_$;

  constructor(DOM) {
    this.#_$ = load(DOM);
  }

  getDataTable(tableIndex) {
    const DOMTable = this.#_$('tbody').get(tableIndex);
    const data = [];

    this.#_$(DOMTable)
      .children()
      .map((seed, item) => {
        data.push(this.#getDataRow(item));
      });

    return data;
  }

  #getDataRow(row) {
    const th = row.children.filter((item) => item.name === 'th');
    const tds = row.children.filter((item) => item.name === 'td');
    const thText = this.#_$(th).text().trim();

    const data = {
      title: thText,
      data: tds.map((item) => item.children[0].data.trim()),
    };

    return data;
  }
}
