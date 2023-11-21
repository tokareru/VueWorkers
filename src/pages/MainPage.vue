<template>
    <div>
        <view-table
                :workers="$store.getters.getWorkers"
                :tableNamingTH="$store.getters.gettableNamingTH"
                @remove="RemoveWorker"
        />
        <custom-button @click="Open" class="open">Создать</custom-button>
    </div>
</template>

<script>
    import ViewTable from "@/components/ViewTable";
    //import AddToTableForm from "@/components/AddToTableForm";

    export default {
        components: {
            ViewTable
        },
        data() {
            return {
            }
        },
        methods: {
            Open() {

            },

            RemoveWorker(id) {
                this.workers = this.workers.filter(w => w.id !== id);
            }
        }
    }
</script>

<style>

</style>
