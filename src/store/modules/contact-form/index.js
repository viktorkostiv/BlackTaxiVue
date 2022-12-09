import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            contacts: [
                //     {
                //     id: 'm1',
                //     name: 'Name',
                //     email: 'Email@email.com',
                //     message: 'Message',
                //     }
            ]
        };
    },
    actions,
};