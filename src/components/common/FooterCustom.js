/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import {connect} from "react-redux";
import {TabBar} from 'antd-mobile';

const BASE_URL="http://wagnxx.net.cn/react/images/img_wx/"


const fx1 = BASE_URL+"footer_faxian.png";
const fx2 = BASE_URL+"footer_faxianxuanzhong.png";
const wo1 = BASE_URL+"footer_wode.png";
const wo2 = BASE_URL+"footer_wodedangxuan.png";

class FooterCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'elm',
            hidden: false,
            fullScreen: false,
        };
    }

    componentDidMount() {
        if( localStorage.getItem("selectedTab") !== null ){
            this.setSatateHandle(localStorage.getItem("selectedTab"))
        }

    }


    componentWillReceiveProps(nextProps) {
        this.setSatateHandle(nextProps.tabNameRoutes[1])
    }

    setSatateHandle = (v) => {
        this.setState({
            ...this.state,
            selectedTab: v,

        })
    }

    handlePress = (tabname) => {

        window.location.hash = "/" + tabname
        localStorage.setItem("selectedTab", tabname);
        if (tabname === "my/login") {
            tabname = "my"
        }
        // return false
        // if(tabname==='koubei'){
        //     window.location.reload()
        // }
        setTimeout(() => {
            this.setState({
                selectedTab: tabname,
            });
        })

        // hashHistory.listenBefore(l=>console.log(l))
    }


    render() {
        return (

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                tabBarPosition="bottom"

            >
                <TabBar.Item
                    title="elm"
                    key="elm"
                    icon={<div

                        style={{
                            width: '22px',
                            height: '22px',
                            opacity: "0.5",
                            background: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530981127202&di=999c284c1b39294b457bb03b969c1982&imgtype=0&src=http%3A%2F%2Fwww.114cf.cn%2Fadmin_system%2Fuplodeimg%2F1498805296.jpeg) center center /  21px 21px no-repeat'
                        }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        opacity: "1",
                        background: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530981127202&di=999c284c1b39294b457bb03b969c1982&imgtype=0&src=http%3A%2F%2Fwww.114cf.cn%2Fadmin_system%2Fuplodeimg%2F1498805296.jpeg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={this.state.selectedTab === 'elm'}
                    badge={1}
                    onPress={this.handlePress.bind(this, "elm")}
                    data-seed="logId"
                >


                </TabBar.Item>

                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="Koubei"
                    key="Koubei"
                    badge={'new'}
                    selected={this.state.selectedTab === 'koubei'}
                    onPress={this.handlePress.bind(this, "koubei")}
                    data-seed="logId1"
                >


                </TabBar.Item>

                <TabBar.Item
                    icon={
                        <img src={fx1} alt="fa1"
                             style={
                                 {
                                     width: "22px",
                                     height: "22px"
                                 }
                             }
                        />
                    }
                    selectedIcon={

                        <img src={fx2} alt="fa2"
                             style={
                                 {
                                     width: "22px",
                                     height: "22px"
                                 }
                             }
                        />
                    }
                    title="playfriend"
                    key="Friend"
                    dot
                    selected={this.state.selectedTab === 'friend'}
                    onPress={this.handlePress.bind(this, "friend")}
                >


                </TabBar.Item>

                <TabBar.Item
                    icon={
                        <img src={wo1} alt="wo1"
                             style={
                                 {
                                     width: "22px",
                                     height: "22px"
                                 }
                             }
                        />
                    }
                    selectedIcon={
                        <img src={wo2} alt="wo2"
                             style={
                                 {
                                     width: "22px",
                                     height: "22px"
                                 }
                             }
                        />
                    }
                    title="My"
                    key="my"
                    selected={this.state.selectedTab === 'my'}
                    onPress={this.handlePress.bind(this, "my/login")}
                >

                </TabBar.Item>

            </TabBar>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        tabName: state.footerSelct.seleTabName,
        tabNameRoutes: state.routetReducer.routes
    }
}

export default connect(mapStateToProps, null)(FooterCustom)


