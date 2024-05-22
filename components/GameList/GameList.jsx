import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Games from '../../assets/data/games.json';
import { useNavigation } from '@react-navigation/native';

export default function GameList({setGameIndex, gameIndex}){

    const navigation = useNavigation();

    const handlePress = (index) => {
        setGameIndex(index);
        setTimeout(() => {
          navigation.navigate('GameCategories');
        }, 50); // Small delay to ensure state update before navigation
      };

    return(
        <View style={styles.container}>

            <Text style={styles.title}>ZomboDB</Text>

            {Games.map((game, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.gameBtn}
                    onPress={() => handlePress(index)}
                >
                    <Text style={styles.gameName}>{game.name}</Text>
                </TouchableOpacity>
            ))}

    <Text>{gameIndex}</Text>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      position: 'absolute',
      top: 80,
      fontSize: '52'
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
    }
  });