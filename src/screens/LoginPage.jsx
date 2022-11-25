import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View as RNView,Text } from 'react-native'
import { styled } from 'nativewind'

const View = styled(RNView)

export default function LoginPage() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-900">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
