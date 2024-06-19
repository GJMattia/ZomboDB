import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import routes from "../navigation/routes";

export default function GameScreen({ navigation }) {
  const GAMES = ["World at War", "Black Ops 1", "Black Ops 2", "Black Ops 3"];

  const renderGameButtons = () => {
    return GAMES.map((game, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => navigation.navigate(routes.GAMEINFO, { gameName: game })}
      >
        <Text style={styles.buttonText}>{game}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/night.gif")}
    >
      <Text style={styles.tagline}>Choose your game:</Text>
      <View style={styles.buttonContainer}>{renderGameButtons()}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  tagline: {
    fontSize: 40,
    fontWeight: "600",
    paddingVertical: 20,
    color: "white",
  },
});
