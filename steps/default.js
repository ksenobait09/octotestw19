import step from './decorator'

export default class DefaultSteps {
	constructor(page) {
		this.page = page;
		this.pane = 3;
	}

	@step('Открыть страницу')
	open(path) {
		browser.url(path);
	}

    @step('Переадресация на QA')
	redirectToQa() {
		this.open('/bundles/page.qa.html');
	}
}
