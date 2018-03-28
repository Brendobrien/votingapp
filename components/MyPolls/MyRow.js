import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default ({
  backgroundColor,
  flex,
  minHeight,
  onPress,
  text,
}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
    }}
  >
    <TouchableOpacity
      disabled={
        typeof onPress !== 'function'
      }
      onPress={onPress}
      style={[
        buttonStyle,
        {
          backgroundColor,
          flex: 0.7,
        },
      ]}
    >
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
    <View style={{ flex: 0.3 }}>
      <TouchableOpacity
        disabled={
          typeof onPress !== 'function'
        }
        onPress={onPress}
        style={[
          buttonStyle,
          {
            backgroundColor: '#9F64C0',
            flex: 0.5,
          },
        ]}
      >
        <Text style={textStyle}>
          Editar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={
          typeof onPress !== 'function'
        }
        onPress={onPress}
        style={[
          buttonStyle,
          {
            backgroundColor: 'white',
            flex: 0.5,
          },
        ]}
      >
        <Text style={textStyle}>
          Borrar
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const {
  buttonStyle,
  textStyle,
} = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
