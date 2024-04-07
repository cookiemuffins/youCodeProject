import React from 'react';
import './MenuBorder.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuBorder() {

    return (
        // <nav className="menu">
            <div>
                <ul>
                    <li>MARK</li>
                    <li><Link to="discover">Discover</Link></li>
                    <li><Link to="apparel">Apparel</Link></li>
                    <li><Link to="gear">Gear</Link></li>
                </ul>
            </div>
        // </nav>
    )
}

export default MenuBorder;