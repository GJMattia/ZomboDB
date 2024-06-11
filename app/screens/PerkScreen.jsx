import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import routes from "../navigation/routes";


export default function GameScreen({navigation, route}){

    const wawPerks = {
      "Quick Revive": require('../assets/images/perks/WAWqr.gif'),
      "Jug": require('../assets/images/perks/WAWjug.gif'),
      "Double Tap": require('../assets/images/perks/WAWdt.gif'),
      "Speed Cola": require('../assets/images/perks/WAWspeed.gif')
    }

    const { perkData } = route.params;

    return(
    <ImageBackground
        style={styles.background}
        source={require("../assets/images/other/night.gif")}>

        <Text style={styles.title}>{perkData.name}</Text>
        <Image source={wawPerks[perkData.name]}/>
        <Text style={styles.effect}>Effect: {perkData.effect}</Text>
        <Text style={styles.title}>Price: {perkData.price}</Text>


        </ImageBackground>

    )
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
    },
      title: {
        fontSize: 40,
        fontWeight: "600",
        paddingVertical: 20,
        color: 'white'
      },
      effect: {
        fontSize: 30,
        fontWeight: "600",
        paddingVertical: 20,
        color: 'white'
      },
      buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '90%',
        padding: 20,
        margin: 10,
        borderRadius: 5,
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
      },
  });