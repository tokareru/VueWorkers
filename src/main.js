import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI";
import router from "@/router/router";
import store from "@/store";

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});
app.config.devtools = true;
app.use(store).use(router).mount('#app');
