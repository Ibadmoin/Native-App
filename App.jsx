import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {TextInputWithIcon, ThemeBtn} from './Comp';

const App = () => {
  const [value,setValue] = useState("Neon")
  const handleChange=(text)=>{
    setValue(text)

  }
  const handleSubmit =  ()=>{
    console.warn("Submitted: ", value)
  }

  return (
    <View>
      <TextInputWithIcon  onChange={handleChange}/>
      <View style={{ alignItems:'center'}}>
      <ThemeBtn  title="Submit" onPress={handleSubmit}  />
      </View>
      <View >
        <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold'}}>Your submitted text:</Text>
        <Text style={{marginLeft:50,fontSize:20,fontWeight:'light'}}>{value}</Text>
      </View>
    </View>
  );
};

export default App;
