import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getMenuApi } from "../../../api/menu";
import logoWhite from "../../../assets/img/png/imgprueba.png";

import "./MenuTop.scss";

export default function MenuTop() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getMenuApi().then(response => {
      const arrayMenu = [];
      response.menu.forEach(item => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);

  return (
    <Menu className="menu-top-web" mode="horizontal">
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"}>
          <img src={logoWhite} alt="cafe" />
        </Link>
      </Menu.Item>

      <Menu.Item className="menu-top-web__item">
        <Link to={"/"}>
          <p>HOME</p>
        </Link>
      </Menu.Item>
      
      <Menu.Item className="menu-top-web__item">
        <Link to={"/admin"}>
        <p>LOGIN</p>
        </Link>
      </Menu.Item>

     
    </Menu>
  );
}