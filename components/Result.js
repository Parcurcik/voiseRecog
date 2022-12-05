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
import { useRoute } from '@react-navigation/native';

export default Result = () => {
  
  const [user] = useAuth()
  const navigation = useNavigation()
  const route = useRoute();
  const newAverage = route.params.average
  const newTime = route.params.timeToExport
  const newCountWords = route.params.wordsInText
  const toTrain = () => {
    navigation.navigate('Train')
  }

  const findWordsPerMinute = (numWords, time) => {
    timeToMinutes = time / 1000 / 60
    return Math.floor(numWords / timeToMinutes)
  }
  
  const wordsPerMinute = findWordsPerMinute(newCountWords, newTime)

  const findWord = (num) => {
    
    let ruble = num % 10;
    let tensOfRubles = num % 100;
    if ((ruble == 1) && (tensOfRubles != 11)) return "слово/мин";
    if ((ruble > 1) && (ruble < 5) && (tensOfRubles !=12) && (tensOfRubles !=13)&& (tensOfRubles !=14))
      return "слова/мин";
    return "слов/мин";
  
  }
  constWordsPerMinuteText = findWordsPerMinute(newCountWords, newTime)
  const findTembr = (newAverage) => {
    if (newAverage <=5) return 'Вы говорите \n тихо'
    else if (newAverage >= 8) return 'Вы \n говорите громко'
    else return 'Вы говорите \n нужным тембром'
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
      <View style={styles.tembr_params}>
              <Text  style={(newAverage <=5 ) || (newAverage >= 8) ? styles.yellow_tembr : styles.green_tembr}>{findTembr(newAverage)}</Text>
      </View>
      <View style={styles.words_params}>
              <Text  style={(wordsPerMinute <=119 ) || (wordsPerMinute >= 200) ? styles.yellow_wpm : styles.green_wpm}>{wordsPerMinute + " " +findWord(wordsPerMinute)}</Text>
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
  yellow_wpm: {
    color: '#FF7500',
    textAlign: "center",
    fontSize: 14,
    fontFamily: "OpenSans-BoldItalic",
    paddingRight: 230,
  },

  words_params: {
    marginTop: -36,
    alignSelf: "flex-end",
    justifyContent: 'center',
  },
  green_wpm: {
    color: '#0BAB00', 
    textAlign: "center",
    paddingRight: 230,
    fontSize: 14,
    paddingTop: -50,
    fontFamily: "OpenSans-BoldItalic",
  },

  tembr_params: {
    paddingTop: 5,
    alignSelf: "flex-end",
  },

  green_tembr: {
    color: '#0BAB00', 
    textAlign: "center",
    paddingRight: 40,
    fontSize: 14,
    fontFamily: "OpenSans-BoldItalic",
  },

  yellow_tembr: {
    color: '#FF7500',
    textAlign: "center",
    fontSize: 14,
    fontFamily: "OpenSans-BoldItalic",
    paddingRight: 53,
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
    top: 30
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