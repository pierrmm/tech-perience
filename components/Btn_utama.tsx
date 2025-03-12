import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Btn_utama = ({ onPress, title }: any) => {  return (
    <TouchableOpacity style={tw`bg-[#4285F4] py-4 rounded-xl`} onPress={onPress}>
      <Text style={tw`text-gray-200 text-base font-bold text-center`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Btn_utama