import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import OurServices from './components/pages/OurServices';
import ContactUs from './components/pages/ContactUs';
import AvailableProperties from './components/pages/AvailableProperties';
import Property from './components/pages/Property';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
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
            <Route exact path="/Property" component={Property} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
