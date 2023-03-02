import React from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';

/* Pegando as dimensões do dispositivo */
const {width} = Dimensions.get('window');

export default function CreditCard(){
  return(
    <View style={styles.container}>
      <Image
        style={styles.card}
        source={require('../../../assets/card.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  card:{
    height: width / 1.5,
    width: width * 1,
  }
})