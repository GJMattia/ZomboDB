import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import routes from "../navigation/routes";

export default function DropsScreen({ navigation, route }) {
  const Drops = {
    "Max Ammo": require("../assets/images/drops/max.png"),
    Instakill: require("../assets/images/drops/insta.png"),
    "Double Points": require("../assets/images/drops/points.png"),
    Nuke: require("../assets/images/drops/max.png"),
    Carpenter: require("../assets/images/drops/nuke.png"),
  };

  const { dropData } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(routes.DROP, { dropData: item })}
    >
      <Text style={styles.buttonText}>{item.name}</Text>
      <Image style={styles.drop} source={Drops[item.name]} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.title}>Drops</Text>

      <FlatList
        style={styles.list}
        data={dropData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
    fontSize: 40,
    fontWeight: "600",
    paddingVertical: 20,
    color: "white",
    marginTop: 80,
  },
  list: {
    width: "90%",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "90%",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  drop: {
    width: 50,
    height: 50,
  },
});
