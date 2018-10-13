<template>
    <div class="layout" :class="LayoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "glayout",
        data() {
          return {
              LayoutClass: {
              hasSider: false}
          }
        },
        mounted(){
            this.$children.forEach(vm => {
                if (vm.$options.name === 'gsider') {
                    this.LayoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>