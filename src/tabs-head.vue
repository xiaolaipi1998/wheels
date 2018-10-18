<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject: ['eventBus'],
        mounted(){
            if(this.eventBus){
                this.eventBus.$on('update:selected', (item, vm)=> {
                    let {width, height, top, left} = vm.$el.getBoundingClientRect()
                    console.log(width, height, top,left);
                    this.$refs.line.style.width = `${width}px`
                    this.$refs.line.style.left = `${left}px`

                })
            }

        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $tab-margin-right: 10px;
    $border-color: #ddd;
    $blue: blue;
    .tabs-head {
        display: flex;

        justify-content: flex-start;
        align-items: center;
        position: relative;
        margin-right: $tab-margin-right;
        border-bottom: 1px solid  $border-color;
        > .line {
            position: absolute;
            border-bottom: 1px solid $blue;
            bottom:0;
            transition: all 1s;
        }
        > .actions {
            margin-left: auto;

        }
    }
</style>