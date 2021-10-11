import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterProperties } from '../../actions/propertyActions';

const SearchProperties = ({ filterProperties }) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
    filterProperties(search);
  };
  return (
    <form>
      <div className="form-group row mx-2">
        <div className="col-4">
          <input
            type="text"
            name="search"
            value={search}
            onChange={onChange}
            placeholder="Search Properties"
            className="form-control"
          />
        </div>
      </div>
    </form>
  );
};

export default connect(null, { filterProperties })(SearchProperties);
