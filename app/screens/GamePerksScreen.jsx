import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import routes from "../navigation/routes";

import test from '../assets/images/perks/WAWqr.gif';


export default function GameScreen({navigation, route}){

    const { perkData } = route.params;

    const renderPerkData = () => {
        if (!perkData) return null;
        return perkData.map((perk, index) => (
          <View key={index} style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              >
              <Text style={styles.buttonText}>{perk.name}</Text>
              <Image source={test}/>
            </TouchableOpacity>
          </View>
        ));
      };

console.log(perkData[0].img)

    return(
    <ImageBackground
        style={styles.background}
        source={require("../assets/images/other/night.gif")}>

        <Text style={styles.title}>Perks</Text>

        <View style={styles.buttonContainer}>
        {perkData ? renderPerkData() : <Text>Loading...</Text>}
        </View>

        
        {/* <Image source={test}/> */}

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