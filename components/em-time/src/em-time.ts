export class EmTimeElement extends HTMLElement {
    static defaultElementName = 'em-time'

    static html = `
        <slot></slot>
    `

    static css = `
        
    `

    constructor() {
        super()

        this.#createRoot()
    }

    #createRoot = () => {
        const root = this.shadowRoot ?? this.attachShadow({ mode: 'open' })

        const style = document.createElement('style')
        style.innerHTML = (this.constructor as typeof EmTimeElement).css

        const template = document.createElement('template')
        template.innerHTML = (this.constructor as typeof EmTimeElement).html

        root.appendChild(style)
        root.appendChild(template.content)

        return root
    }
}