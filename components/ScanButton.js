import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { Button, Text, View } from '@shoutem/ui';

export default class MyScene extends Component {
  render() {
    return (
      <View>
        <Button
          styleName="md-gutter dark"
          onPress={onPressMore}
          title="扫描"
          accessibilityLabel="扫描条形码"
        >
          <Text>扫描</Text>
        </Button>
      </View>
    );
  }
}

const onPressMore = () => {
  Alert.alert('摄像头权限，扫描条形码');
};
