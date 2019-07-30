import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
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
    axios
      .get('https://vast-shore-74260.herokuapp.com/banks?city=CHENNAI')
      .then(res => {
        this.setState({
          banks: res.data,
          filteredBanks: res.data,
          loading: false
        });
      });
  }

  dropdownHandler = e => {
    this.setState({ loading: true });
    axios
      .get(
        `https://vast-shore-74260.herokuapp.com/banks?city=${e.target.value.toUpperCase()}`
      )
      .then(res => {
        this.setState({
          banks: res.data,
          filteredBanks: res.data,
          loading: false
        });
      });
  };

  filterData = text => {
    console.log('fired');
    this.setState({
      filteredBanks: this.getData(this.state.banks, text)
    });
  };

  getData = (data, query) => {
    let regex = new RegExp(query, 'gi');
    console.log(query);
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
            component={() => (
              <Layout
                loading={this.state.loading}
                changed={this.dropdownHandler}
                searching={this.searchHandler}
                filteredBanks={this.state.filteredBanks}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
