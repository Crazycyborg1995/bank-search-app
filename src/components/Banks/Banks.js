import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Unlike from '../../assets/heart.svg';
import Like from '../../assets/like.svg';
import uuid from 'uuid';
import './Banks.css';

export default function Banks(props) {
  const [like, setlike] = useState(
    JSON.parse(localStorage.getItem('likes')) || []
  );

  let likedArray = like.slice();
  let likeHandler = e => {
    e.preventDefault();
    let id = e.target.parentNode.parentNode.parentNode.dataset.id;
    if (e.target.dataset.like === 'true') {
      return;
    }
    likedArray.push(id);
    setlike(likedArray);
    localStorage.setItem('likes', JSON.stringify(likedArray));
  };

  let banks = <td className="error__message">Sorry No Data found!</td>;
  if (props.banks.length > 0) {
    banks = props.banks.slice(0, 10).map(bank => {
      return (
        <tr key={uuid.v4()} data-id={bank.ifsc}>
          <th scope="row">{bank.bank_id}</th>
          <td>
            <Link
              to={{ pathname: `/bank/${bank.ifsc.toLowerCase()}`, state: bank }}
            >
              {bank.bank_name}
            </Link>
          </td>
          <td>{bank.branch}</td>
          <td>{bank.city}</td>
          <td className="text-center">
            <a href="#">
              {likedArray.join('').includes(bank.ifsc) ? (
                <img
                  style={{ width: '20px' }}
                  src={Like}
                  alt=""
                  onClick={e => likeHandler(e)}
                  data-like="true"
                />
              ) : (
                <img
                  style={{ width: '20px' }}
                  onClick={e => likeHandler(e)}
                  data-like="false"
                  src={Unlike}
                />
              )}
            </a>
          </td>
        </tr>
      );
    });
  }
  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col"># ID</th>
          <th scope="col">Name</th>
          <th scope="col">Branch</th>
          <th scope="col">City</th>
          <th scope="col" className="text-center">
            Favourites
          </th>
        </tr>
      </thead>
      <tbody>{banks}</tbody>
    </table>
  );
}
