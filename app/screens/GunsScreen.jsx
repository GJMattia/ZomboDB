import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import routes from "../navigation/routes";

export default function GunsScreen({ navigation, route }) {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(routes.GUN, { gunData: item })}
    >
      <Text style={styles.buttonText}>{item.name}</Text>
      <Image style={styles.gun} source={Guns[item.name]} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.title}>Guns</Text>

      <FlatList
        style={styles.list}
        data={gunData}
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
  gun: {
    width: 50,
    height: 50,
  },
});
