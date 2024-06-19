import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { LogBox } from "react-native";
import TabNavigator from "./app/navigation/TabNavigator";

LogBox.ignoreLogs(["Require cycle:"]);

export default function App() {
  let [user, setUser] = useState(true);

  return (
    <NavigationContainer>
      {/* {user ? <GameNavigator user={user} setUser={setUser} /> : <AuthNavigator setUser={setUser} />} */}

      {user ? (
        <TabNavigator user={user} setUser={setUser} />
      ) : (
        <AuthNavigator setUser={setUser} />
      )}
    </NavigationContainer>
  );
}
