import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Games from '../../assets/data/games.json';


export default function GameCategories({gameIndex}){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>


<Text style={styles.title}>{Games[gameIndex].name}</Text>
        {Games[gameIndex].stuff.map((stuff, index) => (
                <TouchableOpacity
                style={styles.gameBtn}
                    key={index}
                   

                >
                    <Text style={styles.gameName}>{stuff}</Text>
                </TouchableOpacity>
            ))}



        <TouchableOpacity onPress={() => {navigation.navigate('GameList');}}>
                    <Text>RETURN HOME </Text>
                </TouchableOpacity>
            </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gameBtn: {
        backgroundColor: 'crimson',
        padding: 15,
        margin: 20,
        borderRadius: 3,
        width: '80%'
    },
    gameName:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        position: 'absolute',
        top: 80,
        fontSize: '52'
      }
  });