import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Train_word from '../assets/images/Train_word.svg'
import Train_word_2 from '../assets/images/Train_word_2.svg'


const Train = () => {
  const [user] = useAuth()
  const startRecording = () => {
    console.log('Начало записи')
  }
  const toResult = () => {
    console.log('Перейти к результату')
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('../assets/images/Logo_small.png')}
                style={styles.logo_s}
                resizeMode='contain'/>
        </View>
        <View style={styles.main_cont}>
            <Train_word marginBottom={34}/>
            <Train_word_2 marginBottom={55}/>
            <Pressable marginBottom={190} onPress={startRecording}>
                <Image
                    source={require('../assets/images/Start_img.png')}
                    style={styles.start_img}>
                </Image>
            </Pressable>
            <Pressable style={styles.result} onPress={toResult}>
                <Text style={styles.text_result}>Получить результат</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Train

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(243, 239, 239, 1)",
        alignItems: 'center'
    },
    
    logo_s: {
        width: 100,
        height: 100,
        left: 150,
        top: -130,
    },

    header: {
        backgroundColor: 'transeparent',
        flexDirection: 'row',
        alignItems:'center',
        height: 100,
        paddingTop: 180,
        paddingRight: 35
    },

    main_cont: {
        alignItems: 'center',
        top: -90,
        flex: 1,
    },

    start_img: {
        width: 286,
        height: 286,
    },

    result: {
        backgroundColor: 'transeparent',
        width: 178,
        height: 25,
        alignItems: "center",
        left: -63,
        
    },
  
    text_result: {
        fontFamily: 'OpenSans-Italic',
        color: COLORS.text,
        fontSize: 16,
        textDecorationLine: 'underline'
    }
})