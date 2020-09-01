import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Parametros({route,navigation})
{
  const {id} = route.params;
  const {nombre} = route.params;
  
  return(
  <View>
  <Text> Parametros </Text>
  <Text> ID {JSON.stringify(id)}</Text>
  <Text> Nombre {JSON.stringify(nombre)}</Text>
  
  <Button 
  title="Ir al inicio" 
  onPress ={ () => navigation.popToTop()}
  />
  </View>);
}