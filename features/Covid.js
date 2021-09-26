import React, { useState } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";

const Covid = () => {
  const [rotate] = useState(new Animated.Value(0));

  Animated.timing(rotate, { toValue: 90, duration: 5000 }).start();
  Animated.timing(rotate, { toValue: 180, duration: 5000 }).start();


  let rotateInter = rotate.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.text, { transform: [{ rotate: rotateInter }] }]}
      >
        COVID-19 JUIZ DE FORA
      </Animated.Text>
    </View>
  );
};
export default Covid;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#F6F2EE",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 14,
  },
});
