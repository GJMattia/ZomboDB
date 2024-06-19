import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import { Formik } from "formik";
import { login } from "../../requests/user-services";

export default function LoginScreen({ setUser }) {
  async function handleSubmit(userData) {
    try {
      const user = await login(userData);
      setUser(user);
    } catch (error) {
      console.log("Log in Failed - Try Again");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tagline}>Enter info to sign in!</Text>
      <Image
        style={styles.img}
        source={require("../assets/images/perks/speed.webp")}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.slop}>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.text}>sign in</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
