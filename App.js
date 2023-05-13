import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
      <Dashboard/>

  

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
