/**
 * Created by 19848 on 2018/7/8.
 */
import React from 'react';
import {Flex,WingBlank ,List,Icon,WhiteSpace} from "antd-mobile"
const {Item} = List;
const Base_url = "https://wagnxx.net.cn/react/images/img_wx/"

const data = {
    items: [
        {thumb: "wx_qianbao.png",tit:"钱包",wsps:true},
        {thumb: "wx_shoucang.png",tit:"收藏",wsps:false},
        {thumb: "wx_xiangce.png",tit:"相册",wsps:false},
        {thumb: "wx_kabao.png",tit:"卡包",wsps:false},
        {thumb: "wx_biaoqing.png",tit:"表情",wsps:true},
        {thumb: "wx_shezhi.png",tit:"设置",wsps:true},

    ]
};

var _data = data.items.map((ite,ind)=>{
    ite.thumb = Base_url + ite.thumb;
    return ite
})


const ListItem = ({thumb,tit,wsps}) => {
    return (
        <div>

            <List>
                <Item thumb={thumb}
                      arrow="horizontal"
                      onClick={() => {
                          // showToast()
                      }}
                >
                    {tit}</Item>
            </List>
            {!!wsps && <WhiteSpace size={"lg"}/>}

        </div>
    );
};



export default class HomeList extends React.Component {
    render() {
        return (
            <div  className={"home-contanier"}>
                <List>
                    <WingBlank size={"sm"}>

                <header>
                    <Flex
                        justify="between"
                    >

                        <img className={"headpic"}
                             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531062134114&di=0dcee1ab81ee27249cbd5a0ed126d20c&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F19%2F1352095613.jpg"/>


                        <Flex
                            justify="between"
                            style={{flexGrow:"1"}}
                        >
                             <div className={"userName"}>用户名<br/>
                                storeID: 13254251525</div>
                            <div className={"op-lit"}>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531064073043&di=415c8c49af35f9b189535bdf513190d4&imgtype=0&src=http%3A%2F%2F2414844.s21i-2.faiusr.com%2F3%2FABUIABADGAAgttnimAUo5tW5jwcwyAE4yAE.gif" className={"ewm-lit"}/>
                                <Icon type={"right"}></Icon>
                            </div>
                        </Flex>
                    </Flex>
                </header>
                    </WingBlank>
                </List>
                <WhiteSpace size={"lg"}/>
                {_data.map((ind,ite)=>{
                    return ListItem(ind)
                })}
            </div >

        );
    }
}

