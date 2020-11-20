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
        posts: [],
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    },
    getters: {
        itemIsSelected: (state) => (id) => {
            return state.cart.selected.indexOf(id) > -1
        },
    },
    getters: {
        itemIsSelected: (state) => (id) => {
            return state.cart.selected.indexOf(id) > -1
        }, getPerson: (state) => (id) => state.persons[id],
        getPersons: (state) => state.persons,
        getPosts: (state) => state.posts,
        getPost: (state) => (id) => state.post[id],

    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_POSTS', response.data)
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

