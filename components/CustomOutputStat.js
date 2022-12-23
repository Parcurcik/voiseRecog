import React from "react";
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native";

const CustomOutputStat = ({output, outputCount, outputCount2, margin, image}) => {
    return (
        <View style={styles.container} marginVertical={margin}>
            <ImageBackground 
                source={require('../assets/images/CustomOutputStat.png')}
                style={styles.img_bg}>
                <Text style={styles.text}>{output}</Text>
                <Text 
                    style={styles.textCount}>{outputCount}</Text>
                <Text 
                    style={styles.textCount2}>{outputCount2}</Text>
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
        width: 292,
        height: 32
    },

    text: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 12,
        color: 'rgba(207, 77, 79, 1)',
        top: 7,
        paddingStart: 15
    },

    textCount: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 12,
        color: 'rgba(207, 77, 79, 1)',
        top: 7,
        position: 'absolute',
        paddingLeft: 270
    },

    textCount2: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 12,
        color: 'rgba(207, 77, 79, 1)',
        top: 7,
        position: 'absolute',
        paddingLeft: 210
    },

    image: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 264,
        top: 6
    }
})

export default CustomOutputStat