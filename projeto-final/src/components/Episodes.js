import { Carousel, Collapse, Layout, Card, Modal } from 'antd';
import MenuBar from './MenuBar';
import EpisodeModal from './EpisodeModal';
import './styles.css'
import React, { useState } from 'react';

const { Sider, Content } = Layout;

const { Panel } = Collapse;

export default function Episodes(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const showModal = (episode) => {
        setModalContent({ep: episode, complement: props.episodesComplements[episode.id-1]});
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };         

    const episodes = props.episodes.map((season, index) => (
        <Panel header={"Season " + (index+1)} key={index.toString()}>
            {
                season.map((ep, jndex) => (
                    <p key={(jndex).toString()} onClick={() => showModal(ep)}>
                        <strong>{ep.episode}:</strong>
                        <br/>
                        {ep.name}
                    </p>                    
                ))
            }
        </Panel>
    ))

    const carouselImages = props.carouselImages.map((ci, index) => (
        <div key={index.toString()}>
            <div className="container" style={{
                backgroundColor: '#b0b0b0'
            }}>
                <img src={ci.img} alt={ci.descricao} style={{
                        height: '100%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',  
                        }}
                />
                <div className="centered">
                    <p>
                        {ci.descricao}
                    </p>
                </div>
            </div>
        </div>
    ))   

    return (
      <>
        <Layout>
            <Sider trigger={null} collapsible collapsed={false}>
                <div className="logo" />
                <MenuBar defaultSelected="1"></MenuBar>
            </Sider>

            <Layout className="site-layout">

                <Content
                    className="site-layout-background"
                    style={{
                    minHeight: 800,
                    }}
                >

                    <Carousel autoplay dotPosition={'top'}>
                        {carouselImages}
                    </Carousel>     

                    <Card title="Episodes">
                        <Collapse defaultActiveKey="1">
                            {episodes}
                        </Collapse>
                    </Card>

                </Content>
            </Layout>
        </Layout>    

        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <EpisodeModal modalContent={modalContent}></EpisodeModal>
        </Modal>        
      </>
    )      
  }