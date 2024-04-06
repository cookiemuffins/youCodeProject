import React, { useState } from 'react';
import './HikeContainer.css';

function HikeContainer({ imageUrl, name, rating}) {

    return (
        <div className="hike-container">
            <img className="hike-img" src={imageUrl} alt={'a hiking destination'} />
            <h3> {name} </h3>
            <p> {rating} </p>
        </div>
    )
}

export default HikeContainer;