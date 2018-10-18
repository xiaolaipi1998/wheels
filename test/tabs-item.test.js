const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
import TabsItem from '../src/tabs-item'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)

Vue.config.productionTip = false;
Vue.config.devtools = false;



describe('TabsItem', () => {
    it('存在', () => {
        expect(TabsItem).to.be.exist
    })

    it('接受 name prop', () => {
        const constructor = Vue.extend(TabsItem)
        const vm = new constructor({
            propsData:{
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接受 disabled', ()=>{
        const constructor = Vue.extend(TabsItem)
        const vm = new constructor({
            propsData:{
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })

});