import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="cog" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Icon name="users" size={48} color="#333333" />
          <Text style={styles.cardTitle}>Students</Text>
          <Text style={styles.cardSubtitle}>View and manage students</Text>
        </View>
        <View style={styles.card}>
          <Icon name="bus" size={48} color="#333333" />
          <Text style={styles.cardTitle}>Buses</Text>
          <Text style={styles.cardSubtitle}>View and manage buses</Text>
        </View>
        <View style={styles.card}>
          <Icon name="road" size={48} color="#333333" />
          <Text style={styles.cardTitle}>Routes</Text>
          <Text style={styles.cardSubtitle}>View and manage routes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  button: {
    backgroundColor: '#333333',
    borderRadius: 50,
    padding: 8,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
});

export default Dashboard;