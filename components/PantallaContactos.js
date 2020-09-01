import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function PantallaContactos({navigation})
{

return(
  <View>
  <Text> Contactos</Text>
  <Button 
  title="Ir al 3 pantalla" 
  onPress ={ () => navigation.navigate('3pantalla')}
  />
  </View>);
  }