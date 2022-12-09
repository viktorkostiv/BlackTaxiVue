export default {
    addDestinations(state, payload) {
        state.destinations.push(payload);
    },
    setDestinations(state, payload) {
        state.destinations = payload;
    },
};