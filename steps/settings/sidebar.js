import DefaultSteps from '../default';
import page from '../../pages/settings/sidebar';
import step from "../decorator";

class SettingsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    @step('Сайдбар: Открыть cleanmaster')
    openCleanmaster() {
        this.page.openCleanmaster();
    }
}

export default new SettingsSteps();
