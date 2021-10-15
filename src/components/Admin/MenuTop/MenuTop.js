import React from "react";
import {Button, Icon} from 'antd';
import ImgLogo from '../../../assets/img/png/imgprueba.png';
import './MenuTop.scss';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo"
                src={ImgLogo}
                alt="foto-menu"
                />
                <Button type="link" onClick={()=>setMenuCollapsed(!menuCollapsed)}>
                    <Icon type={menuCollapsed ? "close":"menu-fold"} />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={()=> console.log("Desconexion")}>
                    <Icon type="poweroff"/>
                </Button>
            </div>
        </div>
    );
}