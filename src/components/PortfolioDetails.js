import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import Data from '../data/portfolio.json';

function setItemId() {
    return parseInt(window.location.pathname.split('/')[2]);
}

function getPortfolioItem(itemId) {
    let id = itemId == undefined ? setItemId() : itemId;
    let item = Data.find(item => item.id == id);
    return item;
}

export class PortfolioDetails extends Component {
    constructor() {
        super();
        this.state = {
            itemId: setItemId(),
            itemsLength: Data.length,
            portfolioItem: getPortfolioItem()
        }
    }

    increment = () => {
        this.setState({itemId: this.state.itemId + 1,  portfolioItem: getPortfolioItem(this.state.itemId + 1)});
    }

    decrement = () => {
        this.setState({itemId: this.state.itemId - 1, portfolioItem: getPortfolioItem(this.state.itemId - 1)});
    }

    render() {
        if (this.state.portfolioItem == undefined) {
            return <Redirect to='/404' />
        }
        return (
            <div className="portfolio-details">
                <Link 
                    to={`/portfolio-details/${this.state.itemId - 1}`} 
                    onClick={this.decrement} 
                    className={this.state.itemId == 1 ? "link--disabled" : "link"}
                >
                    Retreat!
                </Link>
                <h1>Portfolio Details!</h1>
                <p>{ this.state.portfolioItem.name }</p>
                <Link
                    to={`/portfolio-details/${this.state.itemId + 1}`}
                    onClick={this.increment}
                    className={this.state.itemId == this.state.itemsLength ? "link--disabled" : "link"}
                >
                    Onward!
                </Link>
            </div>
        )
    }
}

export default PortfolioDetails
