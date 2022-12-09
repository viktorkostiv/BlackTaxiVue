export default {
    async loadDestinations(context) {
        const response = await fetch(
            `https://blacktaxi-eb310-default-rtdb.firebaseio.com/destinations.json`
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const destinations = [];

        for (const key in responseData) {
            const destination = {
                id: key,
                title: responseData[key].title,
                price: responseData[key].price,
                desc: responseData[key].desc,
                image: responseData[key].image,
            };
            destinations.push(destination);
        }

        context.commit('setDestinations', destinations);
    }
};