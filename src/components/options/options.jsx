import React from 'react';
import './css/options.scss'

export default function Options() {
    return (
        <div className="options">
           <ul className="level">
               <li className="option level-item">Home</li>
               <li className="option level-item">About</li>
               <li className="option level-item">Gallery</li>
               <li className="option level-item">Recent Works</li>
               <li className="option level-item">Contact</li>
           </ul>
        </div>
    );
}