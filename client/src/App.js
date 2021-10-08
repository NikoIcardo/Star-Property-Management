import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import './index.css';

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
      </Fragment>
    </Router>
  );
};

export default App;
