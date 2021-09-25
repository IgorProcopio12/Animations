import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Dia1609 = () => {

    const valores = [56.76, 28.57, 76.52, 37.76, 62.63];

    const gerarGrafico = () => {
    }

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 16 de setembro de 2021</Text>
            <View 
                style={styles.viewGraficos}>
                <View
                    style={[styles.viewAnimadas, {height:valores[0], backgroundColor:'#DF8021'}]}
                >
                </View>
                <View
                    style={[styles.viewAnimadas, {height:valores[1], backgroundColor:'#44AA8F'}]}
                >
                </View>
                <View
                    style={[styles.viewAnimadas, {height:valores[2], backgroundColor:'#AA5344'}]}
                >
                </View>  
                <View
                    style={[styles.viewAnimadas, {height:valores[3], backgroundColor:'#7c5d9a'}]}
                >
                </View>   
                <View
                    style={[styles.viewAnimadas, {height:valores[4], backgroundColor:'#345fd0'}]}
                >
                </View>      
            </View>
            <View style={styles.viewBotoes}>
                <TouchableOpacity
                    style={styles.botoes}
                    onPress={gerarGrafico}
                >
                <Text 
                    style={{fontWeight:'bold', fontSize:12, margin: 2}}>Gerar gráfico</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dia1609;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: -40,
        marginBottom: -30,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
      marginBottom: -20,
    },
    viewGraficos: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    viewAnimadas: {
      width: 40,
      margin: 2, 
      alignItems: 'center',
    },
    viewTextos: {
      fontWeight: 'bold', 
      fontSize: 10,
    },
    viewBotoes: {
        margin: 4,
    }, 
    botoes: {
      backgroundColor: '#DDDDDD',
      padding: 4,
      alignItems: 'center',
    }
  });
