import DefaultPage from '../default';

class SettingsPanelPage extends DefaultPage {
    constructor() {
        super('settings')
    }

    get locators() {
        const container = '.settings__index__widgets';
        const cleanmaster = `${container} [data-name="cleanmaster"]`;

        return {
            container,
            cleanmaster,
        }
    }

    /**
     * Открыть cleanmaster
     */
    openCleanmaster() {
        const locator = this.locators.cleanmaster;
        this.page.waitForVisible(locator);
        this.page.click(locator);
    }

}

export default new SettingsPanelPage();
