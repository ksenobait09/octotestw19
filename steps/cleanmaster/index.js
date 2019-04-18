import DefaultSteps from '../default';
import page from '../../pages/cleanmaster/index';
import step from "../decorator";

class CleanmasterSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    @step('Ждем открытия Cleanmaster')
    waitForOpenCleanmaster() {
        this.page.waitForOpenCleanmaster();
    }
}

export default new CleanmasterSteps();
