export default {
    addCars(state, payload) {
        state.cars.push(payload);
    },
    setCars(state, payload) {
        state.cars = payload;
    },
};