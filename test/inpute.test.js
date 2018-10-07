const expect = chai.expect;
import Vue from 'vue'
import GInput from '../src/ginput'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('GInput', () => {

    it('存在', () => {
        expect(GInput).to.exist
    })


})