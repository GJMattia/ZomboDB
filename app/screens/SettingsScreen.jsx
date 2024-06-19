import { StyleSheet, Image, SafeAreaView, Text } from "react-native";

export default function Settings({ user, setUser }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tagline}>Settings</Text>
      <Image
        style={styles.img}
        source={require("../assets/images/perks/va.webp")}
      />
      <Text style={styles.tagline}>user.name</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "80%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 20,
  },
  input: {
    backgroundColor: "white",
    margin: 5,
    padding: 10,
  },
  slop: {
    width: "90%",
  },
  img: {
    width: 150,
    height: 150,
  },
});
