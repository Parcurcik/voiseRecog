import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../AuthContext'

const Profile = () => {
  const [user] = useAuth()
  return (
    <View>
      <Text>{user.displayName}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})