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
import onSubmit from './onSubmit';

class Form extends React.Component {
  state = {
    reason: '',
    reasonInvalid: false,
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
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
        }}
      >
        <FormRow
          backgroundColor="#9F64C0"
          initialValue={state.reason}
          invalid={state.reasonInvalid}
          onChangeText={x =>
            this.changeState(
              'reason',
              x,
            )
          }
          placeholder={
            props.language === 'English'
              ? 'New Reason (No Commas)'
              : 'Nueva Razón (Sin Comas)'
          }
        />
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.3,
            justifyContent: 'center',
          }}
        >
          <Row
            backgroundColor="white"
            flex={1}
            rowStyle={{
              borderColor: '#9F64C0',
              borderWidth: 1,
            }}
            textStyle={{
              color: '#9F64C0',
              fontSize: 20,
            }}
            text={
              props.language ===
              'English'
                ? 'Submit'
                : 'Enviar'
            }
            minHeight={70}
            onPress={() =>
              onSubmit(
                changeState.bind(this),
                props,
                state,
              )
            }
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({
  language,
  polls,
}) => ({ language, polls });
const FormComp =
  Platform.OS === 'web'
    ? withRouter(Form)
    : Form;

export default connect(mapStateToProps)(
  FormComp,
);
