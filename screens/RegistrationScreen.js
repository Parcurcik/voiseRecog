import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RegistrationScreen() {
  const navigation = useNavigation()
  const toLogin = () => {
    navigation.navigate('Login')
  }

  return (
    // Отстилизовать кнопку с функцией toLogin
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      scrollEnabled={false}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor='rgba(207, 77, 79, 0.5)'
          placeholder='Имя'
          /* value={email} */
          /* onChangeText={text => setEmail(text)}  */
          style={styles.input}
        />
        <TextInput
            placeholderTextColor='rgba(207, 77, 79, 0.5)'
            placeholder='Фамилия'
            /* value={password}  */
            /* onChangeText={text => setPassword(text)} */
            style={styles.input}
            secureTextEntry
        />
        <TextInput
            placeholderTextColor='rgba(207, 77, 79, 0.5)'
            placeholder='Почта'
            /* value={password}  */
            /* onChangeText={text => setPassword(text)} */
            style={styles.input}
            secureTextEntry
        />
        <TextInput
            placeholderTextColor='rgba(207, 77, 79, 0.5)'
            placeholder='Пароль'
            /* value={password}  */
            /* onChangeText={text => setPassword(text)} */
            style={styles.input}
            secureTextEntry
        />
        <TextInput
            placeholderTextColor='rgba(207, 77, 79, 0.5)'
            placeholder='Потворите пароль'
            /* value={password}  */
            /* onChangeText={text => setPassword(text)} */
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.button}
        >
          <Text style={styles.button}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => toLogin()}
        style={styles.registration}
      >
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3EFEF',
    marginTop: 100,
    
  }, 
  inputContainer:{
    width: 265,
  },

  //Навалить теней
  //Добавить шрифт
  input:{
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 25,
    fontSize: 20,
    elevation: 40,
    shadowColor: 'rgba(207, 77, 79, 0.5)',
    borderWidth: 2,
    borderColor: 'rgba(207, 77, 79, 0.3)',
  },


  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    flex: 1, 
    
  },

  //Навалить теней
  //Добавить шрифт
  button:{
    backgroundColor: '#FFFFFF', 
    width: 265,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    color: "rgba(207, 77, 79, 0.5)",
    fontSize: 24,
    paddingVertical: 9,
    elevation: 40,
    shadowColor: 'rgba(207, 77, 79, 0.5)',
    borderWidth: 2,
    borderColor: 'rgba(207, 77, 79, 0.3)',
  },
  registration:{
    marginTop: 40,
    paddingRight: 90,
    color: "rgba(207, 77, 79, 0.5)",
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  
})