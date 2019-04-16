import DefaultSteps from '../default';
import page from '../../pages/settings/panel';
import step from "../decorator";

class SettingsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    @step('Панель: Открыть cleanmaster')
    openCleanmaster() {
        this.page.openCleanmaster();
    }
}

export default new SettingsSteps();
