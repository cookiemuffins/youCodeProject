import React, { useState } from 'react';
import './HikeContainer.css';
import { Link } from 'react-router-dom';


function HikeContainer({ imageUrl, name, rating, url}) {
    // let history = useHistory();

    return (
        <div className="hike-container">
            <img className="hike-img" src={imageUrl} alt={'a hiking destination'} />
            <h3> {name} </h3>
            <p> {rating} </p>
            <button 
                role="link" 
                onClick={() => window.open(url)}>See More</button>
        </div>
    )
}





export default HikeContainer;