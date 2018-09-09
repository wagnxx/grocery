/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import { SearchBar } from 'antd-mobile';
import NavBarCustom from "./NavBarCustom"
export default class HeaderCustom extends React.Component {
    state = {
        value: '',
    };
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };

    render() {
        return <div className={"header-container"}>
            <NavBarCustom/>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            />
        </div>
         ;
    }
}

