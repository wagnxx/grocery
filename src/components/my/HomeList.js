/**
 * Created by 19848 on 2018/7/8.
 */
import React from 'react';
import {connect} from "react-redux"

import {Flex, WingBlank, List, Icon, WhiteSpace} from "antd-mobile"

const {Item} = List;
const Base_url = "https://wagnxx.net.cn/react/images/img_wx/";

const data = {
    items: [
        {thumb: "wx_qianbao.png", tit: "钱包", wsps: true},
        {thumb: "wx_shoucang.png", tit: "收藏", wsps: false},
        {thumb: "wx_xiangce.png", tit: "相册", wsps: false},
        {thumb: "wx_kabao.png", tit: "卡包", wsps: false},
        {thumb: "wx_biaoqing.png", tit: "表情", wsps: true},
        {thumb: "wx_shezhi.png", tit: "设置", wsps: true},

    ]
};

let _data = data.items.map((ite, ind) => {
    ite.thumb = Base_url + ite.thumb;
    return ite
});

const ListItem = ({thumb, tit, wsps}) => {
    return (
        <div key={thumb}>

            <List>
                <Item thumb={thumb}
                      arrow="horizontal"
                      onClick={() => {
                          // showToast()
                          let tz_url;
                          if(thumb.indexOf("wx_qianbao.png")!==-1){

                              tz_url="#/my/wallet"
                          }else {

                              tz_url= "#/my/setting"
                          }
                          window.location.hash = tz_url
                          // console.log(this,tz_url)
                      }}
                >
                    {tit}</Item>
            </List>
            {!!wsps && <WhiteSpace size={"lg"}/>}

        </div>
    );
};

class HomeList extends React.Component {
    constructor() {
        super();
        this.state = {
            tel: "xxx--"
        }
    }

    componentDidMount() {
        let un = this.props.LOGIN.USER_NAME;
        this.setState({
            ...this.state,
            tel: un
        })
    }

    render() {
        return (
            <div className={"home-contanier"}>
                <List>
                    <WingBlank size={"sm"}>

                        <header>
                            <Flex
                                justify="between"
                            >

                                <img alt={"imgalt"} className={"headpic"}
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531062134114&di=0dcee1ab81ee27249cbd5a0ed126d20c&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F19%2F1352095613.jpg"/>
                                <Flex
                                    justify="between"
                                    style={{flexGrow: "1"}}
                                >
                                    <div className={"userName"}><span style={{fontSize: "1.2em"}}>邻家某王</span><br/>
                                        storeID: {this.state.tel}</div>
                                    <div className={"op-lit"}>
                                        <img alt={"imgalt"}
                                             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531064073043&di=415c8c49af35f9b189535bdf513190d4&imgtype=0&src=http%3A%2F%2F2414844.s21i-2.faiusr.com%2F3%2FABUIABADGAAgttnimAUo5tW5jwcwyAE4yAE.gif"
                                             className={"ewm-lit"}/>
                                        <Icon type={"right"}/>
                                    </div>
                                </Flex>
                            </Flex>
                        </header>
                    </WingBlank>
                </List>
                <WhiteSpace size={"lg"}/>
                {_data.map((ind, ite) => {
                    if (ite < 5) {
                        return ListItem(ind)
                    }
                    return "";
                })}
                <List>
                    <Item thumb={_data[5].thumb}
                          arrow="horizontal"
                          onClick={() => {
                              window.location.hash = "#/my/AdminSetting"
                          }}
                    >
                        {_data[5].tit}</Item>
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

export default connect(mapStateToProps, null)(HomeList);