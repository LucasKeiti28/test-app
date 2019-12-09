import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

// import { Container } from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('354a7df9-ece8-4b69-ae7a-4f7b15e81842');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <SafeAreaView>
        <Text>TESTE DEPLOY!</Text>
      </SafeAreaView>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
