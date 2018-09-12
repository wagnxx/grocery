/**
 * Created by 19848 on 2018/9/11.
 */
import React from 'react';

export default class ElmTopItem extends React.Component {
    render() {
        return (
            <div className={"elmTop_item"}>
                <div className={"elmTopImg_cont"}><img src={this.props.imgSrc} alt="ms"/></div>
                <div className={"elmTopImg_tit"}>{this.props.tit}</div>
            </div>
        );
    }
}

 