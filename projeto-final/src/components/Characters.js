import './styles.css'
import MenuBar from './MenuBar';
import { Avatar, Modal, Row, Col, PageHeader } from 'antd';
import CharacterModal from './CharacterModal';

import React, { useState } from 'react';

import { Layout } from 'antd';

const { Sider, Content } = Layout;

export default function Characters(props) {

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
        <Col span={4} key={index.toString()} onClick={() => showModal(char)}>
            <center>
                <Avatar size={128} src={char.image} />
                <p key={index.toString()}>
                        <strong>{char.name}</strong>
                    <br/>
                    {char.species}
                </p> 
            </center> 
        </Col>
    ))

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={false}>
                    <div className="logo" />
                    <MenuBar defaultSelected="2"></MenuBar>
                </Sider>

                <Layout className="site-layout">

                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 800,
                        }}
                    >

                        <PageHeader
                            className="site-page-header"
                            onBack={() => null}
                            title="Characters"
                            backIcon={false}
                        />
                        <br/><br/>
                        
                        <div style={{display: 'inline'}}>
                            <Row gutter={16}>
                                {characters}
                            </Row>
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