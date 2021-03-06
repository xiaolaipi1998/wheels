<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]: true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-flex;">
        <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "popover",
        data() {
            return {
                visible: false
            }
        },
        mounted(){
           if (this.trigger === 'click'){
               this.$refs.popover.addEventListener('click', this.onClick)
           } else {
               this.$refs.popover.addEventListener('mouseenter', this.open)
               this.$refs.popover.addEventListener('mouseleaver', this.close)
           }
                },
        computed:{
            openEvent(){
                if(this.trigger === 'click'){
                    return 'click'
                }else{
                    return 'mouseenter'
                }
            },
            closeEvent(){
                if(this.trigger === 'click'){
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value){
                    return ['click', 'hover'].indexOf(value) >= 0;
                }
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                let {height: height2} = contentWrapper.getBoundingClientRect()
                const positions = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX
                    },
                    bottom: {
                        top: left + window.scrollX,
                        left: top + window.scrollY + height
                    },
                    left: {
                        top: left + window.scrollX,
                        left: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        top: left + window.scrollX + width,
                        left: top + window.scrollY + (height - height2) / 2
                    }
                }
                contentWrapper.style.top = positions[this.position].top + 'px'
                contentWrapper.style.left = positions[this.position].left + 'px'



        },
        onClickDocument(e) {
            if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                return
            }
            if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                return
            }
            this.close()
        }
        ,
        open() {
            this.visible = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument)
            })
        }
        ,
        close() {
            this.visible = false
            document.removeEventListener('click', this.onClickDocument)
        }
        ,
        onClick() {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible === true) {

                    this.close()
                } else {
                    this.open()
                }
            }


        }
    }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                top: 100%;
                border-top-color: black;
            }
            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                left: 100%;
                border-left-color: black;
            }
            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-right-color: black;
                right: 100%;
            }
            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                bottom: 100%;
                border-bottom-color: black;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

    }
</style>