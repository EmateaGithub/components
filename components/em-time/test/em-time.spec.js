import { fixture, expect } from '@open-wc/testing'
import '../lib/define.js'

describe('em-time', () => {
    it('full format', async () => {
        const elem = await fixture(`<em-time>2084-10-17 T 13:17:11</em-time>`)

        const time = elem.shadowRoot.querySelector('time')

        expect(time.dateTime).to.equal('2084-10-17T13:17:11')
        expect(time.querySelector('::part(separator)')).not.to.be.undefined
    })

    it('date format', async () => {
        const elem = await fixture(`<em-time>2084-10-17</em-time>`)

        const time = elem.shadowRoot.querySelector('time')

        expect(time.dateTime).to.equal('2084-10-17')
    })

    it('time format', async () => {
        const elem = await fixture(`<em-time>T 13:17:11</em-time>`)

        const time = elem.shadowRoot.querySelector('time')

        expect(time.dateTime).to.equal('13:17:11')
        expect(time.querySelector('::part(separator)')).not.to.be.undefined
    })

    it('invalid format', async () => {
        const elem = await fixture(`<em-time>2084.08.10</em-time>`)

        const time = elem.shadowRoot.querySelector('time')

        expect(time).to.be.null
    })
})
