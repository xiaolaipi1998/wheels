<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "toast",
        props: {
            autoClose:{
                type: [Boolean,Number],
                default: 5,
                validator(value){
                    return value === false || value === true ||  typeof  value  === 'number'
                }
            },
            closeButton: {
                type: Object,
                default(){   //如果type是一个对象，必须要求default是一个函数而不能是一个对象，因为JS是浅拷贝，在定义组件时像autoCloseDelay这种type是Number的可以直接
                    //替换，但是对于对象来说只是引用了对象的地址，这样两个相同的的引用会相互影响，所以写成函数就不会出现这个问题
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml:{
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'center'].indexOf(value) >=  0;//比includes兼容性好
                }
            }
        },
        computed: {
            toastClasses(){
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        mounted(){
            this.execAutoClose()
            this.styleUpdate()
        },
        methods: {
            execAutoClose(){
                if (this.autoClose) {
                    setTimeout(()=>{
                        this.Close()
                    }, this.autoClose * 1000)
                }
            },
            styleUpdate(){
                this.$nextTick(()=>{ //通过异步方式获取到母元素的高度，子元素再下一次渲染时和母元素高度一致
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            Close(){
                this.$el.remove()
                this.$emit('Close')
                this.$destroy()
            },
            log(){
                console.log('测试')
            },
            onClickClose(){
                this.Close()
                if (this.closeButton && typeof this.closeButton.callback  === 'function'){
                    this.closeButton.callback(this)//this === toast实例
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0, 0.75);
    $toast-broder-radius: 4px;
    $toast-box-shadow: rgba(0,0,0, 0.50);
    @keyframes fade-up {
        0%{opacity: 0; transform: translateY(100%);}
        100%{opacity: 1;transform: translateY(0%);}
    }
    @keyframes fade-down {
        0%{opacity: 0; transform: translateY(-100%);}
        100%{opacity: 1;transform: translateY(0%);}
    }
    @keyframes fade-in {
        0%{opacity: 0; }
        100%{opacity: 1;}
    }
    .wrapper{ /*在最外层负责全局的左右居中*/
        position: fixed;left: 50%;transform: translateX(-50%);
        &.position-top{
            top:0;
            > .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: fade-down 1s;
            }

        }
        &.position-bottom{
            bottom:0;
            > .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: fade-up 1s;
            }


        }
        &.position-middle{
            top:50%;
            transform: translate(-50%, -50%);
            > .toast{
                animation: fade-in 10s;
            }

        }
    }
    .toast{

        font-size: $font-size;line-height: 1.8;min-height: $toast-min-height;border: 1px solid red;
        display: flex;align-items: center;color: white;
        background: $toast-bg;
        border-radius: $toast-broder-radius;
        box-shadow: $toast-box-shadow;
        padding: 0 16px;

        > .line {
            /*height: 100%;*/
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        > .close {
            flex-shrink: 0;
            padding-left: 16px;

        }
        > .message {
            padding: 8px 0;
        }

    }

</style>