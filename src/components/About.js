import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leavesLeft from '../assets/leaves-l.png';
import leavesRight from '../assets/leaves-r.png';
import profilePic from '../assets/robyn.png';
import { ReactComponent as InstagramIcon} from '../assets/svgs/instagram.svg';
import { ReactComponent as BehanceIcon} from '../assets/svgs/behance.svg';

export class About extends Component {
    render() {
        return (
            <div id="About" class="about">
                <img src={leavesLeft} alt='' class='leaves left' />
                <img src={leavesRight} alt='' class='leaves right' />
                <div className="about__container">
                    <img src={profilePic} alt="" class="img about__profile-pic" />
                    <div className="about__info">
                        <h1 className="page-title">Robyn Zedd</h1>
                        <p>Robyn's passion for art started from a young age. Over the course of her life she has studied multiple art mediums including music, graphic design and hand-drawn sketching.</p>
                        <p>Born and raised in the UK, Robyn first fell in love with Canada in 2015 after a visit with her father. She has resided in Canada since 2016 and continues to study digital illustration, photography, horticulture and how to become a pokemon master.</p>
                        <Link to='/' className="text-link">← Back</Link>
                        <div className="about__social">
                            <div className="about__social-icon">
                                <Link to={{ pathname: 'https://www.instagram.com/zedd.robyn/' }} target="_blank">
                                    <InstagramIcon />
                                    </Link>
                            </div>
                            <div className="about__social-icon">
                                <Link to={{ pathname: 'https://www.behance.net/robynsmith3/projects' }} target="_blank">
                                    <BehanceIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
