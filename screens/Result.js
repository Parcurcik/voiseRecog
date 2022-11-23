import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'

const Result = () => {
  const [user] = useAuth()
  return (
    <View>
      <Text>{user.displayName}</Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({})