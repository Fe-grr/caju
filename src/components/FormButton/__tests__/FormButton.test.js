import React from 'react';
import {render} from '@testing-library/react-native'
import FormButton from '../FormButton';

test('component button rendered', () => {
  render(
    <FormButton value={'Texto do Botao'}/>
  )
})