import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import FormRow from './FormRow';
import Row from '../../Common/Row';
import messages from '../messages';

class Form extends React.Component {
  state = {
    name: '',
    nameInvalid: false,
    yes: '',
    yesInvalid: false,
    no: '',
    noInvalid: false,
  };

  onSubmit = () => {
    const {
      name,
      yes,
      no,
    } = this.state;

    const invalidObj = {
      nameInvalid: !name,
      yesInvalid: !yes,
      noInvalid: !no,
    };
    const invalid = Object.values(
      invalidObj,
    ).reduce((a, b) => a || b);

    if (!invalid) {
      console.log('valid');
      this.setState({ ...invalidObj });
    } else {
      console.log('invalid');
      this.setState({ ...invalidObj });
    }
  };

  render() {
    console.log(this.state);
    const { language } = this.props;
    const {
      NameText,
      YesText,
      NoText,
      Submit,
    } = messages;
    let width = Math.min(
      Dimensions.get('window').width,
      700,
    );

    return (
      <View style={containerStyle}>
        <FormRow
          backgroundColor="orange"
          fontSize={width / 375 * 19}
          initialValue={this.state.name}
          invalid={
            this.state.nameInvalid
          }
          onChangeText={name =>
            this.setState({ name })
          }
          placeholder={
            NameText[language]
          }
        />
        <FormRow
          backgroundColor="green"
          fontSize={width / 375 * 14}
          initialValue={this.state.yes}
          invalid={
            this.state.yesInvalid
          }
          onChangeText={yes =>
            this.setState({ yes })
          }
          placeholder={
            YesText[language]
          }
        />
        <FormRow
          backgroundColor="red"
          fontSize={width / 375 * 13}
          initialValue={this.state.no}
          invalid={this.state.noInvalid}
          onChangeText={no =>
            this.setState({ no })
          }
          placeholder={NoText[language]}
        />
        <Row
          backgroundColor="blue"
          flex={0.25}
          text={
            messages.Submit[language]
          }
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}

const {
  containerStyle,
} = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

const mapStateToProps = ({
  language,
}) => ({ language });

export default connect(mapStateToProps)(
  Form,
);
