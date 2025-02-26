import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

interface ButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  color: string;
  onPress?: () => void;
}

interface ButtonHomeProps {
  buttons: ButtonProps[];
}

const Button_home = ({ buttons }: ButtonHomeProps) => {
  return (
    <View>
      <View style={tw`flex-row justify-between mb-5`}>
        {buttons.slice(0, 2).map((button, index) => (
          <TouchableOpacity 
            key={index}
            style={tw`bg-neutral-800 p-4 rounded-xl flex-1 ${index === 0 ? 'mr-2' : 'ml-2'} items-center border-l-8 border-l-${button.color}`}
            onPress={button.onPress}
          >
            <View style={tw`flex-row items-center`}>
              <Ionicons name={button.icon} size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-center font-bold`}>{button.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={tw`flex-row justify-between mb-5`}>
        {buttons.slice(2, 4).map((button, index) => (
          <TouchableOpacity 
            key={index}
            style={tw`bg-neutral-800 p-4 rounded-xl flex-1 ${index === 0 ? 'mr-2' : 'ml-2'} items-center border-l-8 border-l-${button.color}`}
            onPress={button.onPress}
          >
            <View style={tw`flex-row items-center`}>
              <Ionicons name={button.icon} size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-center font-bold`}>{button.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}

export default Button_home