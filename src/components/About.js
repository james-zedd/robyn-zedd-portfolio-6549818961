import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leavesLeft from '../assets/leaves-l.png';
import leavesRight from '../assets/leaves-r.png';
import profilePic from '../assets/robyn.png';

export class About extends Component {
    render() {
        return (
            <div id="About" class="about">
                <img src={leavesLeft} alt='' class='leaves left' />
                <img src={leavesRight} alt='' class='leaves right' />
                <div className="about__container">
                    <img src={profilePic} alt="" class="img about__profile-pic" />
                    <div className="about__info">
                        <h1>Robyn Zedd</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, libero cupiditate molestiae nam tempore perferendis, aliquam nihil est saepe numquam aspernatur inventore! Aliquid eius deserunt nesciunt sint maiores a mollitia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, libero cupiditate molestiae nam tempore perferendis, aliquam nihil est saepe numquam aspernatur inventore! Aliquid eius deserunt nesciunt sint maiores a mollitia.</p>
                        <Link to='/'>← Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
