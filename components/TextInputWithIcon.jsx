import React from 'react';
import {View, Text} from 'react-native';
import ThemeInput from './ThemeInput';

export default function TextInputWithIcon(props) {
  const containerStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: props.borderWidth ? props.borderWidth : 0,
    borderColor: '#000',
    borderRadius: 8,
    padding: 0,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: props.bgColor ? props.bgColor : '#d6ffd9',
  };

  const iconStyle = {
    fontSize: 20,
    // backgroundColor: "red",
    
    // Edit icons style here and add Icon ionstead of text
    width: 24,
    height: 24,
    textAlign : "center",
    textAlignVertical: 'center',
  };

  return (
    <View style={containerStyle}>
      <Text style={iconStyle}>Ω</Text>
      <ThemeInput onChange={props.onChange} bgColor={props.bgColor} placeholder={props.placeholder} />
    </View>
  );
}
