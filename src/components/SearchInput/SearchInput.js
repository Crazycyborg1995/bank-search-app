import React from 'react';

export default function SearchInput(props) {
  return (
    <div className="col-8">
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={e => props.searching(e.target.value)}
          className="form-control"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
