import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useAuth } from '../AuthContext'
import Header_text from '../assets/images/main_text_img.svg'
import {useWindowDimensions} from 'react-native';
import { COLORS } from '../assets/colors/colors';
import CustomInput from './CustomInput';
import letterImg from '../assets/images/letter.png'
import lockImg from '../assets/images/lock.png'
import CustomButton from './CustomButton';
import AlarmMessage from '../assets/images/AlarmMessage.svg';


const Authorization = () => {
  const alarmMessage = '        Application only for Russian language \n  (Приложение только для русского языка)'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {height} = useWindowDimensions()

  const [IsLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const navigation = useNavigation()
  const toRegistration = () => {
    navigation.navigate('Registration')
  }

  const toFAQ = () => {
    navigation.navigate('FAQ')
  }

  const [_, setUser] = useAuth()

  const hanldeLogin = () => {
    setIsLoading(true)
    axios({
      method: 'POST',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
      params: {
        key: 'AIzaSyA-mqI2gljPLMS1KW_InAyE3XzS5tQch2I',
      },
      data: {
        email,
        password,
      }
    }).then(res => {
      setUser(res.data)
    })
    .catch(e => {})
    .finally(() => {
      setIsLoading(false)
    })

  }

  return (
        <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/header_auth.png')}
                        style={styles.main_header}
                        resizeMode='contain'
                    />

                    <Image
                        source={require('../assets/images/icon_project.png')}
                        style={styles.main_icon}
                        resizeMode='contain'
                    />
                    
                    
                     <Header_text style={[styles.main_icon_text , {height: height * 0.3}]}
                    resizeMode='contain'/>
                    <Pressable style={styles.faq} onPress={toFAQ}>
                      <Image
                          source={require('../assets/images/faqImg.png')}
                          style={styles.faq_img}
                          resizeMode='contain'
                      />
                    </Pressable>
                </View>

                <CustomInput 
                    placeholder="Логин" value={email} setValue={setEmail} image = {letterImg} margin={12}/>

                <CustomInput
                    placeholder="Пароль" value={password} setValue={setPassword} secureTextEntry={true} image = {lockImg}/>
                
                <CustomButton text='Войти' onPress={hanldeLogin} />

                <Pressable style={styles.registr} onPress={toRegistration}>
                    <Text style={styles.text_registr}>Переход на регистрацию</Text>
                </Pressable>
        </View>
    )
}

export default Authorization

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: 'rgba(243, 239, 239, 1)',
      alignItems: 'center',
  },

  headerWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      width: "80%",
      height: 331,
      marginBottom: 30,
  },

  main_icon: {
      position: 'absolute',
      width: 259,
      height: 259,
      alignSelf: 'center',
      top: 0,
  },

  main_icon_text: {
      position: 'absolute',
      width: 217,
      height: 54,
      alignSelf: 'center',
      top: 250,  

  },

  main_header: {
      position: 'absolute',
      width: 331,
      height: 331,
  },

  registr: {
      backgroundColor: 'transeparent',
      width: 200,
      height: 50,
      marginVertical: 5,
      alignItems: "center",
      left: -80,
      top: 30
      
  },

  text_registr: {
      fontFamily: 'OpenSans-Italic',
      color: COLORS.text,
      fontSize: 16,
      textDecorationLine: 'underline'
  },

  alarm: {
      position: 'absolute',
      top: 330,
  },

  faq: {
    position: 'absolute',
    top: 20,
    right: -35,
    width: 40,
    height: 40,
  },

  faq_img: {
    width: 40,
    height: 40,
  }
})