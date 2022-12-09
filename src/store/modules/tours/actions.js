export default {
    async registerTour(context, data) {
        const formId = new Date().toISOString().replace('.', '-');
        const dataBase = `https://blacktaxi-eb310-default-rtdb.firebaseio.com/tours/${formId}.json`;
        const formData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message,
            from: data.from,
            to: data.to,
            passengers: data.passengers,
            minPrice: data.minPrice,
            maxPrice: data.maxPrice,
        };

        const response = await fetch(
            `${dataBase}`, {
                method: 'PUT',
                body: JSON.stringify(formData),
            }
        );

        if (!response.ok) {
            console.log('Contact Form Error !!!');
        }
    },
    registerFrom(context, fromVal) {
        const from = fromVal;
        context.commit('registerFrom', from);
        setTimeout(() => { 
            context.commit('registerFrom', '');
        }, 2000);
    },
    registerTo(context, toVal) {
        const to = toVal;
        context.commit('registerTo', to);
        setTimeout(() => { 
            context.commit('registerTo', '');
        }, 2000);
    },
    registerPassengers(context, passengersVal) {
        const passengers = passengersVal;
        context.commit('registerPassengers', passengers);
        setTimeout(() => {
            context.commit('registerPassengers', '');
        }, 2000);
    },
    registerPrice(context, priceVal) {
        const price = priceVal;
        context.commit('registerPrice', price);
        setTimeout(() => {
            context.commit('registerPrice', 0);
        }, 2000);
    },
};