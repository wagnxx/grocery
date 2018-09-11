/**
 * Created by 19848 on 2018/7/7.
 */
import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import { NavBar, Icon } from 'antd-mobile';

 class NavBarCustom extends React.Component {
     constructor(props){
         super(props);
         this.state={

             route_1:"",
             route_2:window.location.hash.replace(/^#\/|\/$/g,''),

         }
         // replace(/^\s+|\s+$/gm,'');
        console.log(window.location.hash)
         const initHashToRoute=window.location.hash.replace(/^\s+|\s+$/gm,'');



     }

     routerUpDate(rt){
         setTimeout(()=>{
             let _routes=rt;
             let _route_len=_routes.length;

             this.setState({
                 ...this.state,
                 route_1:_routes[_route_len-2],
                 route_2:_routes[_route_len-1],
             });


         },0)
         console.log(rt)

     }


     componentWillReceiveProps (nextProps) {
         // console.log(nextProps)

          this.routerUpDate(nextProps.tabNameRoutes)

         if(this.state.route_2==="koubei"){
             window.location.reload()
         }
     }



    clickHandle=()=>{
        window.history.back();
        //  this.routerUpDate(this.props)
        // this.props.changeFooterTab("friend")

    }
    render() {

        return (
            <NavBar
                icon={<Icon type="left" onClick={this.clickHandle} />}
                mode="dark"
                leftContent={this.state.route_1==="/"?"":this.state.route_1}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
            >{this.state.route_2===""?"elm":this.state.route_2}</NavBar>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tabNameRoutes: state.routetReducer.routes
    }
}

// const FOOTER_BAR_ELM="FOOTER_BAR_ELM";
// const FOOTER_BAR_KOUBEI="FOOTER_BAR_KOUBEI";
// const FOOTER_BAR_FRIEND="FOOTER_BAR_FRIEND";
// const FOOTER_BAR_MY="FOOTER_BAR_MY";
// const mapDispatchToProps=dispatch=>({
//     changeFooterTab:bindActionCreators(footerchangeActionCreator,dispatch)
// })
//
// export const  footerchangeActionCreator=(titname)=>{
//      let obj={seleTabName:titname};
//      switch (titname){
//          case "elm":
//              obj.type=FOOTER_BAR_ELM;break;
//          case "koubei":
//              obj.type=FOOTER_BAR_KOUBEI;break;
//          case "friend":
//              obj.type=FOOTER_BAR_FRIEND;break;
//          case "my":
//              obj.type=FOOTER_BAR_MY;break;
//          default:
//              obj.type=FOOTER_BAR_MY;
//
//      }
//      return obj;
// }


export default connect(mapStateToProps,null)(NavBarCustom)
