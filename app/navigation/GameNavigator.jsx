import { createStackNavigator } from "@react-navigation/stack";
import GamesScreen from "../screens/GamesScreen";
import GameScreen from "../screens/GameScreen";
import PerksScreen from "../screens/PerksScreen";
import PerkScreen from "../screens/PerkScreen";
import MapsScreen from "../screens/MapsScreen";
import DropsScreen from "../screens/DropsScreen";
import DropScreen from "../screens/DropScreen";
import MapScreen from "../screens/MapScreen";
import GunsScreen from "../screens/GunsScreen";
import GunScreen from "../screens/GunScreen";

const Stack = createStackNavigator();

const expandScreen = ({ current }) => {
  return {
    cardStyle: {
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
    },
  };
};

export default function GameNavigator({ user, setUser }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Games"
        component={GamesScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
        name="Game"
      >
        {(props) => <GameScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Maps"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <MapsScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Map"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <MapScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Guns"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <GunsScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Gun"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <GunScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Perks"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <PerksScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Perk"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <PerkScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Drops"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <DropsScreen {...props} setUser={setUser} />}
      </Stack.Screen>

      <Stack.Screen
        name="Drop"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "",
          cardStyleInterpolator: expandScreen,
        }}
      >
        {(props) => <DropScreen {...props} setUser={setUser} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
