import React, { useState } from 'react';

const SearchProperties = () => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
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

export default SearchProperties;
