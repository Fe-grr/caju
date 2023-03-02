import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import HorizontalList from '../../components/HorizontalList/HorizontalList'

export default function Home(){

  return(
    <SafeAreaView style={styles.container}>
      {/* Chamando componente de Lista, passando o array de cores */}
      <HorizontalList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  }
})