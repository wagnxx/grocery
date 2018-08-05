import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link,hashHistory } from 'react-router'

import App from '../App';
import FlexExample from "../components/Test"
import ElmPage from "../components/elm/ElmPage"
import KoubeiCustom from "../components/koubei/KoubeiCustom"
import FriendCustom from "../components/friend/FriendCustom"
import BasicInputExampleWrapper from "../components/my/FormDateCustom"
import HomeList from "../components/my/HomeList"
import Setting from "../components/my/Setting"

import WalletIndex from "../pages/wallet/WalletIndex"

const CRouter = ()=>{
    return(
        <Router history={hashHistory}>
            <Route path={"/"} component={App}>

                <Route path="elm" component={ElmPage} />
                <Route path="koubei" component={KoubeiCustom} />
                <Route path="friend" component={FriendCustom} />
                <Route path={"my"}>
                    <Route path={"login"} component={BasicInputExampleWrapper}/>
                    <Route path={"homelist"} component={HomeList}/>
                    <Route path={"setting"} component={Setting}/>
                    <Route path={"wallet"} component={WalletIndex}/>
                </Route>


            </Route>

        </Router>
    );
}

export default CRouter;