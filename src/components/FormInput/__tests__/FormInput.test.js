import React from 'react';
import {render} from '@testing-library/react-native'
import FormInput from '../FormInput';

test('component input rendered', () => {
  render(
    <FormInput label={'cpf'} value={""} setValue={""}/>
  )
})