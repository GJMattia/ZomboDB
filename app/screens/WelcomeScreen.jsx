import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import routes from "../navigation/routes";



export default function WelcomeScreen({navigation}){

    return(
    <ImageBackground
        style={styles.background}
        source={require("../assets/images/other/night.gif")}>

    <View style={styles.logoContainer}>
    <Text style={styles.tagline}>ZomboDB</Text>
        <Image style={styles.zombie} source={require("../assets/images/other/zombie.gif")} />
        
      </View>


      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
        onPress={() => navigation.navigate(routes.LOGIN)}
        style={styles.button}>
            <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate(routes.REGISTER)}
        style={styles.button}
        >
            <Text style={styles.text}>Register</Text>
            </TouchableOpacity>

      </View>



        </ImageBackground>

    )
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    buttonsContainer: {
      padding: 20,
      width: "100%",
    },
    logoContainer: {
      position: "absolute",
      top: 70,
      alignItems: "center",
    },
    tagline: {
      fontSize: 50,
      fontWeight: "600",
      paddingVertical: 20,
      color: 'white'
    },
    button: {
        backgroundColor: 'crimson',
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
      },
      text: {
        color: 'white',
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      zombie: {
        width: 300,
        height: 300
      }
  });