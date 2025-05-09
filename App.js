import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Alert, TouchableOpacity,ImageBackground } from 'react-native';
let Hola= 1
let imgExterna={uri: 'https://www.lifeder.com/wp-content/uploads/2019/12/matematicas-concepto-lifeder-min-696x464.jpg'}

const App2=()=>{
    const[count,setCount]=useState(1)
    const Contador=()=>setCount(count+1)
  
  return (
    <View style={styles.container}>
      <ImageBackground
      source={imgExterna}
      resizeMode='cover'
      style= {styles.backgroundImage}></ImageBackground>
      <Text  style={styles.text}>  Contador: {count}</Text>
      <TouchableOpacity onPress={Contador}>  
      <Text>Presionar</Text>
      </TouchableOpacity>
      

  <StatusBar style="auto" />
    </View>
  );
};
export default App2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:'bold',
    fontFamily:'Cochin'
  },
});


