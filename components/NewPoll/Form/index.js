import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

import Name from './Name';

class Form extends React.Component {
  state = {
    name: '',
    nameInvalid: false,
  };

  changeState = (name, value) => {
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { name, nameInvalid } = this.state;

    const invalidObj = {
      nameInvalid: name,
    };
    const invalid = Object.values(invalidObj).reduce((a, b) => a || b);

    if (!invalid) {
      console.log('valid');
    } else {
      console.log('invalid');
      this.setState({ ...invalidObj });
    }
  };
  render() {
    return (
      <View style={containerStyle}>
        <Name
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
        />
      </View>
    );
  }
}

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

export default connect()(Form);
