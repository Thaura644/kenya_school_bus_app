import { StackActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);


  const handleLogin = () => {
    // Implement login logic here
    navigation.dispatch(
      StackActions.replace('LoginScreen',{
        user: 'jane',
      })
    );
  };

  const handleSignup = () => {
    // Implement signup logic here
    navigation.dispatch(
      StackActions.replace('LoginScreen',{
        user: 'jane',
      })
    );
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>{isSignup ? 'Sign Up' : 'Login'}
       </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} />
      <TouchableOpacity style={styles.button} onPress={isSignup ? handleSignup : handleLogin}>
        <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Login'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.link}>
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});


export default LoginScreen;