export default {
    registerFrom(state, payload) {
        state.from = payload;
    },
    registerTo(state, payload) {
        state.to = payload;
    },
    registerPassengers(state, payload) {
        state.passengers = payload;
    },
    registerPrice(state, payload) {
        state.price = payload;
    },
};