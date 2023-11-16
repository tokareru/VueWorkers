<template>
<div>
    <h3>Список сотрудников</h3>
    <view-table
            :workers="workers"
            :tableNamingTH="tableNamingTH"
            @remove="RemoveWorker"
    />
    <add-to-table-form
            @createWorker="AddNewWorker"
            :tableNamingTH="tableNamingTH"
    />
    <custom-button @click="Open" class="open">Создать</custom-button>
</div>
</template>

<script>
import ViewTable from "@/components/ViewTable";
import AddToTableForm from "@/components/AddToTableForm";

export default {
    components: {
        ViewTable, AddToTableForm
    },
    data() {
        return {
            workers: [
                {id:0, firstName:"Ivan",  secondName:"Ivanov", exp:1, old:20, address:"Istanbul"},
                {id:1, firstName:"Petr",  secondName:"Petrov", exp:4, old:25, address:"Izmir"},
                {id:2, firstName:"Vasya",  secondName:"Vasiliev", exp:9, old:30, address:"Alanya"}
            ],
            tableNamingTH: [
                "Имя",
                "Фамилия",
                "Опыт",
                "Возраст",
                "Адрес"
            ]
        }
    },
    methods: {
        Open() {

            /*const newWorker = {
                firstName:"Ivan",
                secondName:"Ivanov",
                exp:1,
                old:20,
                address:"Istanbul"
            };
            this.workers.push(newWorker);*/
        },

        AddNewWorker(localWorker) {
            this.workers.push(localWorker);
        },

        RemoveWorker(id) {
            this.workers = this.workers.filter(w => w.id !== id);
        }
    }
}
</script>

<style>

body {
    margin:0;
}


</style>
