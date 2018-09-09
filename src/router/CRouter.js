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

import WalletIndex from "../pages/wallet/WalletIndex"
import Result from "../components/result/Result"

const CRouter = ()=>{
    return(
        <Router history={hashHistory}>
            <Route path={"/"} component={App}>
                <IndexRoute path="" component={FriendCustom}/>
                <Route path="elm" component={ElmPage} />
                <Route path="koubei" component={KoubeiCustom} />
                <Route path="friend" component={FriendCustom} />
                <Route path={"my"}>
                    <Route path={"login"} component={BasicInputExampleWrapper}/>
                    <Route path={"homelist"} component={HomeList}/>
                    <Route path={"setting"} component={Setting}/>
                    <Route path={"wallet"} component={WalletIndex}/>
                </Route>
                <Route path="result" component={Result} />


            </Route>

        </Router>
    );
}

export default CRouter;