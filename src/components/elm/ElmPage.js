/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
// import {NavBar, Icon} from 'antd-mobile';

export default class ElmPage extends React.Component {
    render() {
        return (
            <div id="scrollContent">
                <ul>
                    <li className="pro">
                        <div className="pro-img">
                            <img alt={'imgalt'}
                            src="https://fuss10.elemecdn.com/9/0c/948c1f6578c4bb879e7ebf718de63jpeg.jpeg"/>
                        </div>
                        <div className="pro-item">
                            <div className="pro-title"><h3>必胜宅急送（福泉店）</h3></div>
                            <div className="pro-star"><span>
                                  403  月售    404
                                1331  单
                            </span>
                            </div>
                            <div className="pro-price">
                                <div><span>
                                    {/*<!-- react-text: 409 -->¥<!-- /react-text --><!-- react-text: 410 -->*/}
                                    {/*0<!-- /react-text --><!-- react-text: 411 -->起送<!-- /react-text -->*/}
                                </span><span>配送费¥9</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="pro"  >
                        <div className="pro-img" >
                            <img alt={'imgalt'}
                                src="https://fuss10.elemecdn.com/9/0c/948c1f6578c4bb879e7ebf718de63jpeg.jpeg"/>
                        </div>
                        <div className="pro-item">
                            <div className="pro-title">
                                <h3>必胜宅急送（福泉店）</h3>
                            </div>
                            <div className="pro-star">
                                <span>月售1000单</span>
                            </div>
                            <div className="pro-price">
                                <div>
                                    <span>¥50起送</span>
                                    <span>配送费¥9</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    );
    }
    }

