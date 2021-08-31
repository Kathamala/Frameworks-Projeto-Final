import './styles.css'
import MenuBar from './MenuBar';
import { Avatar, Modal } from 'antd';
import CharacterModal from './CharacterModal';

import React, { useState } from 'react';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function Characters(props) {

    const [collapsed, setCollapsed] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const showModal = (character) => {
        setModalContent(character);
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };       

    const characters = props.characters.map((char, index) => (
        <span key={index.toString()} onClick={() => showModal(char)}>
            <Avatar size={64} src={char.image} />
            <p key={index.toString()}>
                <strong>{char.name}:</strong>
                <br/>
                {char.species}
            </p>  
        </span>
    ))

    function toogle(){
        setCollapsed(!collapsed);
    }

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <MenuBar defaultSelected="2"></MenuBar>
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

                        <strong>CHARACTERS</strong>
                        <br/><br/>
                        
                        <div style={{display: 'inline'}}>
                            {characters}
                        </div>

                    </Content>
                </Layout>
            </Layout>  

            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <CharacterModal modalContent={modalContent}></CharacterModal>
            </Modal>                          
        </>
    )      
  }