import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const StopList = ({ stops }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stops</Text>
      <FlatList
        data={stops}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.stop}>
            <Text style={styles.stopName}>{item.name}</Text>
            <Text style={styles.stopLocation}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stop: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  stopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stopLocation: {
    fontSize: 14,
  },
});

export default StopList;
