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
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.991326869788!2d-123.10100368772328!3d49.371237071286984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f458d5468b3%3A0x73a60976c7a6a4e7!2sGrouse%20Grind%20Trail!5e0!3m2!1sja!2sca!4v1712472755807!5m2!1sja!2sca",
          "url" : "https://www.grousemountain.com/"
      },
      {
        "id" : 2,
        "imageUrl": "https://happiestoutdoors.ca/wp-content/uploads/2023/07/MiddleJoffreLakeView.jpg",
        "name": "Joffre Lakes",
        "description": "The park provides habitat to a wide variety of plants and animals in the heart of Canada's third largest urban area.",
        "rating":"4.8 Stars",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20365.094563516857!2d-122.506021630137!3d50.354678930713824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5480cf2f8942b561%3A0x1293666072f00115!2z44K444On44OV44Os44O744Os44Kk44Kv44K544O744OR44O844Kv!5e0!3m2!1sja!2sca!4v1712473613360!5m2!1sja!2sca",
        "url" : "https://bcparks.ca/joffre-lakes-park/"
      },
      {
        "id" : 3,
        "imageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/crm/vancouverbc/Bloedel-Conservatory_B8857D3A-592B-4F2E-926DED6925238C5B_b2de1ab5-c619-4d04-b126431e79d84457.jpg",
        "name": "Queen Elizabeth Park",
        "description": "The park provides habitat to a wide variety of plants and animals in the heart of Canada's third largest urban area.",
        "rating":"4.3 Stars",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8276399146994!2d-123.1151942232957!3d49.241756971386764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f54e6bc621%3A0xb4b7ef4d0fe7a488!2z44Ko44Oq44K244OZ44K55aWz546L5YWs5ZyS!5e0!3m2!1sja!2sca!4v1712473539993!5m2!1sja!2sca",
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
