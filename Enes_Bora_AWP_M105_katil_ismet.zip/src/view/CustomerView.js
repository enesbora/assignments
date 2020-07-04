class CustomerWiew {

    /**
     * This method renders the costomers to the screen that we send as a parameter.
     * @param {Array} pCustomers 
     */
    renderCustomers(pCustomers) {
        let customerContainer = document.querySelector("#"); //I should write id of the customers in HTML file here.
        customerContainer.innerHTML = pCustomers.map(customers => {
            return `<li>${customer}</li>`
        }).join("");
    }
}