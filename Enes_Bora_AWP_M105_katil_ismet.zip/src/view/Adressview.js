class AddressView {

    /**
     * This method renders the address of a target that we send as a parameter.
     * @param {Object} pTarget 
     */
    static renderAddresses(pTarget) {
        let addressContainer = document.querySelector("#"); //I should write the adresses in HTML file should here.
        addressContainer.innerHTML = pTarget.addresses.map(address => {
            return `<li>${address}</li>` // Should be completed
        }).join("")
    }
}