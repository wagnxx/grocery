/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class NavBarCustom extends React.Component {
    render() {
        return (
            <NavBar
                icon={<Icon type="left" />}
                mode="dark"
                leftContent="Back"
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >NavBar</NavBar>
        );
    }
}

