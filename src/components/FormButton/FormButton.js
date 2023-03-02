import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const FormButton = ({value}) => {
  return(
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.textLoginButton}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  loginButton:{
    padding:5,
    margin:20,
    width:'100%',
    alignSelf: 'center',
    backgroundColor:'#3666e1',
  },
  textLoginButton:{
    color: '#ffffff',
    padding: 10,
    alignSelf: 'center',
  }
})

export default FormButton