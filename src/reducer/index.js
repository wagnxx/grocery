import {combineReducers} from 'redux';


const FOOTER_BAR_ELM = "FOOTER_BAR_ELM";
const FOOTER_BAR_KOUBEI = "FOOTER_BAR_KOUBEI";
const FOOTER_BAR_FRIEND = "FOOTER_BAR_FRIEND";
const FOOTER_BAR_MY = "FOOTER_BAR_MY";

const ROUTES_CHANGE = "ROUTES_CHANGE";


const footerSelct = (state = {seleTabName: "elm"}, action) => {
    switch (action.type) {
        case FOOTER_BAR_ELM:
            return {...state, seleTabName: "elm"};
        case FOOTER_BAR_KOUBEI:
            return {...state, seleTabName: "koubei"};
        case FOOTER_BAR_FRIEND:
            return {...state, seleTabName: "friend"};
        case FOOTER_BAR_MY:
            return {...state, seleTabName: "my"};
        default:
            return {...state};
    }
}

const routetReducer = (state = {routes: ['/', 'elm', ""]}, action) => {
    switch (action.type) {
        case ROUTES_CHANGE:
            window.a = action.routes;
            return {...state, routes: action.routes};
        default:
            return {...state};
    }

};

export const LOGIN_IN = "LOGIN_IN";
export const LOGIN_OUT = "LOGIN_OUT";

const loginReducer = (state = {LOGIN: false, USER_NAME: "XXX"}, action) => {
    switch (action.type) {
        case LOGIN_IN:
            return {...state, LOGIN: true, USER_NAME: action.USER_NAME};
        case LOGIN_OUT:
            return {...state, LOGIN: false};
        default:
            return state;
    }

}

export default combineReducers({

    footerSelct,
    routetReducer,
    loginReducer

});