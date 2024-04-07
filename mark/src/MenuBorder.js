import React from 'react';
import './MenuBorder.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuBorder() {

    function handleDiscoverClick() {
        console.log("clicked");
    }

    function handleApparelClick() {
        console.log("clicked");
    }

    function handleGearClick() {
        console.log("clicked");
    }

    return (
        <div className="menu">
            MARK
            <ul>
                <li onClick={handleDiscoverClick}>Discover</li>
                <li onClick={handleApparelClick}>Apparel</li>
                <li onClick={handleGearClick}>Gear</li>
            </ul>
        </div>
    )
}

export default MenuBorder;