import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FourOhFourImage from '../assets/fourohfour.png';

export class FourOhFour extends Component {
    render() {
        return (
            <div id="FourOhFour" className="four-oh-four">
                <img src={FourOhFourImage} alt="404 - page not found" className="img" />
                <Link to="/" className="text-link">← Home</Link>
            </div>
        );
    }
}

export default FourOhFour;
