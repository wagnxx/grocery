/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import {NavBar, Icon,Toast} from 'antd-mobile';
import ElmList from "./ElmList"
import ElmTop from "./ElmTop"
import ElmRecommend from "./ElmRecommend"

function showToast() {
    Toast.info('数据还未采集,敬请期待', 1);
}



export default class ElmPage extends React.Component {

    render() {

        return (
            <div id="scrollContent">
                <ElmTop/>
                <ElmRecommend onChange={showToast}/>
                <ElmList/>
                <ElmList/>
                <ElmList/>

            </div>
    );
    }
    }

