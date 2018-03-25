import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Name from './Name';
import messages from '../../../helpers/messages';

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
          backgroundColor="orange"
          fontSize={20}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder={messages.newPollName}
        />
        <Name
          backgroundColor="green"
          fontSize={16}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder={messages.newPollSi}
        />
        <Name
          backgroundColor="red"
          fontSize={15}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder={messages.newPollNo}
        />
        <Name
          backgroundColor="blue"
          fontSize={30}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder="SUBMIT"
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
