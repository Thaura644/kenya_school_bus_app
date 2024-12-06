import React, { useEffect, useState } from "react";
import { View, Text, SelectList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SchoolSelectionScreen = ({ route, navigation }) => {
  const [schools, setSchools] = useState([]);
  const { userId } = route.params; // Retrieve userId passed from the previous screen

  // Fetch schools from backend
  const fetchSchools = async () => {
    try {
      const response = await axios.get(`http://94.72.116.185:8000/get_school`);
      if (Array.isArray(response.data)) {
        setSchools(response.data);
        await AsyncStorage.setItem("schools", JSON.stringify(response.data));
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching schools data:", error);
      Alert.alert("Failed to load schools. Please try again later.");
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  const handleSchoolSelection = (school) => {
    // Implement logic to connect the user to the selected school
    console.log("Selected School:", school);
    // Navigate or perform actions to link user with selected school
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Select Your School</Text>
      <SelectList
        setSelected={handleSchoolSelection}
        data={schools.map((school, index) => ({ key: index.toString(), value: school.name }))}
        save="value"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default SchoolSelectionScreen;
