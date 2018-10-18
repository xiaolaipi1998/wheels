const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('Toast', ()=> {
    it('存在', ()=>{
        expect(Toast).to.be.exist
    })

    describe('props', ()=>{
        const Constructor = Vue.extend(Toast)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受 autoClose', (done)=> {
            let div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('Close', ()=> {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeButton', (done)=> {
            const callback = sinon.fake()

            vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    }
                }
            }).$mount()
            // console.log(vm.$el.outerHTML);
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            }, 300)

        })
        it('接收enableHtml',()=>{
            vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接收 position',()=>{
            vm = new Constructor({
                propsData:{
                    position: 'bottom'
                }
            }).$mount()

            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
});