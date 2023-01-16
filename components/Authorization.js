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
    setError('')
    navigation.navigate('Registration')
  }

  const toFAQ = () => {
    setError('')
    navigation.navigate('FAQ')
  }

  const [_, setUser] = useAuth()

  const hanldeLogin = () => {
    
  if (email != '' || password != ''){

  
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
    .catch(e => {setError('Неверно введенные данные')})
    .finally(() => {
      setIsLoading(false)
      
    })
  }
  else  { setError('Введите данные от аккаунта')}
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
                <Text style={styles.validate}>{error}</Text>

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
      width: '80%',
      height: '40%',
      marginBottom: '5%',
  },

  main_icon: {
      position: 'absolute',
      width: '100%',
      height: '75%',
      alignSelf: 'center',
      top: '0%',
  },

  main_icon_text: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      top: '70%',  

  },

  main_header: {
      position: 'absolute',
      width: '100%',
      height: '100%',
  },

  registr: {
      backgroundColor: 'transeparent',
      width: '47%',
      height: '10%',
      marginVertical: '1%',
      alignItems: "center",
      right: '15%',
      top: '-5%'
      
  },

  text_registr: {
      fontFamily: 'OpenSans-Italic',
      color: COLORS.text,
      fontSize: 16,
      textDecorationLine: 'underline'
  },

  faq: {
    position: 'absolute',
    top: '7%',
    right: "-9%",
    width: "12%",
    height: "12%",
  },

  faq_img: {
    width: "100%",
    height: "100%",
  },

  validate: {
    position: 'absolute',
    top: '39%',
    fontFamily: 'OpenSans',
    fontSize: 20,
    color: '#ff0000'
  }
})