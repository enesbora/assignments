/**
 * This app is designed to allow Ismet "the shooter" to follow his customers' information more easily. 
 * 
 * User Interaction
 *      - Customers, Targets and addresses are randomly created and registered to the localStorage.
 *      - First, the list of clients is rendered.
 *      - If we click on a customer, Targets of the clicked customer would be listed.
 *      - If we click on an Target, addresses of the Target would be shown on the addresses part.
 *      - If we click on a "DONE" button the relevant target would be lined-through.
 * 
 * Technical Analiysis
 *      - Models
 *          - We create Customer.js for modelling customer information.
 *          - We create Target.js for modelling target information.
 * 
 *      - Views
 *          - We create CustomerView.js to render customer information.
 *          - We create TargetView.js to render target information.
 *          - We create AddressView.js to render address information for each target.
 * 
 *      - Controllers
 *          - We create InitializerController.js to create fake data for customers, targets and addresses. * 
 *          - We create DBController.js to manage local storage.
 * 
 *          - We create CustomerController.js to encapsule fonctions about customers.
 * 
 *          - We create TargetController.js to encapsule fonctions about targets.
 */

/**
 * Creates random fake data and save to the local storage if local storage is emty
 */
if (localStorage.length === 0) {
    const customers = Initializer.createLocalData();
    LocalDataController.setLocalData(customers);
}

/**
 * Gets saved customers from local storage
 */
let customers = LocalDataController.getLocalData();

/**
 * Renders the customers to the screen.
 */
CustomerWiew.renderCustomers(customers);

/**
 * Here should be a function that renders the targets when we click 
 * on a customer.
 */

/**
 * Here should be a function that renders addresses when we click the address
 * button next to each target.
 */

/**
 * Here should be a function that overlines a target when we click on the target.
 * So we understand that the target mission has been accomplished.
 */