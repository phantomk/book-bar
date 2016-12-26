import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';

import Book from './components/Book';
import Translator from './components/Translator';
import ScanButton from './components/ScanButton'

class BookBar extends Component {
  render() {
    return (
      <View>
        <Book />
        <ScanButton />
      </View>
    );
  }
}

AppRegistry.registerComponent('BookBar', () => BookBar);

export default BookBar