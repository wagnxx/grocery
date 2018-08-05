/**
 * Created by 19848 on 2018/8/5.
 */
import React from 'react';
import { Grid ,WhiteSpace ,WingBlank} from 'antd-mobile';

const baseUrl ="https://wagnxx.net.cn/react/images/img_wx/";

const imgs1=[
    {imgsrc:"qb_xinyongkahuankuan.png",text:"信用卡还款"},
    {imgsrc:"qb_weilidaijieqian.png",text:"微粒贷借钱"},
    {imgsrc:"qb_shoujichongzhi.png",text:"手机充值"},
    {imgsrc:"qb_qbchongzhi.png",text:"Q币充值"},
    {imgsrc:"qb_licaitong.png",text:"理财通"},
    {imgsrc:"qb_shenghuojiaofei.png",text:"生活缴费"},
    {imgsrc:"qb_chengshifuwu.png",text:"城市服务"},

];
const imgs2 =[
    {imgsrc:"qb_huochepiaojipiao.png",text:"火车票机票"},
    {imgsrc:"qb_didichuxing.png",text:"滴滴出行"},
    {imgsrc:"qb_jingdongyouxuan.png",text:"京东优选"},
    {imgsrc:"qb_meituanwaimai.png",text:"美团外卖"},
    {imgsrc:"qb_dianyingyanchusaishi.png",text:"电影演出赛事"},
    {imgsrc:"qb_chihewanle.png",text:"吃喝玩乐"},
    {imgsrc:"qb_jiudian.png",text:"酒店"},
    {imgsrc:"qb_mobaidanche.png",text:"摩拜单车"},
    {imgsrc:"qb_mogujienvzhuang.png",text:"蘑菇街女装"},
    {imgsrc:"qb_weipinhui.png",text:"唯品会特卖"},

];

const data1 = imgs1.map((val,i)=>({
    icon:baseUrl+val.imgsrc,
    text:val.text
}))
const data2 = imgs2.map((val,i)=>({
    icon:baseUrl+val.imgsrc,
    text:val.text
}))


export default class WalletContent extends React.Component {
    render() {
        return (
            <div className="walletContent">
                <WhiteSpace size={"md"}/>
                <WingBlank>

                <div className={"serTit"}>腾讯服务</div>
                </WingBlank>
                <WhiteSpace size={"md"}/>
                <Grid data={data1} activeStyle={false} columnNum={3} square={true}/>
                <WhiteSpace size={"md"}/>
                <WingBlank>

                <div className={"serTit"}>第三方服务</div>
                </WingBlank>
                <WhiteSpace size={"md"}/>
                <Grid data={data2} activeStyle={false} columnNum={3} square={true}/>

            </div>
        );
    }
}

