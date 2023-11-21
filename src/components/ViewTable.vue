<template>
    <div v-if="workers.length !== 0">
        <h3>Список сотрудников</h3>
        <table class="workers">
            <tr>
                <th v-for="(thName,index) in tableNamingTH" v-bind:key="thName+index">
                    {{thName}}
                </th>
            </tr>

            <tr v-for="(worker, index) in workers" :key="worker.id">
                <td><custom-input class="viewInput" :modelValue="worker.firstName" @input="changeWorkerData($event, index, Object.keys(worker)[1])"/></td>
                <td><custom-input class="viewInput" :modelValue="worker.secondName" @input="changeWorkerData($event, index, Object.keys(worker)[2])"/></td>
                <td><custom-input class="viewInput" :modelValue="worker.exp" @input="changeWorkerData($event, index, Object.keys(worker)[3])"/></td>
                <td><custom-input class="viewInput" :modelValue="worker.old" @input="changeWorkerData($event, index, Object.keys(worker)[4])"/></td>
                <td><custom-input class="viewInput" :modelValue="worker.address" @input="changeWorkerData($event, index, Object.keys(worker)[5])"/></td>
                <td><custom-button @click="DeleteWorker(worker.id)" class="delete">❌</custom-button></td>
            </tr>
        </table>
    </div>
    <h3 v-else>Список сотрудников пуст</h3>
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
            changeWorkerData(event, index, key) {
                this.$store.commit('changeWorkerData',
                    {
                        index: index,
                        key: key,
                        value: key == 'exp' || key == 'old'
                            ?
                            isNaN(parseInt(event.target.value)) ? null : parseInt(event.target.value)
                            :
                            event.target.value == '' ? null : event.target.value
                    })
            },
            DeleteWorker(id) {
                this.$emit('remove', id)
            }
        },
        emits: ['remove']
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
