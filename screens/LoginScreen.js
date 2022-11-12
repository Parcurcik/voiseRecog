import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const toRegistration = () => {
    navigation.navigate('Registration')
  }

  return (
    //Сделать чтоб клава не сбивала элементы интерфейса
    //Добавить лого и градиентную зарисовку
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      scrollEnabled={false}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor='rgba(207, 77, 79, 0.5)'
        placeholder='Почта'
        value={email}
        onChangeText={text => setEmail(text)} 
        style={styles.input}
      />
     <TextInput
        placeholderTextColor='rgba(207, 77, 79, 0.5)'
        placeholder='Пароль'
        value={password} 
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => { }}
        style={styles.button}
      >
        <Text style={styles.button}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => toRegistration()}
        style={styles.registration}
      >
        <Text style={styles.registration}>Переход на регистрацию</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3EFEF',
    marginTop: 260,
    
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
    marginTop: -10,
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