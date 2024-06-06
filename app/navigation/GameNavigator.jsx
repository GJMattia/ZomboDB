import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '../screens/GamesScreen';
import GameInfoScreen from '../screens/GameInfoScreen';
import GamePerksScreen from '../screens/GamePerksScreen';

const Stack = createStackNavigator();

export default function GameNavigator({user, setUser}){

    return(
    <Stack.Navigator>
    <Stack.Screen
        name='Games'
        component={GameScreen}
        options={{ headerShown: false }}
    />

    <Stack.Screen name="GameInfo">
        {props => <GameInfoScreen {...props} setUser={setUser}/>}
    </Stack.Screen>

    <Stack.Screen name="GamePerks">
        {props => <GamePerksScreen {...props} setUser={setUser}/>}
    </Stack.Screen>
  


    </Stack.Navigator>
    )
}