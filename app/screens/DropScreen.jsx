import { ImageBackground, StyleSheet, Image, Text } from "react-native";
import routes from "../navigation/routes";

export default function DropScreen({ navigation, route }) {
  const Drops = {
    "Max Ammo": require("../assets/images/drops/max.png"),
    Instakill: require("../assets/images/drops/insta.png"),
    "Double Points": require("../assets/images/drops/points.png"),
    Nuke: require("../assets/images/drops/max.png"),
    Carpenter: require("../assets/images/drops/nuke.png"),
  };

  const { dropData } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.title}>{dropData.name}</Text>

      <Image style={styles.drop} source={Drops[dropData.name]} />

      <Text style={styles.effect}>{dropData.effect}</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "90%",
    textAlign: "center",
    fontFamily: "gothic",
    marginTop: 10,
  },
  drop: {
    margin: 20,
    width: 150,
    height: 150,
  },
  effect: {
    fontSize: 18,
    fontWeight: "600",
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    color: "white",
    textAlign: "center",
    margin: 15,
  },
});
