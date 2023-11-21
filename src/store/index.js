import {createStore} from 'vuex';

export default createStore({
    state: () => ({
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
    }),
    getters: {
        gettableNamingTH(state) {
            return state.tableNamingTH
        },

        getWorkers(state) {
            return state.workers
        }
    },
    mutations: {
        changeWorkerData(state, payload) {
            const { index, key, value } = payload;
            state.workers[index][key] = value;
        }
    },
    actions: {

    },
    modules : {

    }
});
