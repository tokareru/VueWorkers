<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "CustomButton"
    }
</script>

<style scoped>
    .btn {
        background:none;
        border: 1px solid teal;
    }

    .open {
        float: right;
        margin-top: 10px;
    }

    .NewWorker {
        float: right;
        margin-top: 20px;
    }
</style>
