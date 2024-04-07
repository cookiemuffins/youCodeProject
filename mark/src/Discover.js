import './Discover.css';
import React, { useState } from 'react';
import HikeContainer from './HikeContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Discover() {
    const [searchItem, setSearchTerm] = useState('');
    const hikes = [
      {
          "id" : 1,
          "imageUrl": "https://www.grousemountain.com/media/W1siZiIsIjIwMjMvMDQvMjAvMTYvMTYvNDkvNGFjNzRiYjEtNjNhOC00NDE0LTgyZDUtNmM5MDFmNTJmMmM5L1RyYW1fTW91bnRhaW5fSW1hZ2UtNy5wbmciXSxbInAiLCJ0aHVtYiIsIjk2MHg0NzBcdTAwM2UiXV0?sha=eb89769b72329847",
          "name": "Grouse Mountain",
          "description": "The park provides habitat to a wide variety of plants and animals in the heart of Canada's third largest urban area.",
          "rating":"4.5 Stars",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.9911422564633!2d-123.10099832378205!3d49.37124056447946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f458d5468b3%3A0x73a60976c7a6a4e7!2sGrouse%20Grind%20Trail!5e0!3m2!1sen!2sca!4v1712513877432!5m2!1sen!2sca",
          "url" : "https://www.grousemountain.com/"
      },
      {
        "id" : 2,
        "imageUrl": "https://happiestoutdoors.ca/wp-content/uploads/2023/07/MiddleJoffreLakeView.jpg",
        "name": "Joffre Lakes",
        "description": "The park provides habitat to a wide variety of plants and animals in the heart of Canada's third largest urban area.",
        "rating":"4.8 Stars",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.3519787625182!2d-122.47878532372593!3d50.341340095214306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5480cf2f8942b561%3A0x1293666072f00115!2sJoffre%20Lakes%20Park!5e0!3m2!1sen!2sca!4v1712513799571!5m2!1sen!2sca",
        "url" : "https://bcparks.ca/joffre-lakes-park/"
      },
      {
        "id" : 3,
        "imageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/crm/vancouverbc/Bloedel-Conservatory_B8857D3A-592B-4F2E-926DED6925238C5B_b2de1ab5-c619-4d04-b126431e79d84457.jpg",
        "name": "Queen Elizabeth Park",
        "description": "The park provides habitat to a wide variety of plants and animals in the heart of Canada's third largest urban area.",
        "rating":"4.3 Stars",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.654910362515!2d-123.1151942237894!3d49.24176047365154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f54e6bc621%3A0xb4b7ef4d0fe7a488!2sQueen%20Elizabeth%20Park!5e0!3m2!1sen!2sca!4v1712513742805!5m2!1sen!2sca",
        "url" : "https://vancouver.ca/parks-recreation-culture/queen-elizabeth-park.aspx"
      }
    ]

    function handleSearches(event) {
        setSearchTerm(event.target.value);
      }

    const filteredHikes = hikes.filter(hike=>
        hike.name.toLowerCase().includes(searchItem.toLowerCase()));

    return(
    <div className="Discover">
    <header className="Discover-header">

      <input
        type="text"
        placeholder="Browse Hikes"
        value={searchItem}
        onChange={handleSearches}
      />

    {filteredHikes.map(hike => (
        <HikeContainer key={hike.id} url={hike.url} imageUrl={hike.imageUrl} map = {hike.map} description={hike.description} name={hike.name} rating={hike.rating}/>
      ))}
    </header>
    </div>
  );
}

export default Discover;
