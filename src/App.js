import React, { Component, useEffect } from "react";

//imported connect
import { connect } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//imported action
import { fetchSmurfs } from './actions/index';

class App extends Component {
  render(props) {
    useEffect(() => {
      fetchSmurfs();
  }, {});

    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    state: state,
  }
}

export default connect(mapStateToProps, {fetchSmurfs}) (App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.