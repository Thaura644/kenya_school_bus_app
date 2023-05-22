import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/homeStack';

// const Stack = createStackNavigator();

export default function App() {
  return (
    

    <View style={styles.container}>
      
    
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="Dashboard" components={Dashboard}/>
        </Stack.Navigator>
      </NavigationContainer> */}

    
      {/* <LoginScreen/> */}
      <Dashboard/>
      {/* <Navigator/> */}
      {/* <LandingPage/> */}

  

      {/* <Text>coming up in a few</Text> */}
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
