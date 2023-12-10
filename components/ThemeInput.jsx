import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function ThemeInput(props) {
    const inputStyle = {
        borderWidth: props.borderWidth?props.borderWidth:0,
        borderColor: '#000',
        padding: 5,
        paddingLeft:10,
        margin: 10,
        flex:1,
        backgroundColor: props.bgColor?props.bgColor:"#d6ffd9",
    }
    
  return (



    <TextInput 
    style={[inputStyle]}

    placeholder={props.placeholder?props.placeholder:'Type Something Here..'}
    />
    

  


    
  )
}
