import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'
import Voice from '@react-native-voice/voice';

const Statistics = () => {
  const [user] = useAuth()
  
  return (
    <View>
      <Text>{user.displayName}</Text>
    </View>
  )
}

export default Statistics

const styles = StyleSheet.create({})