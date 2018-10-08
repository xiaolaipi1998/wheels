<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
        <g-icon v-if="icon && !loading" :icon="icon" class="icon"></g-icon>
        <g-icon class="loading icon" icon="loading" v-if="loading"></g-icon>
        <div class="icon-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './Icon'

    export default {
        components:{
            'g-icon': Icon
        },
        props: {
            icon: {
                type: String
            },
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value === 'left' || value === "right"
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        > .icon {
            order: 1;
            margin-right: 0.3em;

        }
        > .loading{
            animation: spin 2s infinite linear;
        }
        > .icon-content{
            order: 2;
        }
        &:hover {
            border-color: var(--border-color-hover)
        }

        &:active {
            background-color: var(--button-active-bg)
        }

        &:focus {
            outline: none;
        }
        &.icon-right {
            > .icon {
                order: 2;
            }
            > .icon-content {
                margin-right: 0.3em;
                order: 1;
            }
        }

    }
</style>