import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nav: false,
        sub: false
    },
    getters: {
        getnav: state => {
            return state.nav
        },
        getsub: state => {
            return state.sub
        },
    },
    mutations: {
        setnav: (state, type) => {
            state.nav = type
        },
        setsub: (state, type) => {
            state.sub = type
        },
    },
    actions: {

    }
})