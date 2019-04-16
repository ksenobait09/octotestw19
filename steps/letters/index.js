import DefaultSteps from '../default';
import page from '../../pages/letters';
import step from "../decorator";

class LettersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

    @step('Выбрать письмо с темой')
	openBySubject(subject) {
		this.page.hasLetterBySubject(subject);
		this.page.openBySubject(subject);
	}

}

export default new LettersSteps();
