/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import {Toast} from 'antd-mobile';
import ElmList from "./ElmList"
import ElmTop from "./ElmTop"
import ElmRecommend from "./ElmRecommend"
import items from "../../utils/model2"

function showToast() {
    Toast.info('数据还未采集,敬请期待', 1);
}

const items_data = [
    {
        src: "https://fuss10.elemecdn.com/9/0c/948c1f6578c4bb879e7ebf718de63jpeg.jpeg",
        shopName: "必胜宅急送（福泉店）",
        star: 3,
        s: "3.21公里",
        t: "1小时30分钟",
        ser_pr: "9",
        count: "1331"
    },
    {
        src: "http://cangdu.org:8001/img/165ccbd0a1617654.png",
        shopName: "广州小龙虾",
        star: 4,
        s: "1.51公里",
        t: "1小时10分钟",
        ser_pr: "10",
        count: "366"
    },
    {
        src: "http://cangdu.org:8001/img/165cd39bb0c17667.jpg",
        shopName: "杂货店",
        star: 2,
        s: "0.82公里",
        t: "58分钟",
        ser_pr: "5",
        count: "658"
    },
    {
        src: "http://cangdu.org:8001/img/165d1e8d00117713.png",
        shopName: "青釉",
        star: 1,
        s: "13.3公里",
        t: "7小时39分钟",
        ser_pr: "69",
        count: "138"
    },
];

export default class ElmPage extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        let _items = items()
        this.setState({items: _items})
    }

    render() {
        return (
            <div id="scrollContent" className={"elm_page"}>
                <ElmTop/>
                <ElmRecommend onChange={showToast}/>

                {
                    items_data.map((item, ind) => <ElmList source={item} key={`elm-list-${ind}`}/>)
                }

                {
                    this.state.items.map((item, ind) => <ElmList source={item} key={`elm-list-${ind}`}/>)
                }

                <div style={{textAlign: "center", margin: "2% 0"}}>没有更多</div>
            </div>
        );
    }
}

