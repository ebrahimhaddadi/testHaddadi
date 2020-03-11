// In App.js in a new project

import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/component/HomeScreen';
import DetailsScreen from './src/component/DetailsScreen';


const Stack = createStackNavigator();
 

const App=()=> {
  return (
    <View style={{flex:1,}}>
     
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
         component={HomeScreen}
         options={{headerShown:false}}
         />
        <Stack.Screen name="Details" component={DetailsScreen}
         options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default App;