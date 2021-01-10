import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PortfolioItem extends Component {
    render() {
        const { img_code, id } = this.props.item;
        //const image = require({ img });
        return (
            <div className='portfolio__item'>
                <Link to={{
                    pathname: `/portfolio-details/${id}`
                }}>
                    <img
                        src={require(`../assets/img_items/${img_code}`).default}
                        alt=''
                        className='img img-item'
                    />
                </Link>
            </div>
        );
    }
}

export default PortfolioItem;
