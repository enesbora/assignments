class CustomerController {

    /**
     * This method returns the customer which has an id that we 
     * send as a parameter.
     * @param {Number} pId 
     */
    static getCustomerById(pId) {
        let clickedCustomer;
        customers.forEach(customer => {
            if (customer.id == pId) {
                clickedCustomer = customer;
            }

        });
        return clickedCustomer;
    }
}