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
        // mounted(){
        //     this.$nextTick(()=>{
        //         this.eventBus.$on('update:selected', (item, vm)=>{
        //             console.log(item, vm);
        //         })
        //     })
        //
        // }
        created(){
            this.eventBus.$on('update:selected', (item, vm)=> {
                console.log(item, vm)
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $tab-margin-right: 10px;
    $blue: blue;
    .tabs-head {
        display: flex;

        justify-content: flex-start;
        align-items: center;
        position: relative;
        margin-right: $tab-margin-right;
        > .line {
            position: absolute;
            border-bottom: 3px solid $blue;
            bottom:0;
            width: 100px;
        }
        > .actions {
            margin-left: auto;

        }
    }
</style>