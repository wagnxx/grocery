import React from "react"
import {List, WhiteSpace, Toast} from 'antd-mobile';

const Item = List.Item;

const Base_url = "https://wagnxx.net.cn/react/images/img_wx/";

const data = {
    items: [
        {thumb: "wx_saoyisao.png", tit: "扫一扫", wsps: false},
        {thumb: "wx_yaoyiyao.png", tit: "摇一摇", wsps: true},
        {thumb: "wx_kanyikan.png", tit: "看一看", wsps: false},
        {thumb: "wx_souyisou.png", tit: "搜一搜", wsps: true},
        {thumb: "wx_fujinderen.png", tit: "附近的人", wsps: false},
        {thumb: "wx_piaoliuping.png", tit: "漂流瓶", wsps: true},
        {thumb: "wx_gouwu.png", tit: "购物", wsps: false},
        {thumb: "wx_youxi.png", tit: "游戏", wsps: true},
        {thumb: "wx_xiaochengxu.png", tit: "小程序", wsps: false},
    ]
};

let _data = data.items.map((ite, ind) => {
    ite.thumb = Base_url + ite.thumb;
    return ite
});

function showToast() {
    Toast.info('该模块需要登陆才能查看，想继续查看请点击my 项登陆', 2);
}


const ListItem = ({thumb, tit, wsps}) => {
    return (
        <div key={thumb}>

            <List>
                <Item thumb={thumb}
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

export default class FriendCustom extends React.Component {
    render() {

        return (
            <div className={"friend-container"}>
                {_data.map((ind, ite) => {
                    return ListItem(ind)
                })}

            </div>
        );
    }
}