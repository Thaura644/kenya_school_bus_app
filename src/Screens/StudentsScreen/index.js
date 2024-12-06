import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const StudentsScreen = () => {
  const route = useRoute();
  
  const user = useSelector((state) => state.Reducers.user || {});
  const { email } = useSelector((state) => state.Reducers.user || {});
  const { school } = useSelector((state) => state.Reducers.user || {});
 
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          // source={require("../../assets/icons8-circled-profile-64.png")}
          style={styles.profileImage}
        />
        <Text style={styles.fullname}>{user?.fullname}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.school}>{user?.school}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name:</Text>
          <Text style={styles.infoValue}>{user?.fullname}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>School:</Text>
          <Text style={styles.infoValue}>{school}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  fullname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 10,
  },
  school: {
    fontSize: 16,
    color: '#888888',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    width: 100,
    fontWeight: 'bold',
  },
  infoValue: {
    flex: 1,
  },
});

export default StudentsScreen;

