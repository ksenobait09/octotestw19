import settings from "../../steps/settings/index";
import settingsPanel from "../../steps/settings/panel";
import {auth} from "./constants";

// Тест, проверяющий наличие и кликабельность Cleanmaster в панели настроек
describe('1', () => {
    beforeEach(auth);

    it('Открыть раздел cleanmaster из панели в настройках', () => {
        settings.open("https://e.mail.ru/settings?octaviusMode=1");
        settingsPanel.openCleanmaster();
    });
});
