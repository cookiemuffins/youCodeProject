import './Discover.css';
import React, { useState } from 'react';
import GearContainer from './GearContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Gear() {
    const [searchItem, setSearchTerm] = useState('');
    const hikes = [
      {
          "id" : 1,
          "imageUrl": "https://images.arcteryx.com/details/1350x1710/S24-X000009293-Atom-Lightweight-Hoody-Alpine-Rose-Women-s.jpg",
          "name": "Atom LightWeight Hoody Women's",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus ante, efficitur ut tempus nec, luctus sit amet justo. Vestibulum ornare aliquet velit, sed sagittis neque pretium id.",
          "rating":"5 Stars",
          "url" : "https://arcteryx.com/ca/en/shop/womens/atom-lightweight-hoody?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xSpJi6FfOyJrfab_qv3rM7_CRtSonnnBpSm6OB8gDhf4UOcaKKuzykaAtxEEALw_wcB"
      },
      {
        "id" : 2,
        "imageUrl": "https://images-dynamic-arcteryx.imgix.net/details/1350x1710/S24-X000007687-Gamma-Pant-Black-Women-s-Front-View.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&w=1350",
        "name": "Gamma Pant Women's",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus ante, efficitur ut tempus nec, luctus sit amet justo. Vestibulum ornare aliquet velit, sed sagittis neque pretium id.",
        "rating":"4.8 Stars",
        "url" : "https://arcteryx.com/ca/en/shop/womens/gamma-pant-7687?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xTJdZSR-Gz5PR2-jZseChH6OzoCaVuf1EoxIAfsdLF_t8LpJZAQ7HoaAjQDEALw_wcB"
      },
      {
        "id" : 3,
        "imageUrl": "https://images.arcteryx.com/details/1350x1710/S24-X000006756-Bird-Head-Toque-Amaranthus-Edziza-Front.jpg",
        "name": "Bird Head Toque",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus ante, efficitur ut tempus nec, luctus sit amet justo. Vestibulum ornare aliquet velit, sed sagittis neque pretium id.",
        "rating":"4.9 Stars",
        "url" : "https://arcteryx.com/ca/en/shop/bird-head-toque?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xSKcS1dwc89Hkj1CVaCZ3coXbqFkyWOiNX9l2XDuZwiJetOQ5cdU5IaAvLEEALw_wcB"
      }
    ]


    return(
    <div className="Discover">
    <header className="Discover-header">

    {hikes.map(hike => (
        <GearContainer key={hike.id} url={hike.url} imageUrl={hike.imageUrl} description={hike.description} name={hike.name} rating={hike.rating}/>
      ))}
    </header>
    </div>
  );
}

export default Gear;
