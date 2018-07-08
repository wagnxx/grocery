import React, {Component} from 'react';
import {Link} from 'react-router'
import HeaderCustom from "./components/common/HeaderCustom"
import FooterCustom from "./components/common/FooterCustom"

class App extends Component {
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

export default App;
