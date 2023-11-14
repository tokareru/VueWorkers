<template>
    <table class="workers">
        <tr>
            <th v-for="(thName,index) in tableNamingTH" v-bind:key="thName+index">
                {{thName}}
            </th>
        </tr>

        <tr v-for="worker in localWorkers" v-bind:key="worker.id">
            <td><input class="inputField" v-model="worker.firstName" @input="handleWorkerChange"></td>
            <td><input class="inputField" v-model="worker.secondName" @input="handleWorkerChange"></td>
            <td><input class="inputField" v-model.number="worker.exp" @input="handleWorkerChange"></td>
            <td><input class="inputField" v-model.number="worker.old" @input="handleWorkerChange"></td>
            <td><input class="inputField" v-model="worker.address" @input="handleWorkerChange"></td>
            <td><span @click="DeleteWorker" class="delete">❌</span></td>
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
            handleWorkerChange() {
                this.$emit('workerChange', this.localWorkers);
            },
            DeleteWorker() {
                console.log(this)
            }
        },
        emits: ['workerChange'],
        data() {
            return {
                localWorkers: structuredClone(this.workers) //full copy of obj from props/model to local
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

    .inputField {
        width:100%;
        border:none;
        text-align:center;
        padding: 0;
    }

    .delete {
        cursor:pointer;
    }
</style>
