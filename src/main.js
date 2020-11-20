import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from "./components/Index";
import Login from "./components/Login";
import Browse from "./components/Browse";
import WrongPage from "./components/WrongPage";
import Person from "./models/Person";



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', name: "login", component: Login},
    {path: '/index', name: "index", component: Index},
    {path: '/browse', name: "browse", component: Browse},
    {path: '/*', name: "WrongPage", component: WrongPage},

];

const store = new Vuex.Store({
    state: {
        persons: [new Person("John","Doe", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"), 
        new Person("Gordon","Freeman","https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
        new Person("Bruce","Wayne","https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")]

    },
    mutations: {
    },
    getters: {
        itemIsSelected: (state) => (id) => {
            return state.cart.selected.indexOf(id) > -1
        }, getPerson: (state)=> (id) => state.persons[id] ,
            getPersons: (state)=> state.persons,
        
    },
    actions: {
        

    }
});

const router = new VueRouter({routes});


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

