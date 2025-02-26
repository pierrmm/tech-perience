import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { IconSymbol } from './ui/IconSymbol'

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`w-32 h-36 bg-neutral-800 rounded-xl mr-4 overflow-hidden`}>
      <View style={tw`absolute right-0 top-0 bottom-0 w-1 bg-blue-500`} />
      <View style={tw`p-3 justify-between items-center h-full`}>
        <View style={tw`w-16 h-16 items-center justify-center`}>
          {icon}
        </View>
        <Text style={tw`text-white text-md text-center`}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const ExperienceCardRow: React.FC = () => {
  return (
    <View style={tw`mb-6`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <View style={tw`flex-row items-center`}>
          <IconSymbol name="calendar" size={24} color="#FFFFFF" />
          <Text style={tw`text-white font-bold text-lg ml-2`}>📆 Program Techxperience</Text>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-gray-200`}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ExperienceCard 
          icon={<Image source={require('../assets/images/investment.png')} style={tw`w-10 h-10`} />}
          title="Techxperience Career"
          onPress={() => {}}
        />
        <ExperienceCard 
          icon={<Image source={require('../assets/images/investment.png')} style={tw`w-10 h-10`} />}
          title="Pengembangan Usaha"
          onPress={() => {}}
        />
        <ExperienceCard 
          icon={<Image source={require('../assets/images/investment.png')} style={tw`w-10 h-10`} />}
          title="Beasiswa Kuliah"
          onPress={() => {}}
        />
        <ExperienceCard 
          icon={<Image source={require('../assets/images/investment.png')} style={tw`w-10 h-10`} />}
          title="Techxperience Roadmap"
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  )
}

export default ExperienceCardRow