import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
    
   </NavigationContainer>  
  )
}

export default AppNavigator;