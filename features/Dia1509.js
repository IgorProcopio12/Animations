import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";

const Dia1509 = () => {
  const [alturaA] = useState(new Animated.Value(0));
  const [alturaB] = useState(new Animated.Value(0));
  const [alturaC] = useState(new Animated.Value(0));
  const [alturaD] = useState(new Animated.Value(0));
  const [alturaE] = useState(new Animated.Value(0));

  const [text] = useState(new Animated.Value(0));

  const gerarGrafico = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(alturaA, { toValue: 57.92, duration: 1000 }),
        Animated.timing(alturaB, { toValue: 29.29, duration: 1000 }),
        Animated.timing(alturaC, { toValue: 80.87, duration: 1000 }),
        Animated.timing(alturaD, { toValue: 34.69, duration: 1000 }),
        Animated.timing(alturaE, { toValue: 64.97, duration: 1000 }),
      ]),
    ]).start();

    Animated.sequence([
      Animated.parallel([
        Animated.timing(text, { toValue: 1, duration: 1500, delay: 500}),
      ]),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        Boletim Epidemiológico {"\n"} 15 de setembro de 2021
      </Text>
      <View style={styles.viewGraficos}>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaA, backgroundColor: "#DF8021" },
          ]}
          
        ><Animated.Text style={{opacity: text}}>57.92%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaB, backgroundColor: "#44AA8F" },
          ]}
        ><Animated.Text style={{opacity: text}}>29.29%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaC, backgroundColor: "#AA5344" },
          ]}
        ><Animated.Text style={{opacity: text}}>80.87%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaD, backgroundColor: "#7c5d9a" },
          ]}
        ><Animated.Text style={{opacity: text}}>34.69%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaE, backgroundColor: "#345fd0" },
          ]}
        >
          <Animated.Text style={{ opacity: text }}>64.97%</Animated.Text>
        </Animated.View>
      </View>
      <View style={styles.viewBotoes}>
        <TouchableOpacity style={styles.botoes} onPress={gerarGrafico}>
          <Text style={{ fontWeight: "bold", fontSize: 12, margin: 2 }}>
            Gerar gráfico
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Dia1509;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#F6F2EE",
    alignItems: "center",
    marginBottom: -40,
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
    marginBottom: -20,
  },
  viewGraficos: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  viewAnimadas: {
    width: 50,
    margin: 2,
    alignItems: "center",
  },
  viewTextos: {
    fontWeight: "bold",
    fontSize: 10,
  },
  viewBotoes: {
    margin: 4,
  },
  botoes: {
    backgroundColor: "#DDDDDD",
    padding: 4,
    alignItems: "center",
  },
});
