class TargetController {

    /**
     * This method returns the customer which has an id that we 
     * send as a parameter.
     * @param {*} pId 
     */
    static getTargetById(pId) {
        let clickedTarget;
        customers.forEach(customer => {
            customers.targets.forEach(target => {
                if (target.id == pId) {
                    clickedTarget = target;
                }
            })

        });
        return clickedTarget;
    }
}