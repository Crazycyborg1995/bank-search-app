import React from 'react';

export default function Bank(props) {
  if (props.location.state) {
    var {
      bank_name,
      address,
      branch,
      city,
      ifsc,
      state
    } = props.location.state;
  }
  return (
    <div className="card text-center my-5">
      {props.location.state ? (
        <div className="card-body">
          <h3 className="card-title mb-5">{bank_name}</h3>
          <dl className="row">
            <dt className="col-sm-5">Address</dt>
            <dd className="col-sm-7">
              <p>{address}</p>
            </dd>

            <dt className="col-sm-5">Branch</dt>
            <dd className="col-sm-7">
              <p>{branch}</p>
            </dd>
            <dt className="col-sm-5">IFSC</dt>
            <dd className="col-sm-7">
              <p>{ifsc}</p>
            </dd>
            <dt className="col-sm-5">City</dt>
            <dd className="col-sm-7">
              <p>{city}</p>
            </dd>
            <dt className="col-sm-5">State</dt>
            <dd className="col-sm-7">
              <p>{state}</p>
            </dd>
          </dl>
          <a
            href="#"
            onClick={() => props.history.goBack()}
            className="btn btn-primary"
          >
            Go Back
          </a>
        </div>
      ) : (
        <h1>Not Available</h1>
      )}
    </div>
  );
}
