import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function App() {  
  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working </Text>
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
