import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from "./components/Index";
import Login from "./components/Login";
import Browse from "./components/Browse";
import WrongPage from "./components/WrongPage";
import axios from 'axios'



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    { path: '/', name: "login", component: Login },
    { path: '/index', name: "index", component: Index },
    { path: '/browse', name: "browse", component: Browse },
    { path: '/*', name: "WrongPage", component: WrongPage },

];

const store = new Vuex.Store({
    state: {
        persons: [],
    },
    mutations: {
        SET_PERSONS(state, persons) {
            state.persons = persons
        }
    },
    getters: {
        itemIsSelected: (state) => (id) => {
            return state.cart.selected.indexOf(id) > -1
        },

    },
    actions: {
        getPersons({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PERSONS', response.data)
                })
        }


    },


});

const router = new VueRouter({ routes });


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

