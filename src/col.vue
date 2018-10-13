<template>
    <div class="col" :class="colSpan"
         :style="colPadding">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) =>{
        let keys = Object.keys(value)
        let valid = true
        keys.forEach( key => {
            if(!['span', 'offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
    export default {
        name: "g-col",
        props: {
            span: [Number, String],
            offset: [Number, String],
            phone: {
                type: Object,
                validator

            },
            ipad: {
                type: Object,
                validator
            },
            narrowPC: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widePc: {
                type: Object,
                validator
            },
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed: {
            colSpan(){
                let {span, offset, phone, ipad, narrowPc, pc, widePc } = this
                let phoneClass =[]
                return [span &&`col-${span}`, offset && `offset-${offset}`,
                    ...(phone && [`col-phone-${phone.span}`]),
                    ...(ipad && [`col-ipad-${ipad.span}`]),
                    ...(pc && [`col-pc-${pc.span}`]),
                    ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
                    ...(widePc && [`col-wide-pc-${widePc.span}`])
                ]
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
        /*width: 50%;*/
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
    @media (max-width: 576px) {
        $class-prefix: col-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 577px) and (max-width: 768px) {
        $class-prefix: col-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 769px) and (max-width: 992px) {
        $class-prefix: col-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
        $class-prefix: col-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 1201px)  {
        $class-prefix: col-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>