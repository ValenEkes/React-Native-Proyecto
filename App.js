import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default function App() {
  let Hola= 1
  return (
    <View style={styles.container}>
      <Text>{Hola}</Text>
      <Button
onPress={() => Alert.alert(`cantidad: ${Hola+1}`)}  title="Sumar uno"
/>    

  <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
