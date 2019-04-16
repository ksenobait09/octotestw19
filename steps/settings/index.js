import DefaultSteps from '../default';
import page from '../../pages/settings/index';
import step from "../decorator";

class SettingsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }
}

export default new SettingsSteps();
