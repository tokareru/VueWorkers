<template>
    <div class="inputList" v-for="(thName, index) in tableNamingTH" :key="index+thName">
        <custom-input class="AddInput" v-if="index == 2 || index == 3" v-model.number="localWorker[Object.keys(localWorker)[index+1]]" :placeholder=thName />
        <custom-input class="AddInput" v-else v-model="localWorker[Object.keys(localWorker)[index+1]]" :placeholder=thName />
    </div>
    <custom-button @click="AddNewWorkerEmit" class="NewWorker">Добавить</custom-button>
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
</style>
