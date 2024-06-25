import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import routes from "../navigation/routes";

export default function MapsScreen({ navigation, route }) {
  const Maps = {
    "Nact Der Untoten": require("../assets/images/maps/nact.webp"),
    Veruct: require("../assets/images/maps/verukkt.webp"),
    "Shino Numa": require("../assets/images/maps/shino.webp"),
    "Der Reise": require("../assets/images/maps/der.jpg"),
  };

  const { mapData } = route.params;

  const renderItem = ({ item }) => (
    <ImageBackground source={Maps[item.name]} style={styles.map}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.name}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.title}>Maps</Text>

      <FlatList
        style={styles.list}
        data={mapData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "600",
    color: "white",
    backgroundColor: "blue",
  },
  list: {
    width: "100%",
    backgroundColor: "yellow",
  },
  map: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
