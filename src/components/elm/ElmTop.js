/**
 * Created by 19848 on 2018/9/11.
 */
import React from 'react';
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import ElmTopItem from "./ElmTopItem"

import ms from "../../loc_source/img/elm_meishi.webp"
import wc from "../../loc_source/img/elm_wancan.webp";
import cs from "../../loc_source/img/elm_bianlichaoshi.webp";
import sg from "../../loc_source/img/elm_shuiguo.webp";
import yljk from "../../loc_source/img/elm_yiyaojiankang.webp";
import lmxh from "../../loc_source/img/elm_langmanxianhua.webp";
import ccsx from "../../loc_source/img/elm_chufangshengxian.webp";
import dfxc from "../../loc_source/img/elm_difangxiaochi.webp";
import mlt from "../../loc_source/img/elm_malatang.webp";


const itemLists=[
    {uri:ms,tit:"美食"},
    {uri:wc,tit:"晚餐"},
    {uri:cs,tit:"便利超市"},
    {uri:sg,tit:"水果"},
    {uri:yljk,tit:"医疗健康"},
    {uri:lmxh,tit:"浪漫鲜花"},
    {uri:ccsx,tit:"橱窗生鲜"},
    {uri:dfxc,tit:"地方小吃"},
    {uri:mlt,tit:"麻辣烫"},
    {uri:ccsx,tit:"地方菜系"},
];

export default class ElmTop extends React.Component {
    render() {
        return (
            <div>
                <Flex justify={"start"} wrap={"wrap"}>
                    {
                        itemLists.map((item,ind)=>{
                            return(<ElmTopItem imgSrc={item.uri} tit={item.tit} key={ind}/>)
                        })
                    }
                </Flex>
                {/*推荐位*/}
                <WingBlank size={"small"}>
                    <WhiteSpace size={"lg"}/>
                <div className={"elm_recommended"}>
                    <Flex className={"elm_recommended_cont"} justify={"between"} align={"center"}>
                        <div className={"elm_recommended_l"}>
                            <h3>品质套餐</h3>
                            <span>搭配齐全吃得好</span><br/>
                            <a href="javascript:void(0)">立即抢购</a>
                        </div>
                        <div className={"elm_recommended_r"}>
                            <img src={require("../../loc_source/img/elm_recommend.webp")} alt="recomend"/>
                        </div>
                    </Flex>
                </div>
                </WingBlank>
                {/*推荐位*/}
            </div>
        );
    }
}

 