import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Button = () => {
  return (
    <View style={styles.Btn}>
      <Text style={styles.BtnText}>Click Me</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: 'blue',
    
    width:"50px " ,
    height:"80px",
    padding: "40px",
    margin: "20px",
  },
  BtnText:{
    textDecorationColor: 'white',

  }
});

export default Button;