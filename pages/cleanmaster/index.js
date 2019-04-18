import DefaultPage from '../default';

class CleanmasterPage extends DefaultPage {
    constructor() {
        super('settings')
    }

    get locators () {
        const container = '#SettingsCleanmaster';

        return {
            container,
        }
    }

    /**
     * Ждать до открытия cleanmaster
     *
     * @returns {boolean}
     */
    waitForOpenCleanmaster () {
        try {
            this.page.waitForVisible(this.locators.container);

            return true;
        } catch (err) {
            return false;
        }
    }
}

export default new CleanmasterPage();
