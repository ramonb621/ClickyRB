import React from 'react';
import './index.css';

function Card (props) {
    return (
        <div className="card"
        key={props.id}
        onClick={() => props.scoreHandler(props.id, props.clicked)}>
            <img id={props.id} alt={props.id} src={props.image}/>
        </div>
    )
};

export default Card;