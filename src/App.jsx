import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TVShows from './components/TVShows/TVShows';
import Movies from './components/Movies/Movies';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv-shows" component={TVShows} />
        <Route path="/movies" component={Movies} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;