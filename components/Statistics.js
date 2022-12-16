import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Stat_text from '../assets/images/Stat.svg'
import CustomOutput from './CustomOutput';
import CustomOutputStat from './CustomOutputStat';
import tembrImgGreen from '../assets/images/tembrGreen.png'
import tembrImgOrange from '../assets/images/tembrOrange.png'
import ParasiteWordsStat from './ParasiteWordsStat';



const Statistics = () => {
  const [user, setUser] = useAuth()
  const logout = () => {
    setUser(false)
  }
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
            <CustomOutputStat output={'Количество тренировок'} outputCount={'12'} margin={4}/>
            <CustomOutputStat output={'Средняя скорость речи'} outputCount={''} margin={4}/>
            <CustomOutputStat output={'Средний тембр речи'} margin={4} image={tembrImgGreen}/>
            <CustomOutputStat output={'Процент употребления слов паразитов'} outputCount={''} margin={4}/>
            </View>
            <Text style={styles.statisticOfParasite}>Статистика по словам-паразитам</Text>
        </View>
        <View style={styles.parasitesCont1}>
          <ParasiteWordsStat style={styles.parasites} output={"блин"} outputCount={"1"} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
        </View>
        <View style={styles.parasitesCont2}>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
          <ParasiteWordsStat style={styles.parasites} margin={4}/>
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
      left: 40,
      bottom: 150,
      position: 'absolute'
    },

    parasitesCont2: {
      flex: 1,
      right: 40,
      bottom: 150,
      position: 'absolute'
    },

     parasites: {
      
     }
})