import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../screens/GamesScreen";
import InfoScreen from "../screens/InfoScreen";
import PerksScreen from "../screens/PerksScreen";
import PerkScreen from "../screens/PerkScreen";
import MapsScreen from "../screens/MapsScreen";
import DropsScreen from "../screens/DropsScreen";
import DropScreen from "../screens/DropScreen";

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
        component={GameScreen}
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
        name="GameInfo"
      >
        {(props) => <InfoScreen {...props} setUser={setUser} />}
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
