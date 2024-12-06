import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Reusable components
const ProfilePicture = ({ source }) => {
  return (
    <View style={styles.profilePicture}>
      <Image source={source} style={styles.profilePictureImage} />
    </View>
  );
};

const SectionTitle = ({ title }) => {
  return <Text style={styles.sectionTitle}>{title}</Text>;
};

const ProfileField = ({ label, value }) => {
  return (
    <View style={styles.profileField}>
      <Text style={styles.profileFieldLabel}>{label}</Text>
      <Text style={styles.profileFieldValue}>{value}</Text>
    </View>
  );
};

const UserPermissions = ({ permissions }) => {
  return (
    <View style={styles.userPermissions}>
      <Text style={styles.userPermissionsTitle}>User Permissions</Text>
      {permissions.map((permission) => (
        <Text key={permission} style={styles.userPermission}>
          {permission}
        </Text>
      ))}
    </View>
  );
};

// User profile screen component
const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // profilePicture: require('./assets/profile-picture.jpg'),
    permissions: ['View dashboard', 'Edit profile'],
  };

  return (
    <View style={styles.container}>
      <ProfilePicture source={user.profilePicture} />
      <Text style={styles.name}>{user?.fullname}</Text>
      <ProfileField label="Email" value={user.email} />
      <SectionTitle title="User Permissions" />
      <UserPermissions permissions={user.permissions} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profilePictureImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileField: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileFieldLabel: {
    flex: 1,
    fontWeight: 'bold',
  },
  profileFieldValue: {
    flex: 2,
  },
  userPermissions: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  userPermissionsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userPermission: {
    marginBottom: 5,
  },
});

export default UserProfile;
