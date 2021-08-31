import React from 'react';

export default function EpisodeModal(props) {

    //console.log(props);

    return (
        <>
            <br/>
            <img src={props.modalContent.complement?.img} style={{ height: '275px', width: '475px' }} alt={props.modalContent.complement?.descricao}/>
            <br/><br/>
            <strong>{props.modalContent.ep.episode}</strong><br/>
            <p>{props.modalContent.ep.name}</p>
            <p><strong>Air date: </strong>{props.modalContent.ep.air_date}</p>
            <p><strong>Description: </strong>{props.modalContent.complement?.descricao}</p>
        </>   
    )      
  }