import jsdom from 'jsdom'
const { JSDOM } = jsdom

export default class DOMHandler {
  #dom

  constructor(html) {
    this.#dom = new JSDOM(html)
  }

  getDataTable(tableIndex) {
    const tbodys = this.#getTables(tableIndex)

    const data = Array.from(tbodys[tableIndex].childNodes)
      .filter((node) => node.nodeName === 'TR')
      .map((node) => this.#parseData(node))

    return data
  }

  #getTables() {
    return this.#dom.window.document.querySelectorAll('tbody')
  }

  #parseData(node) {
    return node.textContent
      .trim()
      .split('\n')
      .reduce((acc, item) => {
        if (!acc.includes(item) && item !== '') {
          acc.push(item)
        }
        return acc
      }, [])
  }
}
