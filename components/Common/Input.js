import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
} from 'react-native';

import colors from '../../helpers/colors';

class Input extends React.Component {
  state = {
    text: this.props.initialValue || '',
  };

  render() {
    const {
      fontSize,
      invalid,
      onChangeText,
      placeholder,
    } = this.props;

    return (
      <View style={containerStyle}>
        <View
          style={[
            inputConStyle,
            invalid && invalidStyle,
          ]}
        >
          <TextInput
            underlineColorAndroid="transparent"
            value={this.state.text}
            autoCorrect={false}
            onChangeText={text => {
              this.setState({ text });
              onChangeText(text);
            }}
            onSubmitEditing={
              Keyboard.dismiss
            }
            style={[
              inputStyle,
              {
                fontSize:
                  fontSize || 15,
              },
            ]}
            placeholder={placeholder}
          />
        </View>
      </View>
    );
  }
}

const {
  containerStyle,
  inputConStyle,
  inputStyle,
  invalidStyle,
} = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 65,
  },
  inputConStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: colors.black,
    flex: 9,
    fontSize: 15,
  },
  invalidStyle: {
    borderColor: '#9F64C0',
    borderWidth: 5,
  },
});

export default Input;
