import React from "react"
import {List, WhiteSpace, Toast} from 'antd-mobile';
import {Spin} from 'antd';
import {getImgList, connectData} from "../../axios";

const Item = List.Item;

function showToast() {
    let loginState = window.localStorage.getItem("loginState");
    if (loginState === "true") {
        window.location.hash = "#/my/homelist";
        return;
    }
    Toast.info('该模块需要登陆才能查看', 3);
}

const ListItem = ({thumb, tit, wsps}) => {
    return (
        <div key={thumb}>

            <List>
                <Item thumb={thumb}
                      arrow="horizontal"
                      onClick={() => {
                          showToast()
                      }}
                >
                    {tit}</Item>
            </List>
            {!!wsps && <WhiteSpace size={"lg"}/>}

        </div>
    );
};

export default class FriendCustom extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            _data: []
        }

    }

    componentDidMount() {
        window.localStorage.getItem && window.localStorage.getItem("imaegs_remote") ?
            this.setState({_data: JSON.parse(window.localStorage.getItem("imaegs_remote")), loading: false}) :
            getImgList()
                .then(res => connectData(res))
                .then(_data => {
                    this.setState({_data: _data, loading: false});
                });
    }

    render() {

        return (
            <div className={"friend-container"}>

                <Spin spinning={this.state.loading} delay={10}
                      style={{position: 'absolute', top: "30%", left: 0, right: 0, margin: "0 auto", width: "30%"}}/>
                {this.state._data.map((item, ind) => {
                    return ListItem(item)
                })}

            </div>
        );
    }
}