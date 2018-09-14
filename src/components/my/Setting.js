/**
 * Created by 19848 on 2018/7/8.
 */
import React from 'react';
import {List, Switch} from "antd-mobile"
import {Spin} from 'antd';
import {createForm} from 'rc-form';
import {getImgList,connectData} from "../../axios";

const {Item} = List;


class BasicInput extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            _data: []
        }
    }

    componentDidMount() {
        window.localStorage.getItem&&window.localStorage.getItem("imaegs_remote") ?
            this.setState({_data: JSON.parse(window.localStorage.getItem("imaegs_remote")), loading: false}):
            getImgList()
            .then(res=> connectData(res))
            .then(_data=>{
                this.setState({_data: _data, loading: false});
                window.localStorage.setItem("imaegs_remote",JSON.stringify(_data));
            }) ;
    }

    render() {
        const {getFieldProps} = this.props.form;
        // const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className={"home-contanier"}>
                <Spin spinning={this.state.loading} delay={10}
                      style={{position: 'absolute', top: "30%", left: 0, right: 0, margin: "0 auto", width: "30%"}}/>
                {
                    this.state._data.map((ite, ind) => {
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

export default createForm()(BasicInput);

