<template>
    <table class="workers">
        <tr>
            <th v-for="(thName,index) in tableNamingTH" v-bind:key="thName+index">
                {{thName}}
            </th>
        </tr>

        <tr v-for="(worker) in localWorkers" :key="worker.id">
            <td><custom-input class="viewInput" v-model="worker.firstName"/></td>
            <td><custom-input class="viewInput" v-model="worker.secondName"/></td>
            <td><custom-input class="viewInput" v-model.number="worker.exp"/></td>
            <td><custom-input class="viewInput" v-model.number="worker.old"/></td>
            <td><custom-input class="viewInput" v-model="worker.address"/></td>
            <td><custom-button @click="DeleteWorker(worker.id)" class="delete">❌</custom-button></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "ViewTable",
        props: {
            workers: {
                type:Array,
                required:true
            },
            tableNamingTH : {
                type:Array,
                required:true
            }
        },
        methods: {

            DeleteWorker(id) {
                this.$emit('remove', id)
            }
        },
        emits: ['remove'],
        computed: {
            localWorkers() {
                return this.workers;
            }
        }
    }
</script>

<style scoped>
    .workers {
        border:2px solid black;
        border-collapse: collapse;
        width:100%;
    }

    .workers tr {
        border: 2px solid black;
    }

    .delete {
        cursor:pointer;
    }
</style>
