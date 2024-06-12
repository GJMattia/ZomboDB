import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import routes from "../navigation/routes";


export default function PerksScreen({navigation, route}){

  const Perks = {
    "Quick Revive": require('../assets/images/perks/qr.webp'),
    "Jug": require('../assets/images/perks/jug.webp'),
    "Double Tap": require('../assets/images/perks/dt.webp'),
    "Speed Cola": require('../assets/images/perks/speed.webp'),
    "PHD Flopper": require('../assets/images/perks/phd.webp'),
    "Stamina Up": require('../assets/images/perks/stam.webp'),
    "Deadshot": require('../assets/images/perks/ds.webp'),
    "Mule Kick": require('../assets/images/perks/mk.webp'),
    "Double Tap 2": require('../assets/images/perks/dt2.webp'),
    "Tombstone": require('../assets/images/perks/ts.webp'),
    "Who's Who": require('../assets/images/perks/ww.webp'),
    "Electric Cherry": require('../assets/images/perks/ec.webp'),
    "Vulture Aid": require('../assets/images/perks/va.webp'),
    "Der Wunderfiz": require('../assets/images/perks/dw.webp')
  }

    const { perkData } = route.params;

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.PERK, { perkData: item })}
      >
        <Text style={styles.buttonText}>{item.name}</Text>
        <Image style={styles.perk} source={Perks[item.name]} />
      </TouchableOpacity>
    );


    return(
    <ImageBackground
        style={styles.background}
        source={require("../assets/images/other/night.gif")}>

        <Text style={styles.title}>Perks</Text>

        <FlatList
      style={styles.list}
      data={perkData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />

        


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
      list: {
        width: '90%'
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
      perk:{
        width: 50,
        height: 50
      }
  });