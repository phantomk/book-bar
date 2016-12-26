import React, { Component, PropTypes } from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View>
          <Button
          onPress={onPressMore}
          title="扫描"
          accessibilityLabel="扫描条形码"
          style={ styles.active }
          />
      </View>
    )
  }
}

const onPressMore = () => {
  Alert.alert("摄像头权限，扫描条形码")
}

const styles = StyleSheet.create({
  active: {
    width: 100,
    height: 50,
    color: "green",
    backgroundColor: "red"
  },
  press: {
    width: 100,
    height: 50,
    color: "red",
    backgroundColor: "blue"
  }
})