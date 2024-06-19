import { View } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import GameNavigator from "./GameNavigator";

const account = "account";
const settings = "settings";
const game = "game";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ user, setUser }) {
  return (
    <Tab.Navigator
      initialRouteName="game"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "account") {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === "settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === "game") {
            iconName = focused ? "desktop" : "desktop-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name={game}
        component={GameNavigator}
        options={{ headerShown: false }}
      />

      <Tab.Screen name={account} options={{ headerShown: false }}>
        {(props) => <AccountScreen {...props} setUser={setUser} />}
      </Tab.Screen>

      <Tab.Screen
        name={settings}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
