import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import './App.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/">
          <Details />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
