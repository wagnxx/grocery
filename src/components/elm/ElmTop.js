/**
 * Created by 19848 on 2018/9/11.
 */
import React from 'react';
import {Flex, WhiteSpace, WingBlank} from 'antd-mobile';
import ElmTopItem from "./ElmTopItem"
const BASE_URL="http://wagnxx.net.cn/react/images/img_wx/"

const ms =BASE_URL+"elm_meishi.webp"
const wc =BASE_URL+"elm_wancan.webp";
const cs =BASE_URL+"elm_bianlichaoshi.webp";
const sg =BASE_URL+"elm_shuiguo.webp";
const yljk =BASE_URL+ "elm_yiyaojiankang.webp";
const lmxh =BASE_URL+ "elm_langmanxianhua.webp";
const ccsx =BASE_URL+ "elm_chufangshengxian.webp";
const dfxc =BASE_URL+ "elm_difangxiaochi.webp";
const mlt =BASE_URL+ "elm_malatang.webp";

const elm_recommend =BASE_URL+ "elm_recommend.webp";
const elm_barnner =BASE_URL+ "elm_barnner.webp";

const itemLists = [
    {uri: ms, tit: "美食"},
    {uri: wc, tit: "晚餐"},
    {uri: cs, tit: "便利超市"},
    {uri: sg, tit: "水果"},
    {uri: yljk, tit: "医疗健康"},
    {uri: lmxh, tit: "浪漫鲜花"},
    {uri: ccsx, tit: "橱窗生鲜"},
    {uri: dfxc, tit: "地方小吃"},
    {uri: mlt, tit: "麻辣烫"},
    {uri: ccsx, tit: "地方菜系"},
];

export default class ElmTop extends React.Component {
    render() {
        return (
            <div>
                <Flex justify={"start"} wrap={"wrap"}>
                    {
                        itemLists.map((item, ind) => {
                            return (<ElmTopItem imgSrc={item.uri} tit={item.tit} key={ind}/>)
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
                                <a >立即抢购</a>
                            </div>
                            <div className={"elm_recommended_r"}>
                                <img src={elm_recommend} alt="recomend"/>
                            </div>
                        </Flex>
                    </div>
                    <WhiteSpace size={"sm"}/>
                    <div className={"elm_barnner"}><img src={elm_barnner} alt=""/>
                    </div>
                </WingBlank>
                {/*推荐位*/}
            </div>
        );
    }
}

 