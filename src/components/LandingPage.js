import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

const LandingPage = () => {
  return (
    
    <ImageBackground
      source={require('./assets/bus.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>

      <Image source = {require('./assets/logo1.png')}
        style={{ width: 150, height: 30, marginRight: 50, marginTop: 40}}
        />
         <View style={styles.navbar}>
        <Text style={styles.menuItem}>What We Offer</Text>
        <Text style={styles.menuItem}>About Us</Text>
        <Text style={styles.menuItem}>Schedule a Demo?</Text>
        <Text style={styles.menuItem}>Stats</Text>
        <Text style={styles.menuItem}>Login</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to our landing page!</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</Text>
      </View>
    
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
      },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default LandingPage;
