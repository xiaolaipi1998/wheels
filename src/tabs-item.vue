<template>
    <div class="tabs-item"
         :class="classes"
         :data-name="name"
         @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type:  [String, Number],
                required: true
            }
        },
        computed:{
            classes(){
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        data(){
            return {
                active: false
            }
        },
        inject: ['eventBus'],
        created() {

                this.eventBus && this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name;
                })


        },
        methods:{
            onClick(){
                if(this.disabled) {return }

                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this) //为了测试disabled而添加的语句


            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: blue;
    .tabs-item{
        flex-shrink: 0;
        padding:10px 2em;
        cursor: pointer;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled{
            color: #dddddd;
            cursor:not-allowed;
        }
    }

</style>