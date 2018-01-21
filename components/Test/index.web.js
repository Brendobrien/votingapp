import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { createElement, StyleSheet, Text, View } from 'react-native-web';

// Styled by React Native
const CustomButton = props =>
  createElement(RaisedButton, {
    ...props,
    labelStyle: { color: 'blue', textTransform: 'none' },
    style: [styles.button, props.style],
  });

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <View style={styles.container}>
          <CustomButton label="React Native wrapping Material UI" />
        </View>
      </MuiThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
