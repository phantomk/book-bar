import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { Button, Text, View } from '@shoutem/ui';

import CodeScanner from './CodeScanner';

export default class MyScene extends Component {
  openCamera() {}

  render() {
    return (
      <View>
        <Button
          styleName="md-gutter dark"
          onPress={this.openCamera()}
          title="扫描"
          accessibilityLabel="扫描条形码"
        >
          <Text>扫描</Text>
        </Button>
      </View>
    );
  }
}
