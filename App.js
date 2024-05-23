import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameList from './components/GameList/GameList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameCategories from './components/GameCategories/GameCategories';
import AuthNavigator from './app/navigation/AuthNavigator';

const Stack = createStackNavigator();


export default function App() {

  let [gameIndex, setGameIndex] = useState(0);

  const StackNavigator = () => (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="GameList">
        {props => <GameList {...props} setGameIndex={setGameIndex} gameIndex={gameIndex} />}
      </Stack.Screen>

      <Stack.Screen name="GameCategories">
  {props => <GameCategories {...props} gameIndex={gameIndex} />}
</Stack.Screen>


    </Stack.Navigator>
  );

  return (
    <NavigationContainer>

      {/* <StackNavigator/> */}
    <AuthNavigator/> 
    </NavigationContainer>
  );
}


