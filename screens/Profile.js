import { StyleSheet, Text, View, Image, Pressable, TextInput, AsyncStorage } from 'react-native'
import React, {useContext} from 'react'
import AuthProvider, { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Profile_text from '../assets/images/profile_text.svg'
import UnderLine from '../assets/images/underline.svg'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';





const Profile = () => {
  const [user, setUser] = useAuth()
  const handleSigninNavigation = () => {
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
            <Profile_text marginBottom={28}/>
            <View style={styles.replace}>
              <TextInput
                style={styles.inp}
                placeholder={user.displayName}
                placeholderTextColor= 'rgba(207, 77, 79, 0.75)'
                editable={false}/>
            </View>
            <UnderLine marginBottom={500}/>
            <Pressable style={styles.result} onPress={handleSigninNavigation}>
                <Text style={styles.text_result}>Выйти из профиля</Text>
            </Pressable>
        </View>
        <Image
        source={require('../assets/images/bottom_menu.png')}
        style={styles.img_bg}/>
    </View>
  )
}

export default Profile

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

    replace: {
        backgroundColor: 'transeparent',
        flexDirection: 'row',
        alignItems:'center',
        height: 40,
    },

    inp: {
      fontFamily: 'OpenSans-Medium',
        fontSize: 20,
        height: 40,
        width: 280,
        alignSelf:'center',
        textAlign: 'center',
    },

    replace_btn: {
      width: 30,
      height: 30
    }
})