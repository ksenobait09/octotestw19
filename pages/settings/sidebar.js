import DefaultPage from '../default';

class SettingsSidebarPage extends DefaultPage {
    constructor() {
        super('settings')
    }

    get locators() {
        const container = '[data-name="b-nav-settings"]';
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

export default new SettingsSidebarPage();
