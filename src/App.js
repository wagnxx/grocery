import React, {Component} from 'react';
import {connect} from "react-redux";
import HeaderCustom from "./components/common/HeaderCustom"
import FooterCustom from "./components/common/FooterCustom"

class App extends Component {
    componentWillReceiveProps(nextProps) {

        const loginState = this.props.LOGIN.LOGIN;
        window.localStorage.setItem("loginState", loginState)
        let routes = nextProps.routes, len = routes.length, route_arr = [];
        for (let i = 0; i < len; i++) {
            route_arr.push(routes[i].path)
        }
        this.props.dispatchRouter(route_arr)

    }

    render() {
        return (
            <div className={"App"}>
                <HeaderCustom/>
                <div className={"App-child"}>

                    {this.props.children}
                </div>
                <div className={"footer-container"}>
                    <FooterCustom/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        LOGIN: state.loginReducer
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchRouter: r => dispatch({type: "ROUTES_CHANGE", routes: r}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
