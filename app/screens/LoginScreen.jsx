import { StyleSheet, Image, SafeAreaView, TouchableOpacity, Text, TextInput, View, Button } from "react-native";
import { Formik } from "formik";


export default function LoginScreen(){

    return(

        <SafeAreaView style={styles.container}>
        <Text style={styles.tagline}>Enter info to sign in!</Text>
        <Image source={require('../assets/images/perks/WAWspeed.gif')}/>

        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.slop}>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.input}
            />
          </View>
        )}
      </Formik>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>






    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
        
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "80%",
        marginVertical: 10,
      },
      text: {
        color: 'white',
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
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
      },
      slop: {
        width: '90%'
      }
  });