import Vue from 'vue';
import Vuex from 'vuex';

// imported modules
import tender from './modules/agent';
import accounts from './modules/accounts'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tender,
        accounts
        

    }
});

export default store 