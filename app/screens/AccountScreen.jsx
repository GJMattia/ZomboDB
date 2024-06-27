import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { logOut } from "../../requests/user-services";

export default function Account({ user, setUser }) {
  function signOut() {
    logOut();
    setUser(null);
  }
  console.log(user);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tagline}>Sign Out?</Text>
      <Image
        style={styles.img}
        source={require("../assets/images/perks/speed.webp")}
      />
      <Text style={styles.tagline}>{user.name}</Text>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 20,
  },
  input: {
    backgroundColor: "white",
    margin: 5,
    padding: 10,
  },
  slop: {
    width: "90%",
  },
  img: {
    width: 150,
    height: 150,
  },
});
