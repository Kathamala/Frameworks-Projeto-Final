import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';

import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';

class MenuBar extends React.Component {

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    return (
      <>
            <Menu
              defaultSelectedKeys={this.props.defaultSelected}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Episodes</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/characters">Characters</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}>
                <Link to="/about">About</Link> 
              </Menu.Item>
            </Menu>
      </>
    );
  }
}

/*

        
        <Affix style={{ position: 'absolute', left: '260px' }}>
          <Button onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </Affix>
*/

export default MenuBar;