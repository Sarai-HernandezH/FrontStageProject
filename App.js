import fonts from './src/global/fonts';
import MainNavigator from './src/Navigation/MainNavigator';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store from './src/store';
import { Index, Home } from './src/screens';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { init } from './src/db';

init()
  .then(() => console.log('DB initialized'))
  .catch(err => console.log('DB failed', err.message))

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen 
            name="Landing" 
            component={Index} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="Registration"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="BottomTabNavigator" 
            component={BottomTabNavigator} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

