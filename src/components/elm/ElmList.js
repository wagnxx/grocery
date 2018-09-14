/**
 * Created by 19848 on 2018/9/10.
 */
import React from 'react';
import {Badge} from "antd-mobile"
import { Icon} from 'antd';

const RateCustom = (va) => {

    let v =Math.ceil(va);
    const numArr =Array.from({length:v},(v,i)=><Icon type={"star"} key={`icon-${i}`} theme={"filled"} style={{ color: '#ff9a0d' }}/>)

    return numArr;
};

export default class ElmList extends React.Component {
    state = {
        value: 3,
    }

    handleChange = (value) => {
        this.setState({value});
    }

    render() {
        // console.log(this.props.source.s ,typeof this.props.source.s);
        let longitude=typeof this.props.source.s==="string"?this.props.source.s: this.props.source.s.toFixed(2)+"米"
        return (
            <ul>
                <li className="pro">
                    <div className="pro-img">
                        <img alt={'imgalt'}
                             src={this.props.source.src}/>
                    </div>
                    <div className="pro-item">
                        <div className="pro-title">
                            <h3>{this.props.source.shopName}</h3>
                            <span>保准单</span>
                        </div>

                        <div className="pro-star">
                            <span>
                                {   RateCustom(this.props.source.star)  }
                                <sup style={{color:"#ff9a0d",marginLeft:"2px"}}>{this.props.source.star.toFixed(1)}</sup>
                                    月售{this.props.source.count}单
                            </span>
                            <span>
                                <Badge
                                    text={"蜂鸟专送"}
                                    style={{
                                        background: "#3190e8",
                                        fontSize: "9px"
                                    }}
                                />
                                <Badge
                                    text={"准时达"}
                                    style={{
                                        color: "#3190e8",
                                        background: "#fff",
                                        fontSize: "9px",
                                        border: '1px solid #3190e8',
                                    }}
                                />
                            </span>
                        </div>

                        <div className="pro-price">
                            <span>￥20起送/配送费¥{this.props.source.ser_pr}</span>
                            <span>{longitude} /<a>{this.props.source.t}分钟</a></span>
                        </div>

                    </div>
                </li>

            </ul>
        );
    }
}

 