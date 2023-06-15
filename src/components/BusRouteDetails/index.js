import React, { useRef, useEffect } from "react";
import {
  View,
  Dimensions,
  Animated,
  Pressable,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Portal } from "react-native-paper";
import { Skeleton } from "moti/skeleton";
export default function TopupfromSlide({
  show,
  onDismiss,
  children,
  enableBackDropDismiss,
}) {
  const bottomSheetHeight = Dimensions.get("window").height * 0.38;
  const deviceWidth = Dimensions.get("window").width;
  const [text, setText] = React.useState("");
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = (event) => {
    if (event.nativeEvent.translateY > 0) {
      bottom.setValue(event.nativeEvent.translateY);
    }
  };

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translateY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);
  if (!open) {
    return null;
  }
  /**
      <Text
            style={{
              padding: 10,
              fontSize: 20,
              left: 20,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Morning Student Pickup
          </Text>
           <Text style={styles.methodname}>Bus-09</Text>
             <Text style={styles.drivername}>John Doe</Text>
   */
  return (
    <Portal>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      ></Pressable>

      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,

            shadowOffset: {
              height: 13,
            },
          },
          styles.shadow,
          styles.common,
        ]}
      >
        <View style={[styles.header, styles.shadow, styles.common]}>
          <View
            style={{
              width: 60,
              height: 3,
              borderRadius: 1.5,
              position: "absolute",
              top: 0,
              left: (deviceWidth - 60) / 2,
              zIndex: 10,
              backgroundColor: "#ccc",
            }}
          ></View>
        </View>
        <View style={styles.methods}>
          <View style={{ padding: 10, marginTop: 0 }}>
            <Skeleton
              width={"100%"}
              style={{
                padding: 10,
              }}
              colorMode="light"
              height={25}
            />
          </View>
          <TouchableOpacity style={styles.method}>
            <View style={styles.box}>
              <Image
                source={require("../../../assets/bus-icon.jpg")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <Skeleton width={65} colorMode="light" height={25} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "auto",
                right: 55,
              }}
            >
              <MaterialIcons
                size={25}
                style={{ marginLeft: 10 }}
                name="traffic"
                color="green"
              ></MaterialIcons>

              <Skeleton width={65} colorMode="light" height={25} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              backgroundColor: "#FECF67",
              marginHorizontal: 1,
            }}
          />
          <TouchableOpacity style={styles.method2}>
            <View style={styles.box2}>
              <Image
                source={require("../../../assets/driver.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View>
              <Text style={styles.driver}>Assigned Driver</Text>
              <Skeleton width={65} colorMode="light" height={25} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "auto",
                right: 55,
              }}
            >
              <MaterialIcons
                size={23}
                style={{ marginRight: 10, color: "#FECF67" }}
                name="message"
              />
              <MaterialIcons
                style={{ marginRight: 10, color: "#FECF67" }}
                size={23}
                name="call"
              />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  methods: {},
  method: {
    left: 20,
    top: 10,

    marginBottom: 30,
    backgroundColor: "white",
    height: 25,

    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  method2: {
    left: 20,
    top: 25,

    marginBottom: 30,
    backgroundColor: "white",
    height: 25,

    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  drivername: {
    left: 20,
    marginTop: 5,
  },
  driver: {
    fontWeight: "bold",
  },
  box: {
    justifyContent: "center",
    width: 45,
    height: 45,

    alignItems: "center",
  },
  box2: {
    justifyContent: "center",
    width: 45,
    height: 45,
    marginVertical: 20,
    alignItems: "center",
  },
  methodname: {
    left: 16,
    color: "black",
    fontWeight: "bold",
  },
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "white",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: "hidden",
  },
  imgIn: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  textIn: {
    paddingLeft: 6,
    marginTop: 40,
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  dates: {},

  saveBtn: {
    marginTop: 20,
    width: 100,
  },
  descr: {
    marginTop: 40,

    borderRadius: 50,
  },

  header: {
    height: 0,
    borderRadius: 15,
    elevation: 4,
    backgroundColor: "white",
  },

  shadow: {
    shadowColor: "#290B54",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  common: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 10,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: "rgba(0,0,0,0.012)",
  },
});
