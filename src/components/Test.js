/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

  const FlexExample = () => (
    <div className="flex-container">
        <div className="sub-title">Basic</div>
        <Flex>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
            <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />

        <div className="sub-title">Wrap</div>
        <Flex wrap="wrap">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace size="lg" />

        <div className="sub-title">Align</div>
        <Flex justify="center">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace />
        <Flex justify="end">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace />
        <Flex justify="between">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline" />
        </Flex>

        <WhiteSpace />
        <Flex align="start">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline small" />
            <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace />
        <Flex align="end">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline small" />
            <PlaceHolder className="inline" />
        </Flex>
        <WhiteSpace />
        <Flex align="baseline">
            <PlaceHolder className="inline" />
            <PlaceHolder className="inline small" />
            <PlaceHolder className="inline" />
        </Flex>
        <p>自定义 alignContent="around" </p>
        <WhiteSpace />
        <div >

        <Flex style={{height:"300px",border:"1px solid "}}   wrap="wrap" alignContent="around">
            <PlaceHolder className="inline"/>
            <PlaceHolder className="inline small"/>
            <PlaceHolder className="inline small"/>
            <PlaceHolder className="inline small"/>
            <PlaceHolder className="inline small"/>
            <PlaceHolder className="inline"/>
        </Flex>
        </div>
        < WhiteSpace/>
        <WingBlank size={"bg"}>
            <PlaceHolder/>
        </WingBlank>
        < WhiteSpace/>
        <WingBlank size={"lg"}>
            <PlaceHolder/>
        </WingBlank>
        < WhiteSpace size={"lg"}/>
        <WingBlank size={"md"}>
            <PlaceHolder/>
        </WingBlank>
    </div>
);

export default FlexExample;