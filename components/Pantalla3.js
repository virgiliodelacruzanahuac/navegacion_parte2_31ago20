import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Pantalla3({navigation})
{
  return(
  <View>
  <Text> 3 pantalla </Text>
  <Button 
  title="Ir al inicio" 
  onPress ={ () => navigation.popToTop()}
  />
  </View>);
}