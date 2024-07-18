import { ImageBackground, StyleSheet, Image, Text } from "react-native";
import routes from "../navigation/routes";

export default function GunScreen({ navigation, route }) {
  const Guns = {
    m1911: require("../assets/images/waw-guns/m1911.webp"),
    ".357 Magnum": require("../assets/images/waw-guns/magnum.webp"),
    Thompson: require("../assets/images/waw-guns/thompson.webp"),
    MP40: require("../assets/images/waw-guns/mp40.webp"),
    "M1897 Trench Gun": require("../assets/images/waw-guns/trench.webp"),
    "Double-Barreled Shotgun": require("../assets/images/waw-guns/double.webp"),
    Kar98k: require("../assets/images/waw-guns/kar.webp"),
    Springfield: require("../assets/images/waw-guns/springfield.webp"),
    "M1 Garand": require("../assets/images/waw-guns/garand.webp"),
    "Gewehr 43": require("../assets/images/waw-guns/gew.webp"),
    "STG-44": require("../assets/images/waw-guns/stg44.webp"),
    "PTRS-41": require("../assets/images/waw-guns/ptrs.webp"),
    BAR: require("../assets/images/waw-guns/bar.webp"),
    FG42: require("../assets/images/waw-guns/fg42.webp"),
    "M1919 Browning": require("../assets/images/waw-guns/brown.webp"),
    "M2 Flamethrower": require("../assets/images/waw-guns/flame.webp"),
    Panzerschrek: require("../assets/images/waw-guns/panzer.webp"),
    MG42: require("../assets/images/waw-guns/mg42.webp"),
    "Ray Gun": require("../assets/images/waw-guns/raygun.webp"),
    "Wunderwaffe DG-2": require("../assets/images/waw-guns/wunderwaffe.webp"),
  };

  const { gunData } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.title}>{gunData.name}</Text>

      <Image style={styles.gun} source={Guns[gunData.name]} />

      <Text style={styles.effect}>Price: {gunData.price}</Text>
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
  gun: {
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
