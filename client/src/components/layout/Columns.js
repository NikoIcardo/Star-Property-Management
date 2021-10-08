import React from 'react';
import Card from './Card';

import { homePageColumns } from '../data/homePageData';

const Columns = () => {
  return (
    <div className="row">
      <div></div>
      {homePageColumns.map((column) => (
        <div className="col-4 mt-2">
          <Card column={column} key={column.id} />
        </div>
      ))}
    </div>
  );
};

export default Columns;
