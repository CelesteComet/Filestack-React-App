import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route exact path='/' component={ Home } />
            <Route exact path='/add' component={ Add } />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
