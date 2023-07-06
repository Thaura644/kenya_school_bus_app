import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StudentsScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{fullname}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>School:</Text>
        <Text style={styles.value}>{school}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
});


