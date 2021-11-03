import React, { Component } from 'react';
import Carousel from '../../layout/Carousel';
import Columns from '../../layout/Columns';

class Home extends Component {
  render = () => (
    <div className="container-fluid mx-0 p-0">
      <Carousel />
      <Columns />
    </div>
  );
};

export default Home;
