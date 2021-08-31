import './styles.css'
import MenuBar from './MenuBar';

import React from 'react';

import { Layout } from 'antd';

const { Sider, Content } = Layout;

export default function About(props) {

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={false}>
                    <div className="logo" />
                    <MenuBar defaultSelected="3"></MenuBar>
                </Sider>

                <Layout className="site-layout">

                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 910,
                        }}
                    >

                        <strong>ABOUT</strong>
                        <p>This application lists every episode of the Rick And Morty series, and every character that ever appeard on the show.</p>

                    </Content>
                </Layout>
            </Layout>             
        </>
    )      
  }