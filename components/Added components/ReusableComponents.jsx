import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export const Input = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    autoCapitalize='none'
  />
);

export const Link = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.link}>{title}</Text>
  </TouchableOpacity>
);
