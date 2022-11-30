import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Train_word from '../assets/images/Train_word.svg'
import Train_word_2 from '../assets/images/Train_word_2.svg'
import Voice from '@react-native-voice/voice';
import { useState} from 'react';
import { useEffect } from 'react';

const Train = () => {
  const [user] = useAuth()
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("ru");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };
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
            {results.map((result, index) => <Text key={index}>{result}</Text>)}
            <Pressable marginBottom={180} onPress={startSpeechToText}>
                <Image
                    source={require('../assets/images/Start_img.png')}
                    style={styles.start_img}>
                </Image>
            </Pressable>
            <Pressable style={styles.result}>
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