import React, { Component } from 'react';
import { Route } from 'react-router';
import { ContactListing } from './components/contactListing';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Route exact path='/' component={ContactListing} />
    );
  }
}
