import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import { COLORS } from '../assets/colors/colors';
import Profile_text from '../assets/images/profile_text.svg'
import UnderLine from '../assets/images/underline.svg'



const Profile = () => {
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
            <Profile_text marginBottom={28}/>
            <View style={styles.replace}>
              <TextInput
                style={styles.inp}
                placeholder={user.displayName}
                placeholderTextColor= 'rgba(207, 77, 79, 0.75)'
                editable={false}/>
            </View>
            <UnderLine marginBottom={500}/>
            <Pressable style={styles.result} onPress={logout}>
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
        width: '100%',
        height: '9.75%',
    },
    
    logo_s: {
        width: 100,
        height: 100,
        marginLeft: '85%',
        marginBottom: '66.4%'
    },

    header: {
        backgroundColor: 'transeparent',
        flexDirection: 'row',
        alignItems:'center',
        height: '10%',
        paddingTop: '43%',
        paddingRight: '8.5%'
    },

    main_cont: {
        alignItems: 'center',
        bottom: '10.5%',
        flex: 1,
    },

    result: {
        position: 'absolute',
        backgroundColor: 'transeparent',
        width: '35%',
        height: '10%',
        alignItems: "center",
        right: '17.5%',
        top: '95%'
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
        height: '7%',
    },

    inp: {
      fontFamily: 'OpenSans-Medium',
        fontSize: 20,
        height: 45,
        width: '60%',
        alignSelf:'center',
        textAlign: 'center',
    },
})