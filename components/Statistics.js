import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Stat_text from '../assets/images/Stat.svg'
import CustomOutput from './CustomOutput';
import CustomOutputStat from './CustomOutputStat';
import tembrImgGreen from '../assets/images/tembrGreen.png'
import tembrImgOrange from '../assets/images/tembrOrange.png'
import ParasiteWordsStat from './ParasiteWordsStat';
import { useRoute } from '@react-navigation/native';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../firebase-config.js';

const Statistics = () => {
  const [user, setUser] = useAuth()
  const [numberTrains, setNumberTrains] = useState(0)
  const [wordsPerMinute, setWordsPerMinute] = useState(0)
  const [tembrAvarage, setTembrAvarage] = useState(0)
  const [arrayOfParasites, setArrayOfparasites] = useState([])
  
  
  

  function Read(){
    const starCountRef = ref(db, 'users/' + user.localId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setNumberTrains(data.countTrains); 
      setWordsPerMinute(data.WordPerMinute)  
      setTembrAvarage(data.Tembr)
      setArrayOfparasites(data.ArrOfParasites)
    });
  }
  useEffect(()=>{
    Read();
  },[]);

  
  var sorted_arr = arrayOfParasites?.sort((b, a) => a[1] - b[1]).slice(0, 8);
  console.log('Сортированный', sorted_arr)

  const ParasiteWords = () => {
    var parasiteArr = []
    for (let i = 0; i < sorted_arr?.length && i < 7; i++)
      parasiteArr.push(
      <View key={i}>
      <CustomOutput output={sorted_arr[i][0]} outputCount={sorted_arr[i][1]} margin={3}/>
      </View>
      )
    return (<View>
      {parasiteArr}
      </View>
      )
  }
 
  
  let findAvareageOfWpm = Math.floor(wordsPerMinute/numberTrains) 
  if(isNaN(findAvareageOfWpm )) {
    findAvareageOfWpm = '0';
  }
  let findAvarageOfTembr = Math.floor(tembrAvarage/numberTrains)
  console.log('Средний тембр: ',findAvarageOfTembr )

  const takeImage = (findAvarageOfTembr) => {
    if(findAvarageOfTembr >= 4)
    return tembrImgGreen
    else return tembrImgOrange
  }
  const findWord = (num) => {
    
    let word = num % 10;
    let tensOfWords = num % 100;
    if ((word == 1) && (tensOfWords != 11)) return "слово/мин";
    if ((word > 1) && (word < 5) && (tensOfWords !=12) && (tensOfWords !=13)&& (tensOfWords !=14))
      return "слова/мин";
    return "слов/мин";
  
  }

  console.log(findWord(findAvareageOfWpm))
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('../assets/images/Logo_small.png')}
                style={styles.logo_s}
                resizeMode='contain'/>
        </View>
        <View style={styles.main_cont}>
            <Stat_text marginBottom={10}/>
            <View style={styles.replace}>
            <CustomOutputStat output={'Количество тренировок'} outputCount={numberTrains} margin={4}/>
            <CustomOutputStat output={'Средняя скорость речи'} outputCount2={findAvareageOfWpm + ' ' + findWord(findAvareageOfWpm)} margin={4}/>
            <CustomOutputStat output={'Средний тембр речи'} margin={4} image={takeImage(findAvarageOfTembr)}/>
            </View>
            <Text style={styles.statisticOfParasite}>Статистика по словам-паразитам</Text>
        </View>
        <View style={styles.parasitesCont1}>
        <ParasiteWords/>
        </View>
        <Image
        source={require('../assets/images/bottom_menu.png')}
        style={styles.img_bg}/>
    </View>
  )
}

export default Statistics

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
    
    wpm_green: {
      color: 'green'
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
        alignItems: 'center',
        top: -90,
        flex: 1,
    },

    statisticOfParasite: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 20,
      textAlign: 'center',
      width: 200,
      marginTop: 45,
      color: 'rgba(207, 77, 79, 0.75)'
    },

    parasitesCont1: {
      flex: 1,
      bottom: 110
    },

     parasites: {
      
     }
})