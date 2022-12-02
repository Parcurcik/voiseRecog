import { StyleSheet, View, Image, Pressable, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useAuth } from '../AuthContext'
import {useWindowDimensions} from 'react-native';
import { COLORS } from '../assets/colors/colors';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import QuitBtn from '../assets/images/quit_btn.svg'
import ResultText from '../assets/images/Result_text.svg'
import ColoredText from './ColoredText'


export default Result = () => {
  const [user] = useAuth()
  const navigation = useNavigation()
  const toTrain = () => {
    navigation.navigate('Train')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable
            style={styles.quit_button_cont}
            onPress={toTrain}>
                <QuitBtn
                    style={[styles.quit_button]}
                    resizeMode='contain'/>
            </Pressable>
            <ResultText style={styles.resultText}/>
            <Image
                source={require('../assets/images/Logo_small.png')}
                style={styles.logo_s}
                resizeMode='contain'/>
      </View>
      <View style={styles.textOptions}>
        <Text style={styles.speed}>
            Скорость речи
        </Text>
        <Text style={styles.tembr}>
            Тембр голоса
        </Text>
      </View>
      <View style={styles.wrongWordsCont}>
        <Text style={styles.wrongWords}>
            Употребление слов паразитов
        </Text>
      </View>
      <View>
      </View>
      <View style={styles.result}>
        <Text style={styles.uLevel}>
            Ваш уровень
        </Text>
        <ColoredText text='Преподаватель УрФУ!' color="#FF8A00" fontSize={19}/>
        <CustomButton text="1"/>
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
      height: 10,
      top: -15
  },

  quit_button_cont: {
      backgroundColor: 'transeparent',
      width: '100%',
      alignItems: "center",
      paddingRight: 325
  },

  logo_s: {
      width: 100,
      height: 100,
      left: 132.5,
      top: -115,
  },

  resultText: {
      alignSelf: 'center',
      marginTop: 25
  },

  cont: {
      flex: 1
  },

  textOptions: {
    backgroundColor: 'transeparent',
    flexDirection: 'row',
    paddingTop: 30
  },

  speed: {
    color: 'rgba(207, 77, 79, 0.75)',
    fontSize: 21,
    fontFamily: 'OpenSans',
    paddingRight: 30
  },

  tembr: {
    color: 'rgba(207, 77, 79, 0.75)',
    fontSize: 21,
    fontFamily: 'OpenSans',
  },

  wrongWords: {
    color: 'rgba(207, 77, 79, 0.75)',
    fontSize: 21,
    fontFamily: 'OpenSans',
  },

  wrongWordsCont: {
    backgroundColor: 'transeparent',
    top: 65
  },

  result: {
    backgroundColor: 'transeparent',
    flexDirection: 'column',
    alignItems:'center',
    top: 415
  },

  uLevel: {
    color: 'rgba(207, 77, 79, 0.75)',
    fontSize: 21,
    fontFamily: 'OpenSans',
    paddingBottom: 10
  }
})