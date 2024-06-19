import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import routes from "../navigation/routes";

export default function PerkScreen({ navigation, route }) {
  const Perks = {
    "Quick Revive": require("../assets/images/perks/qr.webp"),
    Jug: require("../assets/images/perks/jug.webp"),
    "Double Tap": require("../assets/images/perks/dt.webp"),
    "Speed Cola": require("../assets/images/perks/speed.webp"),
    "PHD Flopper": require("../assets/images/perks/phd.webp"),
    "Stamina Up": require("../assets/images/perks/stam.webp"),
    Deadshot: require("../assets/images/perks/ds.webp"),
    "Mule Kick": require("../assets/images/perks/mk.webp"),
    "Double Tap 2": require("../assets/images/perks/dt2.webp"),
    Tombstone: require("../assets/images/perks/ts.webp"),
    "Who's Who": require("../assets/images/perks/ww.webp"),
    "Electric Cherry": require("../assets/images/perks/ec.webp"),
    "Vulture Aid": require("../assets/images/perks/va.webp"),
    "Der Wunderfiz": require("../assets/images/perks/dw.webp"),
  };

  const { perkData } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.title}>{perkData.name}</Text>

      <Image style={styles.perk} source={Perks[perkData.name]} />

      <Text style={styles.price}>Price: {perkData.price}</Text>

      <Text style={styles.effect}>{perkData.effect}</Text>
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
  perk: {
    margin: 20,
    width: 150,
    height: 150,
  },
  price: {
    margin: 10,
    fontSize: 20,
    backgroundColor: "rgba(124, 252, 0, 0.7)",
    color: "white",
    padding: 10,
    width: "50%",
    textAlign: "center",
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
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
});
