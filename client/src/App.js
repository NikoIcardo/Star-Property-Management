import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/public/Home';
import OurServices from './components/pages/public/OurServices';
import ContactUs from './components/pages/public/ContactUs';
import AvailableProperties from './components/pages/public/AvailableProperties';
import Property from './components/pages/public/Property';

import AgentLogin from './components/pages/public/AgentLogin';
import OwnerLogin from './components/pages/public/OwnerLogin';
import TenantLogin from './components/pages/public/TenantLogin';

import Tenant from './components/pages/private/Tenant';

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
            <Route exact path="/AgentLogin" component={AgentLogin} />
            <Route exact path="/OwnerLogin" component={OwnerLogin} />
            <Route exact path="/TenantLogin" component={TenantLogin} />
            <Route exact path="/Tenant" component={Tenant} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
