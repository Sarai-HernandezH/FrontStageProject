import fonts from './src/global/fonts';
import MainNavigator from './src/Navigation/MainNavigator';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';
import { AuthProvider } from './src/Context/AuthProvider';

init()
  .then(() => console.log('DB initialized'))
  .catch(err => console.log('DB failed', err.message))

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }


  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
}

