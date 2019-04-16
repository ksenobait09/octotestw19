import main from '../../steps/main';
import settings from "../../steps/settings/index";
import settingsSidebar from "../../steps/settings/sidebar";

// Тест, проверяющий наличие и кликабельность Cleanmaster в сайдбаре настроек
describe('2', () => {
    it('Открыть раздел cleanmaster из сайдбара в настройках', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        settings.open("https://e.mail.ru/settings?octaviusMode=1");
        settingsSidebar.openCleanmaster();
    });
});
