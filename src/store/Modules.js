import axios from "axios";

export const Modules = {
    state: () => ({
        workers: [],
        tableNamingTH: []
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
        setTableNamingTH(state, payload) {
            const { data } = payload;
            state.tableNamingTH = data;
        },
        setWorkers(state, payload) {
            const { data } = payload;
            state.workers = data;
        },
        changeWorkerData(state, payload) {
            const { index, key, value } = payload;
            state.workers[index][key] = value;
        },
        AddNewWorker(state, payload) {
            //const { value } = payload;
            state.workers.push(payload);
        },
        deleteWorker(state, payload) {
            const { id } = payload;
            state.workers = state.workers.filter(w => w.id !== id);
        }
    },
    actions: {
        async fetchFromJSON({commit}) {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/tokareru/VueWorkers/db"); //"https://my-json-server.typicode.com/tokareru/VueWorkers/db"
                commit("setWorkers", {data:response.data.workers});
                commit("setTableNamingTH", {data:response.data.tableNamingTH});
            } catch(e) {
                console.log(e)
            }
        }


    }
};
