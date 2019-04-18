import main from "../../steps/main";

const auth = () =>  {
    main.open('https://mail.ru');
    main.login(process.env.LOGIN, process.env.PASSWORD);
};

export {
    auth
}
