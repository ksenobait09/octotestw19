import main from '../../steps/main';
import settings from "../../steps/settings/index";
import settingsPanel from "../../steps/settings/panel";

// Тест, проверяющий наличие и кликабельность Cleanmaster в панели настроек
describe('1', () => {
    it('Открыть раздел cleanmaster из панели в настройках', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        settings.open("https://e.mail.ru/settings?octaviusMode=1");
        settingsPanel.openCleanmaster();
    });
});
