import React from "react";
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry, image, margin, flex}) => {
    return (
        <KeyboardAvoidingView style={styles.container} marginVertical={margin} behavior='height' flex={flex}>
            <ImageBackground 
                source={require('../assets/images/login.png')}
                style={styles.img_bg}>
                    <TextInput
                    value={value}
                    onChangeText={setValue} 
                    placeholder={placeholder}
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor="rgba(207, 77, 79, 0.5)" />
                    <Image
                        source={image}
                        style={styles.image}
                    />
            </ImageBackground>        
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transeparent',
        width: '100%',
        alignItems: 'center',
        marginVertical: 5,
    },

    input: {
        fontFamily: 'OpenSans-Medium',
        paddingStart: 25,
        paddingEnd: 55,
        fontSize: 20,
        height: 72,
    },

    img_bg: {
        width: 331,
        height: 72
    },

    image: {
        width: 30,
        height: 30,
        position: 'absolute',
        marginHorizontal: 280,
        marginVertical: 21
    }
})

export default CustomInput