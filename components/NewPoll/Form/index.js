import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Name from './Name';
import Row from '../../Common/Row';
import messages from '../messages';

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
    const { language } = this.props;
    const { NameText, Si, No, Submit } = messages;
    let { width } = Dimensions.get('window');
    width = Math.min(width, 700);

    return (
      <View style={containerStyle}>
        <Name
          backgroundColor="orange"
          fontSize={width / 375 * 19}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder={NameText[language]}
        />
        <Name
          backgroundColor="green"
          fontSize={width / 375 * 14}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder={Si[language]}
        />
        <Name
          backgroundColor="red"
          fontSize={width / 375 * 13}
          initialValue={this.state.name}
          invalid={this.state.nameInvalid}
          onChangeText={this.changeState.bind(null, 'name')}
          placeholder={No[language]}
        />
        <Row
          backgroundColor="blue"
          flex={0.25}
          text={messages.Submit[language]}
          onPress={this.onSubmit}
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

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(Form);
