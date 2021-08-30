import './styles.css'
import MenuBar from './MenuBar';

import React, { useState } from 'react';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function About(props) {

    const [collapsed, setCollapsed] = useState(false);

    function toogle(){
        setCollapsed(!collapsed);
    }

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <MenuBar defaultSelected="3"></MenuBar>
                </Sider>

                <Layout className="site-layout">

                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toogle,
                        })}
                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 800,
                        }}
                    >

                        <p>ABOUT</p>

                    </Content>
                </Layout>
            </Layout>             
        </>
    )      
  }