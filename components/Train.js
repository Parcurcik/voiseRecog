import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Train_word from '../assets/images/Train_word.svg'
import Train_word_2 from '../assets/images/Train_word_2.svg'
import Voice from '@react-native-voice/voice';
import { useState} from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';


const Train = () => {
  const [user] = useAuth()
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  const [voiceData, setVoiceData] = useState([]);
  const [average, setAvverage] = useState('')

  const navigation = useNavigation()

  const [startTime, setStartTime] = useState('')
  const [stopTime, setStopTime] = useState('')
  const [timeToExport, setTimeToExport] = useState('')
  const [wordsInText, setWordsIntext] = useState('')

  const toResult = () => {
    navigation.navigate('Result',  {average, timeToExport, wordsInText})
}
  


  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    Voice.onSpeechStart = onSpeechStart;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
      
    }
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("ru");
    setStarted(true);
    newStart = (new Date()).getTime();
    setStartTime(newStart)
  };

  const onSpeechVolumeChanged = (e) => {
    voiceData.push(e.value); 
  }
  const onSpeechStart = (e) => {
    voiceData.splice(0, voiceData.length);
}

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
    newStop = (new Date()).getTime();
    setStopTime(newStop)
    setStartTime(newStart)
    let timeToExport = newStop - startTime
    setTimeToExport(timeToExport)
    console.log('Время работы', timeToExport)
  };

  const onSpeechResults = (result) => {
    var allValue = result.value
    var theBestOption = allValue[Object.keys(allValue).pop()]
    setResults(theBestOption)
    console.log('Распозавание:', theBestOption)
    let wordsInText = setNumWordsInText(theBestOption)
    setWordsIntext(wordsInText)
    console.log('Количество слов: ', wordsInText)
    let sum = 0;
    let count = 0;
    for (let i = 0; i < voiceData.length; i++) {
        sum += voiceData[i];
        count++;
    }
    let average = sum / count;
    setAvverage(average)
    console.log('Среднее значение громкости:', average)
    // console.log('Частоты', voiceData)
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  const setNumWordsInText = b => {
    let s = b
    s = s.replace(/(^\s*)|(\s*$)/gi, "")
    s = s.replace(/[ ]{2,}/gi, " ")
    s = s.replace(/\n /, "\n")
    return s.split(" ").length
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
            <Train_word marginBottom={34}/>
            <Train_word_2 marginBottom={55}/>
            {!started ? <Pressable marginBottom={180}  onPress={startSpeechToText}>
                <Image
                    source={require('../assets/images/Start_img.png')}
                    style={styles.start_img}>
                </Image>
            </Pressable> : undefined}
            {started ? <Pressable marginBottom={180}  onPress={stopSpeechToText}>
                <Image
                    source={require('../assets/images/Start_img.png')}
                    style={styles.start_img}>
                </Image>
            </Pressable> : undefined}
             <Text style={styles.textWithSpaceStyle}>
          </Text>
            <Pressable style={styles.result} onPress={toResult}>
                <Text style={styles.text_result}>Получить результат</Text>
            </Pressable>
        </View>
        <Image
        source={require('../assets/images/bottom_menu.png')}
        style={styles.img_bg}/>
    </View>
  )
}

export default Train

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

    start_img: {
        width: 286,
        height: 286,
    },

    result: {
        backgroundColor: 'transeparent',
        width: 178,
        height: 25,
        alignItems: "center",
        left: -63,
        
    },
  
    text_result: {
        fontFamily: 'OpenSans-Italic',
        color: COLORS.text,
        fontSize: 16,
        textDecorationLine: 'underline'
    }
})