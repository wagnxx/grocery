import React, { Component } from 'react'
import PropTypes from 'prop-types'
function themeReducer (state,action) {
    if(!state) return{
        themeName :"Red Theme",
        themeColor :"red"
    }
    switch (action.type){
        case "UPTE_THEME_NAME":
            return {...state,themeName:action.themeName};
        case "UPTE_THEME_COLOR":
            return {...state,themeColor:action.themeColor};
        default:
            return state;
    }
}
function createStore(reducer){
    let state = null;
    const listeners = [];
    const subscribe =(listener)=>listeners.push(listener);
    const getState =()=>state;
    const dispatch = (action)=>{
        state = reducer(state,action);
        listeners.forEach(l=>l());
    }
    dispatch({})
    return {getState,dispatch,subscribe};
}

const connect = (mapStateToProps)=>(WrappedComponent)=>{
    class Connect extends React.Component{
        static contextTypes = {
            store:protoTypes.Object
        }
        render(){
            const store = this.context;
            const stateProps = store.getState();
            return <WrappedComponent prop={...stateProps}/>
        }
    }
    return Connect;
}
//
// const mapStateToProps = (state)=>{
//     return{
//         themeColor:state.themeColor
//     }
// }
// Header = Connect(mapStateToProps)(Header);












