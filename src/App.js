import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Dropdown from './components/Dropdown/Dropdown';
import SearchInput from './components/SearchInput/SearchInput';
import Bank from './components/Bank/Bank';
import axios from 'axios';
import { debounce } from 'lodash';
import './App.css';

class App extends Component {
  state = {
    banks: [],
    filteredBanks: [],
    loading: true
  };

  componentDidMount() {
    if (localStorage.getItem('chennai')) {
      this.fetchCachedData('chennai');
    } else {
      axios
        .get('https://vast-shore-74260.herokuapp.com/banks?city=CHENNAI')
        .then(res => {
          localStorage.setItem('chennai', JSON.stringify(res.data));
          this.setState({
            banks: res.data,
            filteredBanks: res.data,
            loading: false
          });
        });
    }
  }

  fetchCachedData = city => {
    let data = JSON.parse(localStorage.getItem(city));

    this.setState({ banks: data, filteredBanks: data, loading: false });
  };

  dropdownHandler = e => {
    let city = e.target.value;
    this.setState({ loading: true });
    if (localStorage.getItem(city)) {
      this.fetchCachedData(city);
    } else {
      axios
        .get(
          `https://vast-shore-74260.herokuapp.com/banks?city=${city.toUpperCase()}`
        )
        .then(res => {
          localStorage.setItem(city, JSON.stringify(res.data));
          this.setState({
            banks: res.data,
            filteredBanks: res.data,
            loading: false
          });
        });
    }
  };

  filterData = text => {
    this.setState({
      filteredBanks: this.getData(this.state.banks, text)
    });
  };

  getData = (data, query) => {
    let regex = new RegExp(query, 'gi');
    let filtered = data.filter(data => {
      for (let item of Object.values(data)) {
        if (regex.test(item)) {
          return true;
        }
      }
      return false;
    });
    return filtered;
  };

  searchHandler = debounce(text => {
    this.filterData(text);
  }, 500);

  render() {
    return (
      <div className="container mt-5">
        <Header />
        <Switch>
          <Route path="/bank/:id" exact component={Bank} />
          <Route
            path="/"
            render={() => (
              <div>
                <div className="row">
                  <Dropdown changed={this.dropdownHandler} />
                  <SearchInput searching={this.searchHandler} />
                </div>
                <Layout
                  loading={this.state.loading}
                  filteredBanks={this.state.filteredBanks}
                />
              </div>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
