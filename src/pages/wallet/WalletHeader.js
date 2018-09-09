/**
 * Created by 19848 on 2018/8/5.
 */
import React from 'react';
import { Flex } from 'antd-mobile';

// const PlaceHolder=()=><span>header..</span>

export default class WalletHeader extends React.Component {
    render() {
        return (
            <div className="walletHeader">
                <Flex justify={"around"} align={"start"}>
                    <Flex.Item  className="headerItem"><i className="_icon iconfont icon-shoufukuan"></i><br/>收付款</Flex.Item>
                    <Flex.Item  className="headerItem"><i className="_icon iconfont icon-lingqian"></i><br/>零钱<br/>￥11.80</Flex.Item>
                    <Flex.Item  className="headerItem"><i className="_icon iconfont icon-yinhangqia"></i><br/>银行卡</Flex.Item>

                </Flex>
            </div>
        );
    }
}

