import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Cuidese = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/cuide-se2.jpg')}
                style={{width:160, height:60}}
            />            
        </View>
    )
}
export default Cuidese;

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: 12,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
    },
  });