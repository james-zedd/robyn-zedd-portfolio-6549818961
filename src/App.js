import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './sass/application.scss';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PortfolioDetails from './components/PortfolioDetails';
import FourOhFour from './components/404';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/portfolio' component={Portfolio} />
                    <Route path='/portfolio-details/*' component={PortfolioDetails} />
                    <Route path='*' component={FourOhFour} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
