import Vue from 'vue'
import Button from './button'
import Icon from  './Icon'
import ButtonGroup from './button-group'
import GInput from './ginput'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', GInput)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: true
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