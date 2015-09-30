import React from 'react';
import antd from 'antd';
require('./style.css');

var Menu = antd.Menu;
var SubMenu = Menu.SubMenu;
var Select = antd.Select;
var Option = Select.Option;


var MyApp = React.createClass ({
  render () {
    return <div>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
           </div>
  }
});

var Header = React.createClass ({
  getInitialState() {
    return {
      current: 'mail'
    }
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },

  handleChange(value) {
    console.log('selected ' + value);
  },

  render() {
    return <div className="Header clearfix">
             <div className="logo clearfix">
               <a><img src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                 Ant Design
               </a>
             </div>
             <div className="search clearfix">
              <Select defaultValue="搜索组件..." style={{width:200}} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
                <Option value="jack1">Jack1</Option>
                <Option value="lucy1">Lucy1</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe1">yiminghe1</Option>                 
              </Select>
             </div>
             <div className="nav">
                  <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="navinside">
                    <Menu.Item key="mail">
                      <i className="anticon anticon-mail"></i>导航一
                    </Menu.Item>
                    <Menu.Item key="app">
                      <i className="anticon anticon-appstore"></i>导航二
                    </Menu.Item>
                    <SubMenu title={<span><i className="anticon anticon-setting"></i>导航 - 子菜单</span>}>
                      <Menu.Item key="setting:1">选项1</Menu.Item>
                      <Menu.Item key="setting:2">选项2</Menu.Item>
                      <Menu.Item key="setting:3">选项3</Menu.Item>
                      <Menu.Item key="setting:4">选项4</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="alipay">
                      <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
                    </Menu.Item>
                  </Menu>
             </div>
         </div>
  }
});

var Sidebar = React.createClass ({
  render() {
    return <div>
    </div>
  }
});

var Content = React.createClass ({
  render() {
    return <div>
    </div>
  }
});

var Footer = React.createClass ({
  render() {
    return <div>
    </div>
  }
});

React.render (<MyApp />,
    document.body);
