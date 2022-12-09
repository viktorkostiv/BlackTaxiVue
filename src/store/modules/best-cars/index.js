import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            cars: [
            //     {
            //     id: 'c1',
            //     title: 'Mercedes S-Class Sedan',
            //     price: 100,
            //     persons: 2,
            //     description: 'With a new S-Class, the sun rises on a new era for the automobile. More thoughtful...',
            //     image: './src/assets/img/car1.png'
            //     }
            ]
        };
    },
    mutations,
    actions,
    getters
};