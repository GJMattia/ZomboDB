import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import routes from "../navigation/routes";

export default function GameScreen({ navigation, route }) {
  const { gameName } = route.params;
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const loadGameData = async (gameName) => {
      switch (gameName) {
        case "World at War":
          return require("../assets/data/waw.json");
        case "Black Ops 1":
          return require("../assets/data/bo1.json");
        case "Black Ops 2":
          return require("../assets/data/bo2.json");
        case "Black Ops 3":
          return require("../assets/data/bo3.json");
        default:
          throw new Error("Unknown game");
      }
    };

    loadGameData(gameName)
      .then((data) => {
        setGameData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [gameName]);

  const renderGameData = () => {
    if (!gameData) return null;

    return Object.keys(gameData)
      .filter((key) => key !== "name") // Exclude 'name' key
      .map((key, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (key === "maps") {
                navigation.navigate(routes.MAPS, { mapData: gameData[key] });
              } else if (key === "perks") {
                navigation.navigate(routes.PERKS, { perkData: gameData[key] });
              } else if (key === "drops") {
                navigation.navigate(routes.DROPS, { dropData: gameData[key] });
                // Add more conditions if there are more keys to handle
              }
            }}
          >
            <Text style={styles.buttonText}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Text>
          </TouchableOpacity>
        </View>
      ));
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/other/stars.gif")}
      resizeMode="cover"
    >
      <Text style={styles.title}>{gameName}</Text>

      <View style={styles.buttonContainer}>
        {gameData ? renderGameData() : <Text>Loading...</Text>}
      </View>
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
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(220, 20, 60, .5)",
    width: "90%",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
