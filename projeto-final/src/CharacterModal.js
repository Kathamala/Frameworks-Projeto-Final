import React from 'react';

export default function EpisodeModal(props) {

    //console.log(props);

    return (
        <>
            <br/>
            <img src={props.modalContent.image} style={{ height: '475px', width: '475px' }} alt={props.modalContent.name}/>
            <br/><br/>
            <strong>{props.modalContent.name}</strong><br/><br/>
            <p><strong>Species: </strong>{props.modalContent.species}</p>
            <p><strong>Gender: </strong>{props.modalContent.gender}</p>
            <p><strong>Status: </strong>{props.modalContent.status}</p>
            <p><strong>Location: </strong>{props.modalContent.location.name}</p>
        </>   
    )      
  }