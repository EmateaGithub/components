export class EmTimeElement extends HTMLElement {
    static defaultElementName = 'em-time'

    static html = `<span id="root"><slot></slot></span>`

    static css = `
        :host { display: inline; }
        time {
            display: inline-flex;
            align-items: center;
            gap: 0.15em;
        }
        ::part(separator) {
            font-size: 75%;
        }
    `

    constructor() {
        super()

        this.#createRoot()
    }

    connectedCallback() {
        const extracted = this.#extractDatetime(this.textContent?.trim() ?? '')

        if (extracted) {
            const machineReadable = `${extracted.date ?? ''}${extracted.date && extracted.time ? 'T' : ''}${extracted.time ?? ''}`
            this.#root().innerHTML = `<time datetime="${machineReadable}">
                ${extracted.date ? `<span part="date">${extracted.date}</span>` : ''}
                ${extracted.separator ? `<span part="separator">${extracted.separator}</span>` : ''}
                ${extracted.time ? `<span part="time">${extracted.time}</span>` : ''}
            </time>`
        } else {
            this.#root().innerHTML = '<slot></slot>'
        }
    }

    #root = () => this.shadowRoot!.querySelector('#root')!

    #extractDatetime = (text: string): {
        date?: string,
        separator?: string,
        time?: string,
    } | undefined => {
        const match = text.match(/(\d{4}-\d{2}-\d{2})?\s*(T)?\s*(\d{2}:\d{2}:\d{2})?/)

        if (match && match[0].trim().length > 0) {
            return {
                date: match[1],
                separator: match[2],
                time: match[3],
            }
        } else {
            return undefined
        }
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