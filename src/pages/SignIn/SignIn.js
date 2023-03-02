import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import FormInput from '../../components/FormInput/FormInput';
import FormButton from '../../components/FormButton/FormButton';

export default function SignIn(){
  /*state para alterar o estado do cpf, começando com uma string vazia*/  
  const [cpf,setCpf] = useState('');

  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.formulario}>
        <FormInput
          label={'CPF'}
          value={cpf}
          setValue={setCpf}
        />

        <FormButton
          value={'CONTINUAR'}
        />

      </SafeAreaView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex:1
  },
  formulario:{
    marginTop: '40%',
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#fff'
  },
})