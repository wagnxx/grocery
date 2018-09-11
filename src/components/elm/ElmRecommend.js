/**
 * Created by 19848 on 2018/9/12.
 */
import React from 'react';
import { Divider } from 'antd';
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import ElmOrderTab from "./ElmOrderTab"

export default class ElmRecommend extends React.Component {
    render() {
        return (
            <div>
                <WhiteSpace/>
                <Divider style={{width:"50%",margin:"auto",fontSize:"15px",color:"#000"}}>推荐商家</Divider>
                <WhiteSpace/>
                <WingBlank size={"small"}>
                    <ElmOrderTab onChange={this.props.onChange}/>
                </WingBlank>

            </div>
        );
    }
}

 