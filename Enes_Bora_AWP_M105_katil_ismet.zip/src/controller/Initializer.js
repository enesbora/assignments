class Initializer {

    /**
     * This method creates customers(array), targets(array) and the addresses(array) 
     * of the targets rondomly for once when the application first starts.
     */

    static createLocalData() {
        let customers = [];
        let numberOfCustomers = faker.random.number(3) + 1;

        for (let index = 0; index < numberOfCustomers; index++) {
            let customerId = faker.random.uuid();
            let customerName = faker.name.firstName() + " " + faker.name.lastName();

            let targets = [];
            let numberOfTargets = faker.random.number(5) + 1;

            for (let index = 0; index < numberOfTargets; index++) {
                let targetId = faker.random.uuid();
                let targetName = faker.name.firstName() + " " + faker.name.lastName();
                let addresses = [];
                let numberOfAddresses = faker.random.number(3) + 1;

                for (let index = 0; index < numberOfAddresses; index++) {
                    let address = faker.address.streetAddress();
                    addresses.push(address);
                }
                let target = new Target(targetId, targetName, addresses, false);
                targets.push(target);
            }
            let customer = new Customer(customerId, customerName, targets);
            customers.push(customer);
        }
        return customers;
    }
}