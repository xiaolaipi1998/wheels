import Toast from './toast'

export default {
    install(Vue, options){
        Vue.prototype.$toast = function (message) {
            //通过vue方式插入元素
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)

        }
    }
}