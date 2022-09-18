import { fixture, expect } from '@open-wc/testing'
import '../lib/define.js'

describe('em-time', () => {
    it('increases', async () => {
        const elem = await fixture(`<em-time>hello</em-time>`)

        expect(elem.textContent).to.equal('hello')
    })
})
