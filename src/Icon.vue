<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: "Icon",
        props: {
            icon: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>