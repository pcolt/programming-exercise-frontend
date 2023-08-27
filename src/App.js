import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="App">

        <div>
          <Link to="/">home</Link>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/images/:imageName" component={ImageGallery} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

