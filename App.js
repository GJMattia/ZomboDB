import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import Sauce from './app/components/Sauce';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Require cycle:']);


export default function App() {

  let [user, setUser] = useState(null);

  return (
    <NavigationContainer>

      
{user ? <Sauce user={user} setUser={setUser} /> : <AuthNavigator setUser={setUser} />}

    </NavigationContainer>
  );
}


