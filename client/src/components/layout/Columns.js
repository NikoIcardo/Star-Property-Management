import React from 'react';
import Card from './Card';

import { homePageColumns } from '../data/homePageData';

const Columns = () => {
  return (
    <div className="row">
      <div></div>
      {homePageColumns.map((column) => (
        <div className="col-4 my-5 mx-0 d-flex align-items-stretch">
          <Card column={column} key={column.id} />
        </div>
      ))}
    </div>
  );
};

export default Columns;
