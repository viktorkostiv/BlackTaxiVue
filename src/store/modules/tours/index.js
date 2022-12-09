import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            tours: [],
            from: '',
            to: '',
            passengers: '',
            price: 0,
        };
    },
    actions,
    mutations,
    getters
}