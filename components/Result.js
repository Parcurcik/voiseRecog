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
import CustomOutput from './CustomOutput'

export default Result = () => {

  const ParasiteWords = () => {
    var parasiteArr = []
    for (let i = 0; i < output.length && i < 7; i++)
      parasiteArr.push(
      <View key={i}>
      <CustomOutput output={output[i][0]} outputCount={output[i][1]}/>
      </View>
      )
    return (<View>
      {parasiteArr}
      </View>
      )
  }
  
  const listOfBadWords = ['типа','ну','короче','кстати','скажем','блин',
  'реально','ведь', 'вообще', 'прикинь', 'достаточно', 'знаешь', 'так', 'собственно', 'допустим',
  'вероятно', 'просто', 'конкретно', 'ладно', 'походу', 'фактически', 'получается']

  const [user] = useAuth()
  const navigation = useNavigation()
  const route = useRoute();
  const newAverage = route.params.average
  const newTime = route.params.timeToExport
  const newCountWords = route.params.wordsInText
  const textWords = route.params.results
  

  const counterObject = listOfBadWords.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  

  textWords.split(/[\s,\.]/).forEach(
    token => {
      if (token in counterObject) counterObject[token]++;
    }
  );
  
  const topWords = Object.entries(counterObject).sort((a, b) => b[1] - a[1]).slice(0, 8);


  var filteredArr = topWords.filter(function(item) {
    return item[1] != 0;
  });


  var output = filteredArr.map(function(item) {
    return [item[0], item[1]]
  });
 
 console.log('Массив:', output); 

  const toTrain = () => {
    navigation.navigate('Train')
  }
  

  const findWordsPerMinute = (numWords, time) => {
    timeToMinutes = time / 1000 / 60
    return Math.floor(numWords / timeToMinutes)
  }
  

  const wordsPerMinute = findWordsPerMinute(newCountWords, newTime)

  const makeRecomendations = (wordsPerMinute, newAverage) => {
    const a = []
    if (wordsPerMinute <= 119) a.push('Вам необходимо увеличить количество слов в минуту до 120.')
    if (wordsPerMinute >= 180) a.push('Вам необходимо уменьшить количество слов в минуту до 170.')
    if (newAverage <= 5) a.push('Говорите громче.')
    if (newAverage >= 8) a.push('Говорите тише.')
    if (output.length) a.push('Постарайтесь уменьшить количество слов-паразитов.')
    if (a.length ) return a.join('\n')
    return 'Вы потрясающий спикер!'
  }


  const findWord = (num) => {
    
    let word = num % 10;
    let tensOfWords = num % 100;
    if ((word == 1) && (tensOfWords != 11)) return "слово/мин";
    if ((word > 1) && (word < 5) && (tensOfWords !=12) && (tensOfWords !=13)&& (tensOfWords !=14))
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
      <View style={styles.paramsCont}>
        <Text style={(wordsPerMinute <=119 ) || (wordsPerMinute >= 180) ? styles.yellow_wpm : styles.green_wpm}>{wordsPerMinute + " " +findWord(wordsPerMinute)}</Text>
        <Text style={(newAverage <=5 ) || (newAverage >= 8) ? styles.yellow_tembr : styles.green_tembr}>{findTembr(newAverage)}</Text>
      </View>
      <View style={styles.wrongWordsCont}>
        <Text style={styles.wrongWords}>
            Употребление слов паразитов
        </Text>
        <ParasiteWords/>
      </View>
      <View style={styles.result}>
        <Text style={styles.uLevel}>
            Рекомендации
        </Text>
        <Text style={((newAverage >=5 ) && (newAverage <= 8) && (wordsPerMinute >=119 && wordsPerMinute <=180) && output.length < 1) ? styles.goodSpeaker : styles.textRecomendations}>{makeRecomendations(wordsPerMinute, newAverage)}</Text>
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

  goodSpeaker: {
    color: '#0BAB00',
    fontSize: 18,
    fontFamily: 'OpenSans-BoldItalic',
    paddingBottom: 10,
    textAlign: "center",
  },


  textRecomendations: {
    color: 'red',
    fontSize: 18,
    fontFamily: 'OpenSans-BoldItalic',
    paddingBottom: 10,
    textAlign: "center",
  },

  yellow_wpm: {
    color: '#FF7500',
    textAlign: "center",
    fontSize: 18,
    position: 'absolute',
    left: -135,
    fontFamily: "OpenSans-BoldItalic",
  },

  green_wpm: {
    color: '#0BAB00', 
    textAlign: 'center',
    fontSize: 18,
    left: -135,
    position: 'absolute',
    fontFamily: "OpenSans-BoldItalic",
  },

  green_tembr: {
    color: '#0BAB00', 
    textAlign: "center",
    fontSize: 18,
    position: 'absolute',
    left: 5,
    fontFamily: "OpenSans-BoldItalic",
  },

  yellow_tembr: {
    color: '#FF7500',
    textAlign: "center",
    fontSize: 18,
    position: 'absolute',
    left: 27,
    fontFamily: "OpenSans-BoldItalic",
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

  paramsCont: {
    backgroundColor: 'transeparent',
    flexDirection: 'row',
    paddingTop: 10
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
    top: 40
  },

  result: {
    backgroundColor: 'transeparent',
    flexDirection: 'column',
    alignItems:'center',
    top: 620,
    position: 'absolute'
  },

  uLevel: {
    color: 'rgba(207, 77, 79, 0.75)',
    fontSize: 21,
    fontFamily: 'OpenSans',
    paddingBottom: 10
  },

  imgBgWW: {
    width: 292,
    height: 42,
    top: 150,
  }
})