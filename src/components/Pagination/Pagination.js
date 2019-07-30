import React, { useState } from 'react';
import uuid from 'uuid';

export default function Pagination(props) {
  const [beg, setBeg] = useState(0);
  const totalPageNums = [];
  let { totalItems, itemsPerPage } = props;
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    totalPageNums.push(i);
  }

  let incrementPages = e => {
    e.preventDefault();
    let add = beg + 5;
    if (add > totalPageNums.length) {
      return;
    }
    setBeg(add);
  };

  let decrementPages = e => {
    e.preventDefault();
    let sub = beg - 5;
    if (Math.sign(sub) != -1) {
      setBeg(sub);
    }
  };

  let showPageNums = () => totalPageNums.slice(beg, beg + 5);

  return (
    <nav>
      <ul className="pagination justify-content-center mt-5">
        <li className="page-item">
          <a className="page-link" href="#" onClick={e => decrementPages(e)}>
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {showPageNums().map(pageNum => {
          return (
            <li className="page-item" key={uuid.v4()}>
              <a
                className={
                  pageNum === props.currentPage
                    ? 'page-link bg-primary text-white'
                    : 'page-link'
                }
                href="#"
                onClick={e => props.changePageHandler(e, pageNum)}
              >
                {pageNum}
              </a>
            </li>
          );
        })}

        <li className="page-item">
          <a className="page-link" href="" onClick={e => incrementPages(e)}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
