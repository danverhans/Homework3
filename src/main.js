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
        posts: [],
        user: []
    },
    mutations: {
        SET_PERSONS(state, persons) {
            state.persons = persons
        },
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_USER(state, user) {
            state.user = user
        }
    },

    actions: {
        getPersons({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PERSONS', response.data)
                })
        },
        getPosts({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/posts')
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
        },
        getUser({ commit }) {
            axios.get('https://private-anon-609e31d177-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('SET_USER', response.data)
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

