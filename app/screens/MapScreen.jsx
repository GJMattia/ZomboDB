import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import routes from "../navigation/routes";

export default function MapScreen({ navigation, route }) {
  const { mapData } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/stars.gif")}
    >
      <Text style={styles.title}>{mapData.name}</Text>

      <FlatList
        style={styles.list}
        data={mapData}
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
});
