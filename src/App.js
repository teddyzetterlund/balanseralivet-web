import React, { Component } from 'react';
import Helmet from 'react-helmet';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';

import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';

import NoMatchPage from './pages/NoMatchPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Balansera Livet – Hälsa, träning och kost på ditt sätt</title>
            <meta name="description" content="Finn hälsa, lugn och harmoni med balans i din vardag. Balansera Livet hjälper dig få ordning på kost, träning, sömn, stress, beroenden och vanor." />
          </Helmet>

          <Header />
          <Navigation />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/tjanster" component={ProductsPage} /> 
            <Route path={`/tjanster/:path`} component={ProductPage} />

            <Route exact path="/blogg" component={ArticlesPage} />
            <Route path={`/blogg/:path`} component={ArticlePage} />

            <Route exact path="/recept" component={RecipesPage} />
            <Route path={`/recept/:path`} component={RecipePage} />

            <Route path="/kontakt" component={ContactPage} />
            <Route path="/om-mig" component={AboutPage} />

            <Route component={NoMatchPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
