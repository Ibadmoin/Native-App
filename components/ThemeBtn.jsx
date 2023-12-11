import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

export default function ThemeBtn(props) {
   const ButtonContainer = {
        backgroundColor :props.bgColor?props.bgColor: "#024220",
        borderRadius: 5,
        overflow: "Hidden",
        width: props.width? props.width: 180,
        padding: 10,

        alignItems: "center",
        justifyContent : "center"
    }
    const     ButtonText = {
        color:props.color ? props.color:"white",
        fontSize :props.fontSize?props.fontSize:14,
        fontWeight :'bold',
        

    }
  return (
    <TouchableOpacity style={ButtonContainer}>
        <Text style = {ButtonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}


