import { EmTimeElement } from './em-time'

if (!window.customElements.get(EmTimeElement.defaultElementName)) {
    window.customElements.define(EmTimeElement.defaultElementName, EmTimeElement)
}
