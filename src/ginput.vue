<template>
    <div class="wrapper" :class="{error}">
        <input :value="value1" type="text" :disabled="disabled"
            :readonly="readonly" />
        <template v-if="error">
            <g-icon icon="error" class="icon-error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import GIcon from './Icon'

    export default {
        name: "ginput",
        components: {GIcon},
        props: {
            value1: {
                type: String
            },
            disabled: {
                type:Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F14530;
    .wrapper {
        font-size: $font-size ;display: inline-flex;align-items: center;
        :not(last-child){margin-right: 0.5em;}
        &.error { > input {border-color: $red;} }
        .icon-error{fill: $red;}
        .errorMessage{color: $red;}
        > input {height: $height;border: 1px solid $border-color;border-radius: 4px;padding: 0 8px;font-size: inherit;
            &:hover{border-color: $border-color-hover;}
            &:focus{outline: none;box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
        }

    }

</style>