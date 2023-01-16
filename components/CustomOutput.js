import React from "react";
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native";

const CustomOutput = ({output, outputCount, margin}) => {
    return (
        <View style={styles.container} marginVertical={margin}>
            <ImageBackground 
                source={require('../assets/images/WrongWordsBg.png')}
                style={styles.img_bg}>
                <Text style={styles.text}>{output}</Text>
                <Text style={styles.textCount}>{outputCount}</Text>
            </ImageBackground>        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transeparent',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: '2%',
        top: '15%'
    },

    img_bg: {
        width: 292,
        height: 42
    },

    text: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 16,
        color: 'rgba(207, 77, 79, 1)',
        top: '20%',
        paddingStart: '6%'
    },

    textCount: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 16,
        color: 'rgba(207, 77, 79, 1)',
        top: '20%',
        position: 'absolute',
        paddingLeft: '90%'
    }
})


export default CustomOutput