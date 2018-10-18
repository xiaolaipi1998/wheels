<template>
    <div class="tabs-item"  :class="classes" @click="xxx">
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
                    active: this.active
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
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item{
        flex-shrink: 0;
        padding:10px 2em;
        cursor: pointer;

        border: 1px solid green;
        &.active {
            background: red;
        }
    }

</style>