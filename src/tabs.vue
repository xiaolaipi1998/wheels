<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "tabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data(){
            return {
                eventBus: new Vue() //使用new Vue()方式来构建eventBus 是为了避免将整个eventBus传递到全局中去，而只是在爷爸孙级别传递
            }
        },
        provide(){
            return {

                eventBus: this.eventBus
            }
        },
        mounted(){
            // this.$emit('update:selected', '这是this. $emit 出来的数据')
            // this.eventBus.$emit('update:selected', '这是this eventBus  $emit 出来的数据') //这个不会触发
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'tabs-head'){
                    vm.$children.forEach((item)=>{
                       if(item.name === this.selected){
                           this.eventBus.$emit('update:selected', this.selected, item )
                       }
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>