import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import Sauce from './app/components/Sauce';
import { LogBox } from 'react-native';
import GameScreen from './app/screens/GamesScreen';
import GameNavigator from './app/navigation/GameNavigator';

LogBox.ignoreLogs(['Require cycle:']);


export default function App() {

  let [user, setUser] = useState(null);

  return (
    <NavigationContainer>

{user ? <GameNavigator user={user} setUser={setUser} /> : <AuthNavigator setUser={setUser} />}

{/* {user ? <Sauce user={user} setUser={setUser} /> : <AuthNavigator setUser={setUser} />} */}

    </NavigationContainer>
  );
}


