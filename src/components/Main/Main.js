import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Banks from '../Banks/Banks';

export default function Main(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  let changePageHandler = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  let lastItemIndex = currentPage * itemsPerPage;
  let firstItemIndex = lastItemIndex - itemsPerPage;
  let itemsToLoad = props.banks.slice(firstItemIndex, lastItemIndex);
  return (
    <div>
      <Banks banks={itemsToLoad} />
      {props.banks.length > 10 ? (
        <Pagination
          currentPage={currentPage}
          totalItems={props.banks.length}
          itemsPerPage={itemsPerPage}
          changePageHandler={changePageHandler}
        />
      ) : (
        ''
      )}
    </div>
  );
}
