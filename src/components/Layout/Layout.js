import React from 'react';

import SearchInput from '../SearchInput/SearchInput';
import Spinner from '../Spinner/Spinner';
import Main from '../Main/Main';
import Dropdown from '../Dropdown/Dropdown';

export default function Layout(props) {
  return (
    <React.Fragment>
      <div className="row">
        <Dropdown changed={props.changed} />
        <SearchInput searching={props.searching} />
      </div>
      {props.loading ? <Spinner /> : <Main banks={props.filteredBanks} />}
    </React.Fragment>
  );
}
