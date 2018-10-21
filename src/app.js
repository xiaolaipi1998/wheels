import Vue from 'vue'
import Button from './button'
import Icon from  './Icon'
import ButtonGroup from './button-group'
import GInput from './ginput'
import GRow from './row'
import GCol from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import TabsItem from './tabs-item'
import Popover from  './popover'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', GInput)
Vue.component('g-row', GRow)
Vue.component('g-col', GCol)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-popover',Popover)

Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports'
        // loading1: false,
        // loading2: true,
        // loading3: true,
        // message:'hi'
    },
    created(){

    },
    methods: {
        // inputChange(e){
        //     console.log(e.target.value);
        // }
        yyy(data){
            console.log(data);
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('bottom')
        },
        showToast3(){
            this.showToast('middle')
        },
        showToast(position){
            this.$toast('你的智商需要充值',
                {
                    enableHtml: false,
                    position,
                    closeButton: {
                        text: '已充值',
                        callback(toast){
                            toast.log()//由于toast组件中已经将toast实例传递过来了，所以可以直接调用toast组件中的方法
                            console.log('他说他已经充值了')
                        }
                    },
                    autoClose: 3

                }
            )
        }

    }

})

// //单元测试pwd
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
//
// const expect = chai.expect
// try {
//
//
//     {
//         let Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData:{
//                 icon: 'settings'
//             }
//         })
//         vm.$mount()
//         let useElement = vm.$el.querySelector('use')
//         console.log(useElement.getAttribute('xlink:href'))
//         expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
//         vm.$el.remove()
//         vm.$destroy()
//
//
//     }
//     {
//         let Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData:{
//                 icon: 'settings',
//                 loading: true
//             }
//         })
//         vm.$mount()
//         const  useElement = vm.$el.querySelector('use')
//         const href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#i-loading')
//         vm.$el.remove()
//         vm.$destroy()
//
//     }
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         let Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData:{
//                 icon: 'settings'
//             }
//         })
//         vm.$mount(div)
//         const  svg = vm.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq("1")
//         vm.$el.remove()
//         vm.$destroy()
//
//     }
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         let Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData:{
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         const  svg = vm.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq("2")
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     {
//         //mock 安装 npm -D i chai-spies
//         let Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData:{
//                 icon: 'settings',
//                 loading: true
//             }
//         })
//         vm.$mount()
//         const spy = chai.spy(function(){})
//         vm.$on('click', spy)
//         //希望这个函数被执行
//         let button = vm.$el
//         button.click()
//         expect(spy).to.have.been.called()
//     }
// } catch (e) {
//     window.errors = [e]
// } finally {
//     window.errors && window.errors.forEach((e)=>{
//         console.error(e.message)
//     })
// }