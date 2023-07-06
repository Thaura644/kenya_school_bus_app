import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function RoutesScreen() {
  const [routes, setRoutes] = useState([]);
  const [newRouteName, setNewRouteName] = useState('');
  const [stops, setStops] = useState([]);
  const [newStopName, setNewStopName] = useState('');

  // Fetch routes from the backend
  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      // Make an API call to fetch routes
      const response = await fetch('http://your-api-endpoint/routes');
      const data = await response.json();
      setRoutes(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const addRoute = async () => {
    try {
      // Make an API call to create a new route
      const response = await fetch('http://your-api-endpoint/routes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newRouteName }),
      });
      const data = await response.json();
      setRoutes([...routes, data]);
      setNewRouteName('');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const fetchStops = async (routeId) => {
    try {
      // Make an API call to fetch stops for a specific route
      const response = await fetch(`http://your-api-endpoint/routes/${routeId}/stops`);
      const data = await response.json();
      setStops(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const addStop = async (routeId) => {
    try {
      // Make an API call to create a new stop for a specific route
      const response = await fetch(`http://your-api-endpoint/routes/${routeId}/stops`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newStopName }),
      });
      const data = await response.json();
      setStops([...stops, data]);
      setNewStopName('');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Route and Stop Management</Text>

      <View style={styles.routeContainer}>
        <Text style={styles.label}>Routes:</Text>
        <FlatList
          data={routes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.routeItem}
              onPress={() => fetchStops(item.id)}
            >
              <Text style={styles.routeName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.addRouteContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter new route name"
            value={newRouteName}
            onChangeText={(text) => setNewRouteName(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addRoute}>
            <Text style={styles.buttonText}>Add Route</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.stopContainer}>
        <Text style={styles.label}>Here is the continuation of the code for the Route and Stop Management screen in your React Native app:

```javascript
        Stops:</Text>
        <FlatList
          data={stops}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.stopItem}>
              <Text style={styles.stopName}>{item.name}</Text>
            </View>
          )}
        />

        <View style={styles.addStopContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter new stop name"
            value={newStopName}
            onChangeText={(text) => setNewStopName(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={() => addStop(selectedRouteId)}>
            <Text style={styles.buttonText}>Add Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  routeContainer: {
    marginBottom: 20,
  },
  routeItem: {
    paddingVertical: 10,
  },
  routeName: {
    fontSize: 16,
  },
  addRouteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopContainer: {
    marginBottom: 20,
  },
  stopItem: {
    paddingVertical: 10,
  },
  stopName: {
    fontSize: 16,
  },
  addStopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FECF67',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

