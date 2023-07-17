import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            userIsAuthorized: false,
        }
    },
    mutations: {
        setUserIsAuthenticated(state, replacement){
            state.userIsAuthorized = replacement
        }
    }
})

export default store;