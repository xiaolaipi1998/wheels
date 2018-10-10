<template>
    <div class="row" :style="rolStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-row",
        props:{
            gutter: [Number, String]
        },
        computed:{
          rolStyle(){
              const {gutter} = this
              return {marginLeft: -gutter/2+'px',marginRight:-gutter/2+'px'}
          }
        },
        mounted(){
            this.$children.forEach(vm=>{
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
    }


</style>