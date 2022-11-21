import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile';
import RegistrationScreen from './screens/RegistrationScreen';
import AuthProvider, { useAuth } from './AuthContext';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { useContext } from 'react';



const Stack = createNativeStackNavigator();

const Navigator = () => {

  const [user] = useAuth()

  if(!user) {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        
      }}>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

  )
}


export default function App() {

  const [fontsLoaded] = useFonts({
    'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator></Navigator>
      </AuthProvider>
    </NavigationContainer>
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
