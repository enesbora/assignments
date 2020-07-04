class LocalDataController {

    /**
     * This method saves the customers to the local storage that we 
     * send as a parameter.
     * @param {Array} pCustomers 
     */
    static setLocalData(pCustomers) {
        pCustomers.forEach(customer => {
            localStorage.setItem(customer.id, JSON.stringify(customer));
        });
    }

    /**
     * This method pushes the customers to an array that are saved in local storage.
     */
    static getLocalData() {
        const customers = [];
        for (let index = 0; index < localStorage.length; index++) {
            const customer = JSON.parse(localStorage.getItem(localStorage.key(index)));
            customers.push(customer);
        }
        return customers;
    }
}