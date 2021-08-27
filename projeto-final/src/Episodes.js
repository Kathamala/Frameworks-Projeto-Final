import { Carousel, Collapse } from 'antd';
import './styles.css'

const { Panel } = Collapse;

export default function Episodes(props) {

    const episodes = props.episodes.map((season, index) => (
        <Panel header={"Season " + (index+1)} key={index.toString()}>
            {
                season.map((ep, index) => (
                    <p key={index.toString()}>
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
                        height: '50%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '75%',  
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
      <div>
        <Carousel autoplay>
            {carouselImages}
        </Carousel>     

        <Collapse>
            <Panel header="Episodes" key="1">
                <Collapse defaultActiveKey="1">
                    {episodes}
                </Collapse>
            </Panel>
        </Collapse>     
      </div>
    )      
  }