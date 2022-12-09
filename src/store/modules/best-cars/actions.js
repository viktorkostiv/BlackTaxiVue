export default {
    async loadCars(context) {
        const response = await fetch(
            `https://blacktaxi-eb310-default-rtdb.firebaseio.com/cars.json`
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const cars = [];

        for (const key in responseData) {
            const car = {
                id: key,
                title: responseData[key].title,
                price: responseData[key].price,
                persons: responseData[key].persons,
                description: responseData[key].description,
                image: responseData[key].image,
            };
            cars.push(car);
        }

        context.commit('setCars', cars);
    }
};