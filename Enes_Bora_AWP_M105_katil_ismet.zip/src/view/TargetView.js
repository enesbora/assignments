class TargetView {

    /**
     * This method renders targets of the customer that we send as a customer.
     * @param {Object} pCustomer 
     */
    static renderTargets(pCustomer) {
        let targetContainer = document.querySelector("#"); //I should write id of the targets in HTML file here.
        targetContainer.innerHTML = pCustomer.orders.map(target => {
            return `<li>${target}</li>`
        }).join("");
    }
}