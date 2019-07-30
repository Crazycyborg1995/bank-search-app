import React from 'react';

export default function Dropdown(props) {
  return (
    <div className="col-4">
      <div className="input-group mb-3">
        <select className="custom-select" onChange={e => props.changed(e)}>
          <option value="chennai">Chennai</option>
          <option value="banglore">Banglore</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="kolkata">Kolkata</option>
        </select>
      </div>
    </div>
  );
}
