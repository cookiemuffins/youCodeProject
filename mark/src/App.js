import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HikeContainer from './HikeContainer';
import MenuBorder from './MenuBorder';

// import { BrowseRouter as Router, Route} from 'react-router-dom';

function App() {
  const [searchItem, setSearchTerm] = useState('');
  const hikes = [
    {
        "id" : 1,
        "imageUrl": "https://www.grousemountain.com/media/W1siZiIsIjIwMjMvMDQvMjAvMTYvMTYvNDkvNGFjNzRiYjEtNjNhOC00NDE0LTgyZDUtNmM5MDFmNTJmMmM5L1RyYW1fTW91bnRhaW5fSW1hZ2UtNy5wbmciXSxbInAiLCJ0aHVtYiIsIjk2MHg0NzBcdTAwM2UiXV0?sha=eb89769b72329847",
        "name": "Grouse Mountain",
        "rating":"4.5 Stars",
        "url" : "https://www.grousemountain.com/"
    },
    {
      "id" : 2,
      "imageUrl": "https://happiestoutdoors.ca/wp-content/uploads/2023/07/MiddleJoffreLakeView.jpg",
      "name": "Joffre Lakes",
      "rating":"4.8 Stars",
      "url" : "https://bcparks.ca/joffre-lakes-park/"
    },
    {
      "id" : 3,
      "imageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/crm/vancouverbc/Bloedel-Conservatory_B8857D3A-592B-4F2E-926DED6925238C5B_b2de1ab5-c619-4d04-b126431e79d84457.jpg",
      "name": "Queen Elizabeth Park",
      "rating":"4.3 Stars",
      "url" : "https://vancouver.ca/parks-recreation-culture/queen-elizabeth-park.aspx"
    }
  ]

  function handleSearches(event) {
    setSearchTerm(event.target.value);
  }

  const filteredHikes = hikes.filter(hike=>
    hike.name.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <div className="App">
    <header className="App-header">
      <MenuBorder />


      <input
        type="text"
        placeholder="Browse Hikes"
        value={searchItem}
        onChange={handleSearches}
      />

      {filteredHikes.map(hike => (
        <HikeContainer key={hike.id} url={hike.url} imageUrl={hike.imageUrl} name={hike.name} rating={hike.rating}/>
      ))}
    </header>
    </div>

  );
}

export default App;
