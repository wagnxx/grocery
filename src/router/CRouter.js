import React from 'react';
import { Router, Route,hashHistory ,IndexRoute} from 'react-router'

import App from '../App';
// import FlexExample from "../components/Test"
import ElmPage from "../components/elm/ElmPage"
import KoubeiCustom from "../components/koubei/KoubeiCustom"
import FriendCustom from "../components/friend/FriendCustom"
import BasicInputExampleWrapper from "../components/my/FormDateCustom"
import HomeList from "../components/my/HomeList"
import Setting from "../components/my/Setting"
import AdminSetting from "../components/my/AdminSetting"

import WalletIndex from "../pages/wallet/WalletIndex"
import Result from "../components/result/Result"
import NotFound from "../components/NotFound"


class CRouter extends React.Component{

    requireAuthentication=(component)=>{
        let loginState=window.localStorage.getItem("loginState");
        if(loginState==="true"){
           window.location.hash="#/my/homelist";
           return <HomeList/>;
        }
        window.location.hash="#/my/login";
        return component;
    }
    render(){
        return(
            <Router history={hashHistory}>
                <Route path={"/"} component={App}>
                    <IndexRoute path="" component={ElmPage}/>
                    <Route path="elm" component={ElmPage} />
                    <Route path="koubei" component={KoubeiCustom} />
                    <Route path="friend" component={FriendCustom} />

                    {/*<Redirect path={"my"} to={"/my/login"}/>*/}
                    <Route path={"my"}>
                        <Route path="login" component={()=>this.requireAuthentication(<BasicInputExampleWrapper/>)}/>
                        <Route path={"homelist"} component={()=>this.requireAuthentication(<BasicInputExampleWrapper/>)}/>
                        <Route path={"setting"} component={Setting}/>
                        <Route path={"adminSetting"} component={AdminSetting}/>
                        <Route path={"wallet"} component={WalletIndex}/>
                    </Route>
                    <Route path="result" component={Result} />
                    <Route path="*" component={NotFound} />

                </Route>

            </Router>
        );
    }
}

export default CRouter;

