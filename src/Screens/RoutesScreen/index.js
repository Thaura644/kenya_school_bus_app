import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import TopCard from "../../components/TopCard";
import TodaysSchedule from "../../components/TodaysSchedule";
import Schedule from "../../components/Schedule";
import { Skeleton } from "moti/skeleton";
import { useDispatch, useSelector } from "react-redux";

export default function RoutesScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Reducers.user);
  console.log(user);
  const [routes, setRoutes] = useState([]);
  const [newRouteName, setNewRouteName] = useState('');
  const [stops, setStops] = useState([]);
  const [newStopName, setNewStopName] = useState('');
  const [selectedRouteId, setSelectedRouteId] = useState('');

  // Fetch routes from the backend
  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      // Make an API call to fetch routes
      const response = await fetch('http://94.72.116.185:8000/get_route/');
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
      const response = await fetch('http://94.72.116.185:8000/create_route/', {
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
      const response = await fetch(`http://94.72.116.185:8000/${stop_id}`);
      const data = await response.json();
      setStops(data);
      setSelectedRouteId(routeId);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const addStop = async (routeId) => {
    try {
      // Make an API call to create a new stop for a specific route
      const response = await fetch(`http://94.72.116.185:8000/${routeId}`, {
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.topContainer}>
        <View
          style={{
            marginHorizontal: 22,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginVertical: 62 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#2d2d2d",
                fontWeight: "bold",
              }}
            >Route and Stop Management</Text>
            <View>
              <Skeleton width={45} radius="round" colorMode="light" height={45} />
            </View>
          </View>
        </View>
      </View>

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
        <Text style={styles.label}>
          Stops:
        </Text>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Schedule navigation={navigation} />
        <Schedule />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#e0e0e0",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 20,
  },
  routeContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    flex: 1,
  },
  stopContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    flex: 1,
  },
  addRouteContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  addStopContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  routeItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 4,
  },
  routeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stopItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 4,
  },
  stopName: {
    fontSize: 16,
  },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   routeContainer: {
//     marginBottom: 20,
//   },
//   routeItem: {
//     paddingVertical: 10,
//   },
//   routeName: {
//     fontSize: 16,
//   },
//   addRouteContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   stopContainer: {
//     marginBottom: 20,
//   },
//   stopItem: {
//     paddingVertical: 10,
//   },
//   stopName: {
//     fontSize: 16,
//   },
//   addStopContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   addButton: {
//     marginLeft: 10,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     backgroundColor: '#FECF67',
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
// });

