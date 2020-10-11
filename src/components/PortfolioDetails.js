import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import Data from '../data/portfolio.json';
import Arrow from '../assets/arrow.png';
import Close from '../assets/close.png';
import Loading from '../assets/loading.gif';

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
            portfolioItem: getPortfolioItem(),
            isLoading: false
        }
    }

    increment = () => {
        this.setState({isLoading: true});
        this.setState({itemId: this.state.itemId + 1,  portfolioItem: getPortfolioItem(this.state.itemId + 1)});
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 500);
        
    }

    decrement = () => {
        this.setState({isLoading: true});
        this.setState({itemId: this.state.itemId - 1, portfolioItem: getPortfolioItem(this.state.itemId - 1)});
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 500);
    }

    render() {
        if (this.state.portfolioItem == undefined) {
            return <Redirect to='/404' />
        }

        const { img_code, max_width, name } = this.state.portfolioItem;

        return (
            <div className="portfolio-details">
                <Link to="/portfolio" className="close-btn">
                    <img src={Close} alt="" class="close" />
                </Link>
                <div className="portfolio-details__container">
                    <Link 
                        to={`/portfolio-details/${this.state.itemId - 1}`} 
                        onClick={this.decrement} 
                        className={this.state.itemId == 1 ? "link link--disabled" : "link"}
                    >
                        <img src={Arrow} alt="" className="arrow decrement"/>
                    </Link>
                    <div className="portfolio-details__item">
                        {this.state.isLoading 
                            ? <img src={Loading} alt="... loading" className="portfolio-details__loading" style={{maxWidth: '100px'}} />
                            : <img src={require(`../assets/img_detail/${img_code}`)} alt={name} className="img portfolio-details__img" style={{maxWidth: max_width}} />
                        }
                    </div>
                    <Link
                        to={`/portfolio-details/${this.state.itemId + 1}`}
                        onClick={this.increment}
                        className={this.state.itemId == this.state.itemsLength ? "link link--disabled" : "link"}
                    >
                        <img src={Arrow} alt="" className="arrow increment"/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PortfolioDetails
