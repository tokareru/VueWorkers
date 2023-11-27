import {createStore} from 'vuex';
import {Modules} from "@/store/Modules";

export default createStore({

    modules : {
        post: Modules
    }
});
