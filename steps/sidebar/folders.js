import DefaultSteps from '../default';
import page from '../../pages/sidebar/folders';
import step from "../decorator";

class FoldersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

    @step('Нажать на папку по ее имени')
	clickFolderByName(folderName) {
		this.page.clickFolderByName(folderName);
	}

}

export default new FoldersSteps();
