export default {
    async registerContact(context, data) {
        const contactId = new Date().toISOString().replace('.', '-');
        const dataBase = `https://blacktaxi-eb310-default-rtdb.firebaseio.com/contacts/${contactId}.json`;
        const contactData = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        const response = await fetch(
            `${dataBase}`, {
                method: 'PUT',
                body: JSON.stringify(contactData),
            }
        );

        if (!response.ok) {
            console.log('Contact Form Error !!!');
        }
    }
};