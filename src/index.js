//@flow

class CommonWidget {
  constructor (rootElement, htmlTemplate) {
    this.rootElement = this.getRootElement(rootElement)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate()
  }

  setHtmlTemplate() {
    if(this.rootElement) {
      this.rootElement.innerHTML = this.htmlTemplate
    }
  }

  getRootElement(rootElementId) {
    return document.querySelector(`#${rootElementId}`)
  }
}

if ('undefined' !== typeof module) {
	module.exports = new CommonWidget();
}
