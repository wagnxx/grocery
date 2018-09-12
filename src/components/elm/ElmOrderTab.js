/**
 * Created by 19848 on 2018/9/12.
 */
import React from 'react';
import {Icon} from 'antd';
import {Tabs, WhiteSpace, Badge} from 'antd-mobile';

const tabs = [
    {title: <span className={"tabItem"}>综合排序<Icon type="caret-down" theme="outlined"/></span>},
    {title: <span className={"tabItem"}>距离最近</span>},
    {title: <span className={"tabItem"}>品质联盟</span>},
    {title: <span className={"tabItem"}>筛选<Icon type="experiment" theme="outlined"/></span>},

];

export default class ElmOrderTab extends React.Component {
    render() {
        return (
            <div>
                <Tabs tabs={tabs}
                      initialPage={1}
                      swipeable={true}
                      onChange={(tab, index) => {
                          console.log('onChange', index, tab);
                      }}
                      onTabClick={(tab, index) => {
                          console.log(this.props.onChange());
                      }}
                >
                </Tabs>
            </div>
        );
    }
}

 