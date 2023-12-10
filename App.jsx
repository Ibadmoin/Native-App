import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import ThemeBtn from './components/ThemeBtn';
import ThemeInput from './components/ThemeInput';
import TextInputWithIcon from './components/test';


const App = () => {
  const [name, setName] = useState('');
  const [show ,setShow] = useState(true)
  

  const ShowName = () => {
    setShow(!show)
    setName('Ibad');
  };
  return (
    <View>
      <Text style={styles.Text}>Hello World!</Text>
      <Button
        onPress={ShowName}
        title={show?"Hide":"Show"}
        color={'red'}
        
        style={styles.Btn}
      />
      <Text>{show? name: ""}</Text>
      <ThemeBtn  title="Get Started Lessgoo " bgColor={"skyblue"}/>
     

      <TextInputWithIcon  iconName='user' placeholder="Username Neon" />


    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 40,

  },
  Btn:{
    backgroundColor:"green"
  }
});
export default App;
