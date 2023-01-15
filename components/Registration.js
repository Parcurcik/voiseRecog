import { StyleSheet, View, Image, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useAuth } from '../AuthContext'
import {useWindowDimensions} from 'react-native';
import { COLORS } from '../assets/colors/colors';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import QuitBtn from '../assets/images/quit_btn.svg'
import RegWord from '../assets/images/Reg_word.svg'
import { db } from '../firebase-config.js';
import { ref, set, update, onValue, remove } from "firebase/database";




export default function Registration() {
  const navigation = useNavigation()
  const toLogin = () => {
    navigation.navigate('Authorization')
  }
  


  const [surname, setSurname] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [IsLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const [_, setUser] = useAuth()


 
 
  const hanldeRegister = () => {
    if (password  !== confirmPassword){
      alert("Пароли не совпадают!")
    }
    else{
      setIsLoading(true)
    axios({
      method: 'POST',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
      params: {
        key: 'AIzaSyA-mqI2gljPLMS1KW_InAyE3XzS5tQch2I',
      },
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        axios({
          method: 'POST',
          url: 'https://identitytoolkit.googleapis.com/v1/accounts:update',
          params: {
            key: 'AIzaSyA-mqI2gljPLMS1KW_InAyE3XzS5tQch2I',
          },
          data: {
            idToken: res.data.idToken,
            displayName: name + ' ' + surname
          }
        })
        .then((r) => {
          setUser({...r.data, idToken: res.data.idToken})
          set(ref(db, 'users/' + res.data.localId), {          
            email: email,
            countTrains: 0,
            WordPerMinute: 0,
            Tembr: 0,
            ArrOfParasites: [],
          }).then(() => {
             console.log('Made new account');    
        })  
            .catch((error) => {
                console.log(error);
            });
        }).catch(e => {
          console.log(e, 'Updating error');
          alert(e.message);
        })
        .finally(() => {
          setIsLoading(false);
        })
      })
      .catch((error) => console.log(error.response.request._response))

    }
    
  }

  return (
    <View
     style={styles.container}>
        <View style={styles.header}>
            <Pressable
            style={styles.quit_button_cont}
            onPress={toLogin}>
                <QuitBtn
                    style={[styles.quit_button]}
                    resizeMode='contain'/>
            </Pressable>
            <RegWord style={styles.regWord}/>
            <Image
                source={require('../assets/images/Logo_small.png')}
                style={styles.logo_s}
                resizeMode='contain'/>
        </View>
            <View
             style={styles.cont_inp}
             behavior="position">
                <CustomInput 
                    value={name}
                    setValue={setName}
                    placeholder="Имя"
                    margin={10}
                    />
                    
                
                <CustomInput
                    value={surname}
                    setValue={setSurname}
                    placeholder="Фамилия"
                    margin={10}/>

                <CustomInput
                    value={email}
                    setValue={setEmail} 
                    placeholder="Почта"
                    margin={10}/>

                <CustomInput 
                    placeholder="Пароль"
                    value={password}
                    setValue={setPassword}
                    margin={10}
                    secureTextEntry={true}/>
                <CustomInput 
                    placeholder="Повторите пароль"
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    margin={10}
                    secureTextEntry={true}
                    flex={1}/>
                <CustomButton 
                    text={"Зарегистрироваться"}
                    onPress={hanldeRegister}
                    margin={0}/>
            </View>    
    </View>
)
}


const styles = StyleSheet.create({
  header: {
      backgroundColor: 'transeparent',
      flexDirection: 'column',
      alignItems:'center',
      height: 100,
      paddingTop: 50
  },

  container: {
      flex: 1,
      backgroundColor: 'rgba(243, 239, 239, 1)',
      alignItems: 'center',
  },

  quit_button: {
      width: 30,
      height: 10
  },

  quit_button_cont: {
      backgroundColor: 'transeparent',
      width: '100%',
      alignItems: "center",
      paddingRight: 325
  },

  logo_s: {
      width: 110,
      height: 110,
      left: 150,
      top: -130,
  },

  cont_inp: {
      alignItems: 'center',
      padding: 40,
      flex: 1
  },

  regWord: {
      alignSelf: 'center',
      marginTop: 30
  },

  cont: {
      flex: 1
  }
})