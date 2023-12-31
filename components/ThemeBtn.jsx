import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ThemeBtn(props) {
  const ButtonContainer = {
    backgroundColor: props.bgColor ? props.bgColor : 'red',
    borderRadius: 5,
    overflow: 'Hidden',
    width: props.width ? props.width : 180,
    padding: 10,
    margin: 10,

    alignItems: 'center',
    justifyContent: 'center',
  };
  const ButtonText = {
    color: props.color ? props.color : 'white',
    fontSize: props.fontSize ? props.fontSize : 14,
    fontWeight: 'bold',
  };
  return (
    <TouchableOpacity onPress={props.onPress} 
    onPressIn={props.onPressIn}
    onPressOut={props.onPressOut}
    onLongPress={props.onLongPress}
    style={ButtonContainer}>
      <Text style={ButtonText}>{props.title ? props.title : 'Press here'}</Text>
    </TouchableOpacity>
  );
}
