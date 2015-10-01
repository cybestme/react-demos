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
             <div className="nav clearfix">
                  <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="navinside">
                    <Menu.Item key="mail" className="navtip">
                      <i className="anticon anticon-mail"></i>首页
                    </Menu.Item>
                    <Menu.Item key="app">
                      <i className="anticon anticon-appstore" className="navtip"></i>设计
                    </Menu.Item>
                     <SubMenu title={<span><i className="anticon anticon-setting" className="navtip"></i>导航</span>}>
                       <Menu.Item key="setting:1">选项1</Menu.Item>
                       <Menu.Item key="setting:2">选项2</Menu.Item>
                       <Menu.Item key="setting:3">选项3</Menu.Item>
                       <Menu.Item key="setting:4">选项4</Menu.Item>
                     </SubMenu>
                    <Menu.Item>
                      <i className="anticon anticon-appstore" className="navtip"></i>案例
                    </Menu.Item>
                    <Menu.Item>
                      <i className="anticon anticon-appstore" className="navtip"></i>React
                    </Menu.Item>
                    <Menu.Item>
                      <i className="anticon anticon-appstore" className="navtip"></i>Github
                    </Menu.Item>
                  </Menu>
             </div>
         </div>
  }
});

var Sidebar = React.createClass ({
  getInitialState() {
    return {
      current: '1'
    }
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return <div>
              <Menu onClick={this.handleClick}
                           style={{width:240}}
                           defaultOpenKeys={['sub1']}
                           selectedKeys={[this.state.current]}
                           mode="inline">
                <SubMenu key="sub1" title={<span><i className="anticon anticon-mail"></i><span>Ant Design of React</span></span>}>
                </SubMenu>
                <SubMenu key="sub2" title={<span><i className="anticon anticon-mail"></i><span>快速上手</span></span>}>
                </SubMenu>
                <SubMenu key="sub3" title={<span><i className="anticon anticon-mail"></i><span>下载</span></span>}>
                </SubMenu>
                <SubMenu key="sub4" title={<span><i className="anticon anticon-appstore"></i><span>更新日志</span></span>}>
                </SubMenu>
                <SubMenu key="sub5" title={<span><i className="anticon anticon-setting"></i><span>Components</span></span>}>
                  <Menu.Item key="1">选项1</Menu.Item>
                  <Menu.Item key="2">选项2</Menu.Item>
                  <Menu.Item key="3">选项11</Menu.Item>
                  <Menu.Item key="4">选项12</Menu.Item>
                </SubMenu>
              </Menu>;
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
