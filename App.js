import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { LogBox } from "react-native";
import TabNavigator from "./app/navigation/TabNavigator";
import Test from "./app/screens/Test";

LogBox.ignoreLogs(["Require cycle:"]);

export default function App() {
  let [user, setUser] = useState(false);

  return (
    // <Test />
    <NavigationContainer>
      {user ? (
        <TabNavigator user={user} setUser={setUser} />
      ) : (
        <AuthNavigator setUser={setUser} />
      )}
    </NavigationContainer>
  );
}
