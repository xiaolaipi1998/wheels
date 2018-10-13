<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toast"
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0, 0.75);
    $toast-broder-radius: 4px;
    $toast-box-shadow: rgba(0,0,0, 0.50);
    .toast{
        font-size: $font-size;line-height: 1.8;height: $toast-height;border: 1px solid red;position: fixed;top: 0;
        left: 50%;transform: translateX(-50%);display: flex;align-items: center;color: white;
        background: $toast-bg;
        border-radius: $toast-broder-radius;
        box-shadow: $toast-box-shadow;
        padding: 0 16px;
    }

</style>