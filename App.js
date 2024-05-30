import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './app/navigation/AuthNavigator';

import GameList from './components/GameList/GameList';
import GameCategories from './components/GameCategories/GameCategories';

import { LogBox } from 'react-native';



const Stack = createStackNavigator();

LogBox.ignoreLogs(['Require cycle:']);


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


