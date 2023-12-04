<template>
    <add-to-table-form
            @createWorker="AddNewWorker"
            :tableNamingTH="$store.getters.gettableNamingTH"
    />
</template>

<script>
    import AddToTableForm from "@/components/AddToTableForm";

    export default {
        name: "AddWorkerForm",
        components: {
            AddToTableForm
        },
        methods: {
            AddNewWorker(localWorker) {
                this.$store.commit('AddNewWorker', localWorker)
            }
        }
    }
</script>

<style scoped>

</style>
