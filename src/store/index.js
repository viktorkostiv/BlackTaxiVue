import { createStore } from 'vuex';

import carsModule from './modules/best-cars/index.js';
import destinationsModule from './modules/destinations/index.js';
import contactModule from './modules/contact-form/index.js';
import toursModule from './modules/tours/index.js';

const store = createStore({
    modules: {
        cars: carsModule,
        destinations: destinationsModule,
        contact: contactModule,
        tours: toursModule,
    }
});

export default store;