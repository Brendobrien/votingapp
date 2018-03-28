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
import getFormRows from './getFormRows';
import submitPoll from '../../../state/polls/submitPoll';

class Form extends React.Component {
  state = {
    name: '',
    nameInvalid: false,
    yes: '',
    yesInvalid: false,
    no: '',
    noInvalid: false,
  };

  changeState(name, value) {
    this.setState({ [name]: value });
  }

  onSubmit = () => {
    const invalidObj = {
      nameInvalid: !this.state.name,
      yesInvalid: !this.state.yes,
      noInvalid: !this.state.no,
    };
    this.setState({ ...invalidObj });

    const valid = Object.values(
      invalidObj,
    ).reduce((a, b) => a || b);

    this.props.submitPoll(valid);
  };

  render() {
    const {
      changeState,
      onSubmit,
      props,
      state,
    } = this;
    const rows = getFormRows(
      changeState.bind(this),
      props,
      state,
    );

    return (
      <View style={containerStyle}>
        {getFormRows(
          changeState.bind(this),
          props,
          state,
        ).map((x, i) => (
          <FormRow {...x} key={i} />
        ))}
        <Row
          backgroundColor="blue"
          flex={0.25}
          text={
            messages.Submit[
              props.language
            ]
          }
          onPress={onSubmit}
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
  polls,
}) => ({ language, polls });

export default connect(
  mapStateToProps,
  {
    submitPoll,
  },
)(Form);
