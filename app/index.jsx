import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pextrabold">Aura</Text>
      <Link href="/home" style={{color:"blue"}}>Home</Link>
      <StatusBar style="auto" />
    </View>
    
  )
}

export default index