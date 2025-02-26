import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MaterialIcons } from '@expo/vector-icons';

interface CardItemProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  onPress: () => void;
}

interface CardHomeProps {
  items: CardItemProps[];
  title: string;
}

const CardItem = ({ image, title, description, onPress }: CardItemProps) => (
  <TouchableOpacity 
    style={tw`bg-[#1C1C1E] rounded-xl overflow-hidden mb-4 w-[48%]`}
    onPress={onPress}
  >
    <Image source={image} style={tw`w-full h-32`} resizeMode="cover" />
    <View style={tw`p-3`}>
      <Text style={tw`text-white font-bold text-sm mb-1`}>{title}</Text>
      <Text style={tw`text-gray-400 text-xs`}>{description}</Text>
      <TouchableOpacity style={tw`mt-2 self-end flex-row items-center`}>
        <Text style={tw`text-gray-200 text-xs mr-1`}>Mulai Belajar</Text>
        <MaterialIcons name="play-circle" size={26} color="#E5E7EB" />
      </TouchableOpacity>    
      </View>
  </TouchableOpacity>
)

const CardHome = ({ items, title }: CardHomeProps) => {
  return (
    <View style={tw`mb-6`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-white font-bold text-lg`}>{title}</Text>
        <TouchableOpacity>
          <Text style={tw`text-gray-200`}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row flex-wrap justify-between`}>
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </View>
    </View>
  )
}

export default CardHome
