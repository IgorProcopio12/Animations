import React, { useState } from "react";
import { StyleSheet, View, Image, Animated } from "react-native";

const Cuidese = () => {
  const [largura] = useState(new Animated.Value(80));
  const [altura] = useState(new Animated.Value(30));

  Animated.loop(
    Animated.parallel([
      Animated.timing(largura, { toValue: 160, duration: 2000 }),
      Animated.timing(altura, { toValue: 60, duration: 2000 }),
    ])
  ).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../images/cuide-se2.jpg")}
        style={{ width: largura, height: altura }}
      />
    </View>
  );
};
export default Cuidese;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#F6F2EE",
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
  },
});
