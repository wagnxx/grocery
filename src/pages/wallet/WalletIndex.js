/**
 * Created by 19848 on 2018/8/5.
 */
import React from 'react';
import WalletHeader from "./WalletHeader"
import WalletContent from "./WalletContent"

export default class WalletIndex extends React.Component {
    render() {
        return (
            <div className="wallet">
                <WalletHeader/>
                <WalletContent/>
            </div>
        );
    }
}
