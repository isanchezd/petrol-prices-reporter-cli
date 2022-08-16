import { load } from 'cheerio'

export default class DOMHandler {
  #$

  constructor (DOM) {
    this.#$ = load(DOM)
  }

  getDataTable (tableIndex) {
    const DOMTable = this.#$('tbody').get(tableIndex)
    const data = [
      ...this.#$(DOMTable)
        .children()
        .map((seed, item) => this.#getDataRow(item))
    ]

    return data
  }

  #getDataRow (row) {
    const th = row.children.filter((item) => item.name === 'th')
    const tds = row.children.filter((item) => item.name === 'td')
    const thText = this.#$(th).text().trim()

    const data = {
      title: thText,
      data: tds.map((item) => item.children[0].data.trim())
    }

    return data
  }
}
