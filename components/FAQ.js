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
    
    logo_s: {
        width: 100,
        height: 100,
        marginLeft: '85%',
        bottom: '34%',
    },

    header: {
        backgroundColor: 'transeparent',
        flexDirection: 'row',
        alignItems:'center',
        height: '15%',
        paddingTop: '45%',
        paddingRight: '8%'
    },

    main_cont: {
        bottom: '7%',
        width: '100%',
        height: '60%',
        flex: 1,
    },
  
    text_result: {
        fontFamily: 'OpenSans-Italic',
        color: COLORS.text,
        fontSize: 14,
        paddingTop: '5%',
        paddingRight: '5%',
        paddingLeft: '5%'
    },

    quit_button: {
        width: '100%',
        height: '100%',
        top: '-100%'
    },
  
    quit_button_cont: {
        backgroundColor: 'transeparent',
        width: '100%',
        position: 'absolute',
        alignItems: "center",
        right: '55%',
        paddingBottom: '10%'
    },
})