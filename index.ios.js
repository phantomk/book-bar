import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Examples } from '@shoutem/ui';

class BookBar extends Component {
  render() {
    return (
      <Examples />
    );
  }
}

AppRegistry.registerComponent('BookBar', () => BookBar);