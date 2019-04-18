import settings from "../../steps/settings/index";
import settingsSidebar from "../../steps/settings/sidebar";
import {auth} from "./constants";

// Тест, проверяющий наличие и кликабельность Cleanmaster в сайдбаре настроек
describe('2', () => {
    beforeEach(auth);

    it('Открыть раздел cleanmaster из сайдбара в настройках', () => {
        settings.open("https://e.mail.ru/settings?octaviusMode=1");
        settingsSidebar.openCleanmaster();
    });
});
