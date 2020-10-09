import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leavesLeft from '../assets/leaves-l.png';
import leavesRight from '../assets/leaves-r.png';

export class Home extends Component {
    render() {
        return (
            <div id='Home'>
                <img src={leavesLeft} alt='' class='leaves left' />
                <img src={leavesRight} alt='' class='leaves right' />
                <div className='home__logo-container'>
                    <h1>
                        Robyn Zedd <span>Design</span>
                    </h1>
                </div>
                <div className='home__paths'>
                    <div className='paths__about'>
                        <Link to='/about'>About Me</Link>
                    </div>
                    <div className='paths__portfolio'>
                        <Link to='/portfolio'>Portfolio</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
