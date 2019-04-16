import {createStep} from 'wdio-allure-reporter'

const FAILED = 'failed';
const PASSED = 'passed';

export default function step(stepTitle) {

    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function () {
            let stepStatus = PASSED;
            let body = `${target.constructor.name}.${propertyKey}(${[...arguments].join(', ')})`;
            let error;

            try {
                originalMethod.apply(this, arguments);
            } catch (e) {
                error = e;
                stepStatus = FAILED;
            }

            createStep(stepTitle, body, 'attachment', stepStatus);

            if (error != null) {
                browser.pause(1000);
                throw error;
            }
        };

        return descriptor;
    }

}
