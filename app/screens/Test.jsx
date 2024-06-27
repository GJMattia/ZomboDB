import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

export default function MapsScreen() {
  const Maps = {
    "Nact Der Untoten": require("../assets/images/maps/nact.webp"),
    Veruct: require("../assets/images/maps/verukkt.webp"),
    "Shino Numa": require("../assets/images/maps/shino.webp"),
    "Der Reise": require("../assets/images/maps/der.jpg"),
  };

  const mapData = [
    {
      name: "sauce",
    },
    {
      name: "grass",
    },
    {
      name: "yellow",
    },
    {
      name: "lawn",
    },
  ];

  const renderItem = ({ item }) => (
    <ImageBackground source={Maps.Veruct} style={styles.map}>
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
    fontSize: 50,
    color: "white",
  },
  list: {
    backgroundColor: "yellow",
    flexGrow: 0,
    width: "100%",
  },
  map: {
    backgroundColor: "dodgerblue",
    margin: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});
