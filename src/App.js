import React from 'react';
import './App.css';


import WelcomePage from './components/welcome.page.component/welcome.page.component';
import PortfolioPage from './components/portfolio.page.component/portfolio.page.component';
import AboutPage from './components/about.page.component/about.page.component';
import ContactPage from './components/contact.page.component/contact.page.component';
import Page from './components/page.component/page.component';

import { Switch, Route } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
      <div className="App">
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route path="/about" render={routeProps => (
                    <Page>
                      <AboutPage />
                    </Page>
                  )}
                />
                <Route path="/portfolio" render={routeProps => (
                    <Page>
                      <PortfolioPage />
                    </Page>
                  )} 
                />
                <Route path="/contact" render={routeProps => (
                    <Page>
                      <ContactPage />
                    </Page>
                  )}
                />
                <Route path="/" render={routeProps => (
                    <Page>
                      <WelcomePage />
                    </Page>
                  )} 
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
  );
}

export default App;
