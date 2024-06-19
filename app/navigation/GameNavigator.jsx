import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../screens/GamesScreen";
import InfoScreen from "../screens/InfoScreen";
import PerksScreen from "../screens/PerksScreen";
import PerkScreen from "../screens/PerkScreen";
import MapsScreen from "../screens/MapsScreen";

const Stack = createStackNavigator();

export default function GameNavigator({ user, setUser }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Games"
        component={GameScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        options={{ headerTransparent: true, headerTintColor: "#fff" }}
        name="GameInfo"
      >
        {(props) => <InfoScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="GameMaps"
        options={{ headerTransparent: true, headerTintColor: "#fff" }}
      >
        {(props) => <MapsScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="GamePerks"
        options={{ headerTransparent: true, headerTintColor: "#fff" }}
      >
        {(props) => <PerksScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="GamePerk"
        options={{ headerTransparent: true, headerTintColor: "#fff" }}
      >
        {(props) => <PerkScreen {...props} setUser={setUser} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
