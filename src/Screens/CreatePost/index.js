import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreatePost = ({ route }) => {
  const { medias } = route?.params
  return (
    <View>
      <Text>CreatePost</Text>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({})
