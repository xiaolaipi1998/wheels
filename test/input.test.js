const expect = chai.expect;
import Vue from 'vue'
import GInput from '../src/ginput'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('GInput', () => {

    it('存在', () => {
        expect(GInput).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(GInput)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 1234
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('1234')

        })
        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
        })
        it('接收  readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
        })
        it('接收  error', () => {
            vm = new Constructor({
                propsData: {
                    error: '这是一个错误的提示'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.eq('这是一个错误的提示')
        })

    })
    describe('事件', () => {
        const Constructor = Vue.extend(GInput)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件', () => {
            ['change', 'input', 'focus', 'blur'].map((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                //触发input的change事件
                let event = new Event(eventName)
                //由于event需要添加特定的值，而本身event是只读属性，所以需要使用definePropety的方式破除它的只读属性
                //这样才可以添加值，然后通过expect做预测
                Object.defineProperty(event, 'target', {value: {value: 'hi'}, enumerable: true})
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)

                expect(callback).to.have.been.calledWith('hi')
            })

        })
    })

})