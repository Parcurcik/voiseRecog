import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authorization from './components/Authorization';
import { COLORS } from './assets/colors/colors';
import Registration from './components/Registration';
import Profile from './components/Profile';
import NavigationBar from './components/NavigationBar';
import AuthProvider, { useAuth } from './AuthContext';


const Stack = createNativeStackNavigator();

const Navigator = () => {

  const [user] = useAuth()

  if(!user) {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen  name="Authorization" component={Authorization} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationBar/>
  )
}


export default function App() {
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
