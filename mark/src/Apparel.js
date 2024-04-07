import React, { useState } from 'react';
import './Apparel.css';
import logo from './assets/Naked Bear.png';

function Apparel() {

    const btnGroup = (<div className="btn-group">
        <button 
            className="btns"
            id="bearbutton1" 
            onClick={() => window.open("https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog")}>Accessories
        </button>
        <button 
            className="btns"
            id="bearbutton2" 
            onClick={() => window.open("https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog")}>Tops
        </button>
        <button 
            className="btns"
            id="bearbutton3" 
            onClick={() => window.open("https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog")}>Pants
        </button>
        <button 
            className="btns"
            id="bearbutton4" 
            onClick={() => window.open("https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog")}>Footwear
        </button>
    </div>);
    
    const frameGroup = (<div className="frame-group">
        {btnGroup}
        <img className="bear-img" src={logo} alt={'a bear'} />
    </div>)
    
  return (

    <div>
        {frameGroup}

    </div>
  );
}

export default Apparel;