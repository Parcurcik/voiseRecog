import React from "react";
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, Pressable } from "react-native";

const CustomButton = ({ onPress, text, margin }) => {
    return (
        <Pressable onPress={onPress} style={styles.container} marginVertical={margin}>
            <ImageBackground
                source={require('../assets/images/login_btn.png')}
                style={styles.img_bg}>

                <Text style={styles.text}>{text}</Text>

            </ImageBackground>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transeparent',
        width: 325,
        height: 100,
        marginVertical: '11%',
        alignItems: "center"
    },

    text: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        color: "rgba(207, 77, 79, 0.5)",
        textAlign: 'center',
        top: '30%',
        fontSize: 28
    },

    img_bg: {
        width: 325,
        height: 100
    },

})

export default CustomButton