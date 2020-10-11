import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leavesLeft from '../assets/leaves-l.png';
import leavesRight from '../assets/leaves-r.png';

export class Home extends Component {
    render() {
        return (
            <div id='Home' className="home">
                <img src={leavesLeft} alt='' className='leaves left' />
                <img src={leavesRight} alt='' className='leaves right' />
                <div className='home__logo-container'>
                    <h1 className="home__logo">
                        Robyn Zedd <span>Design</span>
                    </h1>
                </div>
                <div className='home__paths'>
                    <div className='home__path about-me'>
                        <Link to='/about'>About Me</Link>
                    </div>
                    <div className='home__path portfolio'>
                        <Link to='/portfolio'>Portfolio</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
