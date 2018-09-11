import { combineReducers } from 'redux';


 const FOOTER_BAR_ELM="FOOTER_BAR_ELM";
 const FOOTER_BAR_KOUBEI="FOOTER_BAR_KOUBEI";
 const FOOTER_BAR_FRIEND="FOOTER_BAR_FRIEND";
 const FOOTER_BAR_MY="FOOTER_BAR_MY";

 const ROUTES_CHANGE="ROUTES_CHANGE";


const reducerTest =(state=100,action)=>{
    switch (action.type){
        case "ADD":
            return state+1;
            break;
        case "INC":
            return state-1
            break;
        default :
            return state;
    }
}



const footerSelct =(state={seleTabName:"elm"},action)=>{
    switch (action.type){
        case FOOTER_BAR_ELM:
            return { ...state, seleTabName:"elm"}; break;
        case FOOTER_BAR_KOUBEI:
            return { ...state, seleTabName:"koubei"}; break;  
        case FOOTER_BAR_FRIEND:
            return { ...state, seleTabName:"friend"}; break;
        case FOOTER_BAR_MY:
            return { ...state, seleTabName:"my"}; break;
        default:
            return {...state};
    }
}

const routetReducer=(state={routes:['/','elm',""]},action)=>{
    switch (action.type){
        case ROUTES_CHANGE:
            window.a=action.routes;
            return{...state,routes:action.routes};break;
        default:
            return {...state};
    }

};


export default combineReducers({
    reducerTest,
    footerSelct,
    routetReducer,

});