<template>
    <div class="inputList" v-for="(thName, index) in tableNamingTH" :key="index">
        <input v-if="index == 2 || index == 3" v-model.number="localWorker[Object.keys(localWorker)[index+1]]" :placeholder=thName>
        <input v-else v-model="localWorker[Object.keys(localWorker)[index+1]]" :placeholder=thName>
    </div>
    <button @click="AddNewWorkerEmit" class="ButtonNewWorker">Добавить</button>
</template>

<script>
    export default {
        name: "AddToTableForm",
        props: {
            tableNamingTH : {
                type:Array,
                required:true
            }
        },
        methods: {
            AddNewWorkerEmit() {
                this.localWorker.id = Date.now();
                this.$emit('createWorker', this.localWorker);
                this.localWorker = {
                    id:'',
                    firstName:"",
                    secondName:"",
                    exp:'',
                    old:'',
                    address:""
                }
            }
        },
        emits: ['createWorker'],
        data() {
            return {
                localWorker: {
                    id:'',
                    firstName:"",
                    secondName:"",
                    exp:'',
                    old:'',
                    address:""
                }
            }
        }
    }
</script>

<style scoped>
.inputList {
    width:100%;
}
.inputList input {
    width: calc(100% - 4px);
    padding: 0;
    margin-top:10px;
}
</style>
