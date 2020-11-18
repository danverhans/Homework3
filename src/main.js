import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from "./components/Index";
import Login from "./components/Login";
import Browse from "./components/Browse";
import WrongPage from "./components/WrongPage";



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', name: "login", component: Login},
    {path: '/index', name: "index", component: Index},
    {path: '/browse', name: "browse", component: Browse},
    {path: '/*', name: "WrongPage", component: WrongPage},

];

const router = new VueRouter({routes});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
