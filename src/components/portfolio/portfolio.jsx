import React from 'react';
import Options from '../options/options'
import './css/portfolio.scss'

export default function Portfolio() {
    return (
        <section className="main-section">
            <div className="portfolio-container">
                <div className="greeting-message-container">
                    <h1 className="title is-1">Hi, I'm Danielle</h1>
                    <h2 className="sub-title">Software Developer</h2>
                </div>
                <div className="options-container">
                    <Options/>
                </div>
            </div>
        </section>
    );
}