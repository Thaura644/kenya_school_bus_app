import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const BusTracking = () => {
    const [busLocation, setBusLocation] = useState({
      latitude: -1.2921,
      longitude: 36.8219,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

  return (
    <View style = {style.container}>
    <MapView
    style={styles.map} 
    region={region} 
    onRegionChange={setRegion}
    >
      <Marker 
      coordinate={{ latitude: -1.2921, longitude: 36.8219 }}
      title="Bus Location"
      description= "The current location of the bus" 

     >
        <Icon name="bus" size={25} color="orange"/>
        </Marker>
    </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default BusTracking