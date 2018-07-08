/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import { TabBar } from 'antd-mobile';
import {  Link,hashHistory } from 'react-router'
export default class FooterCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }
    handlePress=(tabname)=>{
        this.setState({
            selectedTab: tabname,
        });
        window.location.hash="/"+tabname
        console.log(this.state.selectedTab)
        hashHistory.listenBefore(l=>console.log(l))
    }


    render() {
        return   (

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="bottom"

                >
                    <TabBar.Item
                        title="饿了么"
                        key="elm"
                        icon={<div

                            style={{
                            width: '22px',
                            height: '22px',
                            opacity:"0.5",
                            background: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530981127202&di=999c284c1b39294b457bb03b969c1982&imgtype=0&src=http%3A%2F%2Fwww.114cf.cn%2Fadmin_system%2Fuplodeimg%2F1498805296.jpeg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            opacity:"1",
                            background: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530981127202&di=999c284c1b39294b457bb03b969c1982&imgtype=0&src=http%3A%2F%2Fwww.114cf.cn%2Fadmin_system%2Fuplodeimg%2F1498805296.jpeg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'elm'}
                        badge={1}
                        onPress={this.handlePress.bind(this,"elm")}
                        data-seed="logId"
                    >


                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'koubei'}
                        onPress={this.handlePress.bind(this,"koubei")}
                        data-seed="logId1"
                    >


                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'friend'}
                        onPress={this.handlePress.bind(this,"friend")}
                    >


                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={this.handlePress.bind(this,"my/login")}
                    >

                    </TabBar.Item>
                </TabBar>

        );

    }
}
