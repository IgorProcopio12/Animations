import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";

const Dia1609 = () => {
  const [alturaA] = useState(new Animated.Value(0));
  const [alturaB] = useState(new Animated.Value(0));
  const [alturaC] = useState(new Animated.Value(0));
  const [alturaD] = useState(new Animated.Value(0));
  const [alturaE] = useState(new Animated.Value(0));

  const [text] = useState(new Animated.Value(0))

  const gerarGrafico = () => {
    Animated.sequence([
      Animated.timing(alturaA, { toValue: 56.72, duration: 500 }),
      Animated.timing(alturaB, { toValue: 28.57, duration: 500 }),
      Animated.timing(alturaC, { toValue: 76.52, duration: 500 }),
      Animated.timing(alturaD, { toValue: 37.76, duration: 500 }),
      Animated.timing(alturaE, { toValue: 62.63, duration: 500 }),
    ]).start();

    Animated.sequence([
        Animated.parallel([
          Animated.timing(text, { toValue: 1, delay: 2700 }),
        ]),
      ]).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {""}
        Boletim Epidemiológico {"\n"} 16 de setembro de 2021
      </Text>
      <View style={styles.viewGraficos}>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaA, backgroundColor: "#DF8021" },
          ]}
        ><Animated.Text style={{opacity: text}}>56.72%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaB, backgroundColor: "#44AA8F" },
          ]}
        ><Animated.Text style={{opacity: text}}>28.57%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaC, backgroundColor: "#AA5344" },
          ]}
        ><Animated.Text style={{opacity: text}}>76.52%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaD, backgroundColor: "#7c5d9a" },
          ]}
        ><Animated.Text style={{opacity: text}}>37.76%</Animated.Text></Animated.View>
        <Animated.View
          style={[
            styles.viewAnimadas,
            { height: alturaE, backgroundColor: "#345fd0" },
          ]}
        ><Animated.Text style={{opacity: text}}>62.63%</Animated.Text></Animated.View>
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
export default Dia1609;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#F6F2EE",
    alignItems: "center",
    marginTop: -40,
    marginBottom: -30,
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
