import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// Reusable TextInput component
const CustomTextInput = ({ label, value, onChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={onChange} />
    </View>
  );
};

// Reusable button component
const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

// Attendance management screen component
const AttendanceManagementScreen = () => {
  // State variables for storing input values
  const [studentId, setStudentId] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('');

  // Function to handle submission of attendance record
  const handleAttendanceSubmit = () => {
    // Code to submit attendance record
  };

  return (
    <View>
      <CustomTextInput
        label="Student ID"
        value={studentId}
        onChange={setStudentId}
      />
      <CustomTextInput
        label="Attendance Date"
        value={attendanceDate}
        onChange={setAttendanceDate}
      />
      <CustomTextInput
        label="Attendance Status"
        value={attendanceStatus}
        onChange={setAttendanceStatus}
      />
      <CustomButton title="Submit" onPress={handleAttendanceSubmit} />
    </View>
  );
};

export default AttendanceManagementScreen;
