import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import Home from './pages/Home/Home';
import CreditCard from './pages/CreditCard/CreditCard';
import SignIn from './pages/SignIn/SignIn';

/* Criando o tipo de navegação */
const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#8aa2fe',
          tabBarInactiveTintColor: '#3e3e3e',
          tabBarStyle:{
            borderTopColor: 'transparent',
          }
        })}
      >
      {/* Telas de navegação */}
      <Tab.Screen 
        name='Início' 
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name='home' size={size} color={color}/>
          )
        }} 
      />
      <Tab.Screen 
        name='Cartões' 
        component={CreditCard}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name='credit-card' size={size} color={color}/>
          )
        }}  
      />
      <Tab.Screen 
        name='Entrar' 
        component={SignIn}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name='user' size={size} color={color}/>
          )
        }} 
      />
    </Tab.Navigator>
  )
}
