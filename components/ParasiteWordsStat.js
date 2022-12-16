import React from "react";
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native";

const ParasiteWordsStat = ({output, outputCount, margin, image}) => {
    return (
        <View style={styles.container} marginVertical={margin}>
            <ImageBackground 
                source={require('../assets/images/ParasiteWordsStat.png')}
                style={styles.img_bg}>
                <Text style={styles.text}>{output}</Text>
                <Text 
                    style={styles.textCount}>{outputCount}</Text>
                <Image
                    source={image}
                    style={styles.image}/>
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
        marginVertical: 2,
        top: 10
    },

    img_bg: {
        width: 138,
        height: 29
    },

    text: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 14,
        color: 'rgba(207, 77, 79, 1)',
        top: 5,
        paddingStart: 15
    },

    textCount: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 14,
        color: 'rgba(207, 77, 79, 1)',
        top: 5,
        position: 'absolute',
        paddingLeft: 115
    },
})

export default ParasiteWordsStat