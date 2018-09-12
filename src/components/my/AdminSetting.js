/**
 * Created by 19848 on 2018/9/12.
 */
import React from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {Flex, WingBlank, List, Icon, WhiteSpace, Toast} from "antd-mobile"

const {Item} = List;
const Base_url = "https://wagnxx.net.cn/react/images/img_wx/";

function showToast() {
    Toast.info("改模块暂未开发，敬请期待")
}

const data = {
    items: [
        {thumb: "wx_qianbao.png", tit: "账号与安全", wsps: true},
        {thumb: "wx_shoucang.png", tit: "新消息通知", wsps: false},
        {thumb: "wx_xiangce.png", tit: "隐私", wsps: false},
        {thumb: "wx_kabao.png", tit: "通用", wsps: true},
        {thumb: "wx_biaoqing.png", tit: "帮助与反馈", wsps: false},
        {thumb: "wx_biaoqing.png", tit: "关于 grocery", wsps: true},


    ]
};

var _data = data.items.map((ite, ind) => {
    ite.thumb = Base_url + ite.thumb;
    ite.ind = ind
    return ite
})


const ListItem = ({thumb, tit, wsps, ind}) => {
    return (
        <div key={ind}>
            <List>
                <Item
                    // thumb={thumb}
                    arrow="horizontal"
                    onClick={() => {
                        showToast()

                    }}
                >
                    {tit}</Item>
            </List>
            {!!wsps && <WhiteSpace size={"lg"}/>}

        </div>
    );
};


class AdminSetting extends React.Component {
    render() {
        return (
            <div className={"home-contanier"}>


                {_data.map((ind, ite) => {
                    return ListItem(ind)
                })}

                <List>
                    <Item
                        onClick={() => {
                            this.props.loginOut();
                            window.location.hash = "#/my/login"
                        }}

                    >
                        <div style={{textAlign: "center", color: "#000"}}>退出登陆</div>
                    </Item>
                </List>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        LOGIN: state.loginReducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loginOut: bindActionCreators(longinCreator, dispatch)
    }
}

function longinCreator() {
    return {type: "LOGIN_OUT"}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSetting);