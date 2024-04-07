import React, { useState } from 'react';
import './HikeContainer.css';
import styled from 'styled-components'


const HikeContainer = styled.div`
  width: 60%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin: 30px auto 0;
`;

const HikeImage = styled.img`
  width: 60%; 
  border-radius: 5px;
  display: block;
  margin-bottom: 1px;
  float: left;
  margin-right: 20px;
`;

const HikeTitle = styled.h2`
  color: black;
  font-family: "Preahvihear", sans-serif
  font-size: 30px;
  margin-bottom: -30px;
  margin-top: 0px;
  text-align: left;
`;

const HikeDescription = styled.p`
  color: #000000;
  font-size: 16px;
  text-align: left;
  margin-left: 400px;
  margin-top: 50px;
`;

const HikeRating = styled.p`
  color: #000000;
  font-size: 16px;
  text-align: center;
`;

const HikeButton = styled.button`
  color: #000000;
  font-size: 16px;
  text-align: center;
  margin-top: 200px;
`;


export default function Card(props) {
    return (
        <HikeContainer>
          <HikeTitle>{props.name}</HikeTitle>
          <HikeImage src={props.imageUrl} alt={props.imageAlt} />
          <HikeDescription>{props.description}</HikeDescription>
          <HikeRating>{props.rating}</HikeRating>
          <HikeButton role="link" onClick={() => window.open(props.url)}>
            See More
          </HikeButton>
        </HikeContainer>
    );
  }

// function HikeContainer({imageUrl, name, rating, url}) {
//     // let history = useHistory();

//     return (
//         <div className="hike-container">
//             <img className="hike-img" src={imageUrl} alt={'a hiking destination'} />
//             <h3> {name} </h3>
//             <p> {rating} </p>
//             <button 
//                 role="link" 
//                 onClick={() => window.open(url)}>See More</button>
//         </div>
//     )
// }



// export default HikeContainer;