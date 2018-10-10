<template>
    <div class="col" :class="colSpan"
         :style="colPadding">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-col",
        props: {
            span: [Number, String],
            offset: [Number, String]
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed: {
            colSpan(){
                let {span, offset} = this
                return [span &&`col-${span}`, offset && `offset-${offset}`]
            },
            colPadding(){
                let {gutter} = this
                return {
                    paddingLeft: gutter/2 +'px',
                    paddingRight: gutter/2 + 'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
        padding: 0 10px;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }

    }
</style>