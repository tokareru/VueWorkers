<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        methods: {
        },
        mounted() {
            this.$store.dispatch("fetchFromJSON")
        }
    }
</script>

<style>
    body {
        margin:0;
    }
</style>
