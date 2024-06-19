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
import { signUp } from "../../requests/user-services";
import { useState } from "react";

export default function RegisterScreen({ setUser }) {
  async function handleSubmit(userData) {
    try {
      const user = await signUp(userData);
      setUser(user);
    } catch (error) {
      console.log("Sign Up Failed - Try Again");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tagline}>Register NOW</Text>
      <Image
        style={styles.img}
        source={require("../assets/images/perks/dt.webp")}
      />

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.slop}>
            <TextInput
              placeholder="Pick a username"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={styles.input}
            />
            <TextInput
              placeholder="enter email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.input}
            />
            <TextInput
              placeholder="enter password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
              style={styles.input}
            />
            {/* <TextInput
              placeholder="confirm password"
              onChangeText={handleChange('confirm')}
              onBlur={handleBlur('confirm')}
              value={values.confirm}
              secureTextEntry
              style={styles.input}
            /> */}

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.text}>Create Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "orange",
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
    width: "90%",
  },
  slop: {
    alignItems: "center",
    width: "90%",
  },
  img: {
    width: 150,
    height: 150,
  },
});
