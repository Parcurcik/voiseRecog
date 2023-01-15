import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../assets/colors/colors';
import Profile_text from '../assets/images/profile_text.svg'
import UnderLine from '../assets/images/underline.svg'
import QuitBtn from '../assets/images/quit_btn.svg'

const FAQ = () => {

    const navigation = useNavigation()
    const toAuth = () => {
    navigation.navigate('Authorization')
  }
  const [user, setUser] = useAuth()
  const logout = () => {
    setUser(false)
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Pressable
            style={styles.quit_button_cont}
            onPress={() => {
              toAuth();
             }}>
                <QuitBtn
                    style={[styles.quit_button]}
                    resizeMode='contain'/>
            </Pressable>
            <Image
                source={require('../assets/images/Logo_small.png')}
                style={styles.logo_s}
                resizeMode='contain'/>
        </View>
        <View style={styles.main_cont}>
            <Text style={styles.text_result}>Приложение для анализа речи. Оно предназначено для людей, которые публично выступают или готовятся это делать. Создано командой студентов второго курса института ИРИТ-РТФ.</Text>
            <Text style={styles.text_result}>- Записывать текст можно только на русском языке.</Text>
            <Text style={styles.text_result}>- На странице Тренировка записывается голос.</Text>
            <Text style={styles.text_result}>- На странице Результат можно посмотреть рекомендации по улучшению речи, а также слова-паразиты, которые были употреблены.</Text>
            <Text style={styles.text_result}>- На странице Статистика отображаются результаты всех тренировок пользователя. </Text>
        </View>
    </View>
  )
}

export default FAQ

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(243, 239, 239, 1)",
        alignItems: 'center'
    },

    img_bg: {
        width: 412,
        height: 80,
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
        top: -50,
        flex: 1,
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
        fontSize: 18,
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 20
    },

    replace: {
        backgroundColor: 'transeparent',
        flexDirection: 'row',
        alignItems:'center',
        height: 40,
    },

    inp: {
      fontFamily: 'OpenSans-Medium',
        fontSize: 20,
        height: 40,
        width: 280,
        alignSelf:'center',
        textAlign: 'center',
    },

    replace_btn: {
      width: 30,
      height: 30
    },

    quit_button: {
        width: 30,
        height: 10,
        top: -15
    },
  
    quit_button_cont: {
        backgroundColor: 'transeparent',
        width: '100%',
        position: 'absolute',
        alignItems: "center",
        right: 35,
        top: 60
    },
})