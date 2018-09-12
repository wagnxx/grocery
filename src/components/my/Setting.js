/**
 * Created by 19848 on 2018/7/8.
 */
import React from 'react';
import {List, Switch} from "antd-mobile"
import {createForm} from 'rc-form';

const {Item} = List;
const Base_url = "https://wagnxx.net.cn/react/images/img_wx/"

const data = {
    items: [
        {thumb: "wx_qianbao.png", tit: "钱包", wsps: true},
        {thumb: "wx_shoucang.png", tit: "收藏", wsps: true},
        {thumb: "wx_xiangce.png", tit: "相册", wsps: true},
        {thumb: "wx_kabao.png", tit: "卡包", wsps: true},
        {thumb: "wx_biaoqing.png", tit: "表情", wsps: true},
        {thumb: "wx_shezhi.png", tit: "设置", wsps: true},

    ]
};

let _data = data.items.map((ite, ind) => {
    ite.thumb = Base_url + ite.thumb;
    return ite
});


class BasicInput extends React.Component {
    render() {
        const {getFieldProps} = this.props.form;
        // const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className={"home-contanier"}>

                {/* {_data.map((ind, ite) => {
                    return ListItem(ind)
                })} */}

                {
                    _data.map((ite, ind) => {
                        return (
                            <List key={`list-${ind}`}>
                                <Item
                                    thumb={ite.thumb}
                                    extra={<Switch
                                        disabled={ite.wsps}
                                        checked={false}
                                        onClick={() => console.log(this, getFieldProps)}
                                        color="#108ee9" {...getFieldProps(`${ind}`, {
                                        initialValue: true,
                                        valuePropName: 'checked'
                                    })} />}
                                >{ite.tit}</Item>

                            </List>
                        );
                    })
                }


            </div>

        );
    }
}

export default  createForm()(BasicInput);

