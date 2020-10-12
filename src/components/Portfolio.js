import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';
import Arrow from '../assets/arrow.png';
import Data from '../data/portfolio.json';

function PortfolioItems(props) {
    const items = props.items;
    console.log('items from portfolio component', items);
    return items.map((item) => <PortfolioItem key={item.id} item={item} />);
}

export class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__header'>
                    <div className='btn back-btn top-corner'>
                        <Link to='/'>
                            <img
                                src={Arrow}
                                alt='Back'
                                className='arrow back nav-icon'
                            />
                        </Link>
                    </div>
                    <h1 className="page-title">My Work</h1>
                </div>
                <div className='portfolio__items'>
                    <PortfolioItems items={Data} />
                </div>
            </div>
        );
    }
}

export default Portfolio;
