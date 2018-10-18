import Toast from './toast'

let currentToast
export default {
    install(Vue, options){
        Vue.prototype.$toast = function (message,toastOptions) {
            //通过vue方式插入元素
            if(currentToast){
                currentToast.Close()
            }

             currentToast =  createdToast({Vue,
                 message,
                 propsData: toastOptions,
                 onClose: ()=> {
                    currentToast = null
                 }
             })
            }
    }
}


/*helper */
function createdToast({Vue, message, propsData, onClose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('Close', onClose)
    document.body.appendChild(toast.$el)
    return toast

}