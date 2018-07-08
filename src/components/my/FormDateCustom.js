/**
 * Created by 19848 on 2018/7/8.
 */
import React from 'react';
import {Link} from "react-router"
import { List, InputItem, WhiteSpace ,Button} from 'antd-mobile';
import { createForm } from 'rc-form';

 class FormDateCustom extends React.Component {
     constructor(props){
         super(props);
         this.state={
             tel:"",
             pass:""
         }
     }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleChange = (tel) => {
        console.log(this[tel].state.value)
        var obj={};
        obj[tel] =this[tel].state.value;
        var _obj= this.state;
        this.setState({
            ..._obj,
            ...obj
        })
    }
    sub = ()=>{

        if(this.state.tel.length <3 || this.state.pass.length <3){
          alert("字段得大于3位");
          return;
        }else{
          window.location.hash="#/my/homelist"
        }
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>




                <List>
                    <InputItem
                        type="number"
                        placeholder="手机号码"
                        maxLength={11}
                        ref={el=>this.tel=el}
                        onChange={this.handleChange.bind(this,"tel")}
                    >
                        {/*<div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />*/}
                    <i className={"iconfont icon-shouji lit-icon"}></i>
                        </InputItem>
                </List>
                <List>
                    <InputItem

                        type="password"
                        placeholder="请输入密码"
                        ref={el=>this.pass=el}
                        onChange={this.handleChange.bind(this,"pass")}
                    >
                    <i className={"iconfont icon-mima lit-icon"}></i>
                        {/*<div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />*/}
                    </InputItem>
                </List>

                <WhiteSpace />
                <Button type={"primary"} onClick={this.sub.bind(this)}> 登陆 </Button>


            </div>
        );
    }
}

const BasicInputExampleWrapper = createForm()(FormDateCustom);
export default BasicInputExampleWrapper;