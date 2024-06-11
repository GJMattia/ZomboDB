import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '../screens/GamesScreen';
import GameInfoScreen from '../screens/GameInfoScreen';
import GamePerksScreen from '../screens/GamePerksScreen';
import PerkScreen from '../screens/PerkScreen';
import MapsScreen from '../screens/MapsScreen';

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

    <Stack.Screen name="GameMaps">
        {props => <MapsScreen {...props} setUser={setUser}/>}
    </Stack.Screen>

    <Stack.Screen name="GamePerks">
        {props => <GamePerksScreen {...props} setUser={setUser}/>}
    </Stack.Screen>

    <Stack.Screen name="GamePerk">
        {props => <PerkScreen {...props} setUser={setUser}/>}
    </Stack.Screen>
  


    </Stack.Navigator>
    )
}