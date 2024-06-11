import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import routes from "../navigation/routes";


export default function MapsScreen({navigation, route}){


    const { mapData } = route.params;

    const renderMapData = () => {
        if (!mapData) return null;
        return mapData.map((map, index) => (
          <View key={index} style={styles.buttonContainer}>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate(routes.MAP, { mapData: map })}
              >


              <Text style={styles.buttonText}>{map.name}</Text>
            </TouchableOpacity>
          </View>
        ));
      };


    return(
    <ImageBackground
        style={styles.background}
        source={require("../assets/images/other/night.gif")}>

        <Text style={styles.title}>Maps</Text>

        <View style={styles.buttonContainer}>
        {mapData ? renderMapData() : <Text>Loading...</Text>}
        </View>

        


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