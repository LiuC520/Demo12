import React, { Component } from 'react';
import bugsnag, { Client } from 'bugsnag-react-native';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';

export default class Root extends Component {

  constructor(opts) {
    super(opts);
    this.client = new Client('69827222efe050ddc4406a8ba150bc98');
    this.client.handleUncaughtErrors();

  }

  _raiseJavaError() {
    NativeModules.CrashyCrashy.generateCrash();
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          BUGSNAG TEST APP!
        </Text>
        <Button
          containerStyle={styles.crashy}
          style={styles.crash}
          onPress={() => this._handlePress()}>
          JS CRASH!
        </Button>
        <Button
          containerStyle={styles.crashy}
          style={styles.crash}
          onPress={() => this._raiseJavaError ()}>
          JAVA CRASH!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  crashy: {
    padding:10,
    height:64,
    overflow:'hidden',
    borderRadius:4,
  },
  crash: {
    textAlign: 'center',
    fontSize: 32,
    color: 'red',
  },
});
