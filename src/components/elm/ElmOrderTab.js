/**
 * Created by 19848 on 2018/9/12.
 */
import React from 'react';
import {Icon} from 'antd';
import {Tabs, Menu } from 'antd-mobile';
const data = [
    {value: '1', label: '综合排序'},
    {value: '2', label: '好评优先'},
    {value: '3', label: '销量最高'},
    {value: '4', label: '起送价最低'},
    {value: '5', label: '配送最快'},
    {value: '6', label: '配送费最低'},
    {value: '7', label: '人均从低到高'},
    {value: '8', label: '人均从高到低',isLeaf: true,},

];
const tabs = [
    {title: <span
        className="tabItem"

         >综合排序<Icon type="caret-down" theme="outlined"/></span>},
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
                <div className="menus">
                    <Menu
                        className="single-foo-menu"
                        data={data}
                        value={['1']}
                        level={1}
                        onChange={this.onChange}
                        height={document.documentElement.clientHeight * 0.6}
                        style={{border:"1px solid",fontSize:"12px",display:"none"}}
                    />
                </div>
            </div>
        );
    }
}

 