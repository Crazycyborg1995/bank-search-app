import React from 'react';
import Spinner from '../Spinner/Spinner';
import Main from '../Main/Main';

export default function Layout(props) {
  return (
    <div>
      {props.loading ? <Spinner /> : <Main banks={props.filteredBanks} />}
    </div>
  );
}
