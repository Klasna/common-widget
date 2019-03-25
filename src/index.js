//@flow
import 'babel-polyfill'


export default class CommonWidget {
  constructor (rootElement, htmlTemplate) {
    this.rootElement = this.getRootElement(rootElement)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate()
  }

  setHtmlTemplate() {
    if(this.rootElement) {
      this.rootElement.innerHTML = this.htmlTemplate
    } else {
      console.log(`Common Widget: Unable to find root #${this.rootElementId} element.`)
    }
  }

  getRootElement(rootElementId) {
    return document.querySelector(`#${rootElementId}`)
  }
}
