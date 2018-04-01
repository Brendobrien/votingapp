import React from 'react';
import {
  Dimensions,
  Platform,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormRow from './FormRow';
import Row from '../../Common/Row';
import messages from '../messages';
import getFormRows from './getFormRows';
import onSubmit from './onSubmit';

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

  render() {
    const {
      changeState,
      props,
      state,
    } = this;

    return (
      <View style={{ flex: 1 }}>
        {getFormRows(
          changeState.bind(this),
          props,
          state,
        ).map((x, i) => (
          <FormRow {...x} key={i} />
        ))}
        <Row
          backgroundColor="blue"
          flex={1}
          minHeight={0}
          text={
            messages.Submit[
              props.language
            ]
          }
          onPress={() =>
            onSubmit(
              changeState.bind(this),
              props,
              state,
            )
          }
        />
      </View>
    );
  }
}

const mapStateToProps = ({
  language,
}) => ({ language });
const FormComp =
  Platform.OS === 'web'
    ? withRouter(Form)
    : Form;

export default connect(mapStateToProps)(
  FormComp,
);
