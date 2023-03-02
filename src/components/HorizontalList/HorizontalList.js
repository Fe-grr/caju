import React from 'react';
import {View,Text, FlatList, Dimensions,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { CardList } from '../../data/CardList';
const {width} = Dimensions.get('window');

const HorizontalList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={CardList}
        keyExtractor={(item) => (item.name)}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={'start'}
        scrollEventThrottle={16}
        decelerationRate='fast'
        style={{marginTop: 20}}
        /* Retornando uma View */
        renderItem={({item}) => (
          <View 
            style={{
              backgroundColor: item.color,
              height: width / 2.3,
              width: width * 0.37,
              marginHorizontal: 10,
              borderRadius: 12,
              padding:10
            }}
          >
            <MaterialCommunityIcons name={item.icon} size={25} color={'#fff'}/>
            <Text style={{color:'#fff', marginTop: 35}}>R$</Text>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize: 25}}>{item.valor}</Text>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize:13, marginTop: 15}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  }
})

export default HorizontalList;