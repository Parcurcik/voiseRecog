import React from "react";
import { View, Text, StyleSheet} from "react-native";

const ColoredText = ({color, fontSize, text}) => {
    return (
        <View style={styles.container}>
            <Text style={{
                color: color,
                fontSize: fontSize,
                fontFamily: "OpenSans-BoldItalic"
            }}>
                {text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transeparent',
        width: '100%',
        alignItems: 'center',
    },
})

export default ColoredText