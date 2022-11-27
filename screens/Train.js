import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import React, {useEffect, useState}  from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Train_word from '../assets/images/Train_word.svg'
import Train_word_2 from '../assets/images/Train_word_2.svg'
import AudioRecord from 'react-native-audio-record';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';

const Train = () => {
    const [user] = useAuth()
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
  
    async function startRecording() {
      try {
        const permission = await Audio.requestPermissionsAsync();
  
        if (permission.status === "granted") {
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true
          });
          
          const { recording } = await Audio.Recording.createAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );
  
          setRecording(recording);
        } else {
          setMessage("Please grant permission to app to access microphone");
        }
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  
    async function stopRecording() {
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
  
      let updatedRecordings = [...recordings];
      const { sound, status } = await recording.createNewLoadedSoundAsync();
      updatedRecordings.push({
        sound: sound,
        duration: getDurationFormatted(status.durationMillis),
        file: recording.getURI()
      });
  
      setRecordings(updatedRecordings);
    }
    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
      }
    
      function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
          return (
            <View key={index} style={styles.row}>
              <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
              <Pressable style={styles.result} onPress={() => Sharing.shareAsync(recordingLine.file)}>
                <Text style={styles.text_result}>Получить результат</Text>
            </Pressable>
            </View>
          );
        });
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
            <Pressable marginBottom={180} onPress={recording ? stopRecording : startRecording}>
                <Image
                    source={require('../assets/images/Start_img.png')}
                    style={styles.start_img}>
                </Image>
            </Pressable>
            {getRecordingLines()}
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
    }, 
    button: {
        marginTop: -200
      }, 
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fill: {
        flex: 1,
        marginTop: -100
      },
})