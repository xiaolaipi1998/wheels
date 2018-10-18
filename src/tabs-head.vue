<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="settings">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject: ['eventBus'],
        created(){

        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $tab-margin-right: 10px;
    .tabs-head {
        display: flex;
        min-height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        margin-right: $tab-margin-right;
        > .settings {
            margin-left: auto;

        }
    }
</style>