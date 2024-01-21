import React from 'react';
import FrontPageLogo from '../images/photo-grid.png';


const FrontPage = () => {
    return (
        <div className="front-page">
            <img src={FrontPageLogo} alt="Front page pic" />
            <h2>Online Experience</h2>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
        </div>
    )
}

export default FrontPage;