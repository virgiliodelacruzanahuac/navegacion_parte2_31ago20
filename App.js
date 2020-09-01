import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AssetExample from './components/AssetExample';
import PantallaContactos from './components/PantallaContactos';
import Pantalla3 from './components/Pantalla3';
import Parametros from './components/Parametros';

function PantallaInicial({navigation})
{
return(
  <View>
  <Text> Pantalla Inicial </Text>  
  <Button 
  title="Pasar parametros" 
  onPress ={ () => navigation.navigate('parametros',{name:'titulipersonalizado'})}
  
  /*
  onPress ={ () => navigation.navigate(
    'parametros',
    {
      id:1,
      nombre :'Juan'
    }
    )}
*/
  />
  <Button 
  title="Ir a ejemplo" 
  onPress ={ () => navigation.navigate('ejemplo')}
  />
  </View>
);

}

function PantallaDetalles()
{
return(
  <View>
  <Text> Pantalla Detalles </Text>
  </View>
);

}
const Stack = createStackNavigator();

function App()
{
  return(
      <NavigationContainer>
           <Stack.Navigator
           screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
           >
            <Stack.Screen name="inicio" 
            component ={PantallaInicial}
            /* 
             options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                    headerTintColor: '#0f0',
                  headerTitleStyle: {
                        fontWeight: 'bold',
                      },
        }}
        */
        /> 
            <Stack.Screen name="detalles" component ={PantallaDetalles}
            options={{title:'mis detalles'}} /> 
            <Stack.Screen name="ejemplo" component = {PantallaContactos} />
            <Stack.Screen name="3pantalla" component = {Pantalla3} />
            <Stack.Screen name="parametros" 
            component = {Parametros} 
            /*
            options={{title:'probando los parametros'}}
            */
            options={({ route }) => ({ title: route.params.name })}
            initialParams={{id:0,nombre:'xxx'}} />
            </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;