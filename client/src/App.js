import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import OurServices from './components/pages/OurServices';
import ContactUs from './components/pages/ContactUs';
import AvailableProperties from './components/pages/AvailableProperties';

import './index.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/OurServices" component={OurServices} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route
            exact
            path="/AvailableProperties"
            component={AvailableProperties}
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
