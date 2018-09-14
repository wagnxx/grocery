/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import {connect} from "react-redux";
import {NavBar, Icon} from 'antd-mobile';

class NavBarCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route_1: "",
            route_2: window.location.hash.replace(/^#\/|\/$/g, ''),
        }
    }

    routerUpDate(rt) {
        setTimeout(() => {
            let _routes = rt;
            let _route_len = _routes.length;

            this.setState({
                ...this.state,
                route_1: _routes[_route_len - 2],
                route_2: _routes[_route_len - 1],
            });
        }, 0)

    }

    componentWillReceiveProps(nextProps) {
        this.routerUpDate(nextProps.tabNameRoutes)
        if (this.state.route_2 === "koubei") {
            window.location.reload()
        }
    }

    clickHandle = () => {
        window.history.back();
    };

    render() {
        return (
            <NavBar
                icon={<Icon type="left" onClick={this.clickHandle}/>}
                mode="dark"
                leftContent={this.state.route_1 === "/" ? "" : this.state.route_1}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
            >{this.state.route_2 === "" ? "elm" : this.state.route_2}</NavBar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tabNameRoutes: state.routetReducer.routes
    }
}

export default connect(mapStateToProps, null)(NavBarCustom)
