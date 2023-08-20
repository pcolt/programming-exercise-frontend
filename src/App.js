import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImageGallery from './ImageGallery';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/images/:imageName" component={ImageGallery} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

