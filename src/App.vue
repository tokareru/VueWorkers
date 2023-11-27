<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        methods: {
            async fetchWorkers() {
                try {
                    const response = await axios.get()
                } catch(e) {
                    alert('error')
                }
            }
        }
    }
</script>

<style>
    body {
        margin:0;
    }
</style>
