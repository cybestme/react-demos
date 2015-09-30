import React from 'react';
import Antd from 'antd';

var Menu = Antd.Menu;
var SubMenu = Menu.SubMenu;


class MyApp extends React.Component {
  render () {
    return <Menu>
            <Menu.Item>菜单项</Menu.Item>
            <SubMenu title="子菜单">
              <Menu.Item>子菜单项</Menu.Item>
            </SubMenu>
          </Menu>
  }
}

React.render (<MyApp />,
    document.body)
