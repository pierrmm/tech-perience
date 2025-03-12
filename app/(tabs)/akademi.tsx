import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const akademiData = [
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Free'
  },
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Pro'
  },
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Free'
  },
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Pro'
  },
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Pro'
  },
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Pro'
  },
  {
    image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
    category: 'Keuangan Bisnis',
    title: 'Introduction of Financial Statement',
    module: '4 module',
    rate: '4.5 (20000)',
    tipe: 'Free'
  },
]

const akademi = () => {
  return (
    <SafeAreaView style={tw`mt-10 mb-10 mx-5`}>

      <Text style={tw`text-white text-2xl font-bold mb-5`}>📖 Akademi</Text>
      <ScrollView>
        {akademiData.map((item, index) => (
          <View key={index} style={tw`rounded-xl mb-4 flex-row gap-4`}>
            <View>
              <Image
                source={item.image}
                style={tw`h-30 w-40 rounded-lg`}
              />
              <Text style={tw`absolute bottom-2 right-2 ${item.tipe === 'Free' ? 'bg-red-500/80' : 'bg-yellow-500/80'} px-2 py-1 rounded-xl text-white text-xs`}>{item.tipe}</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-gray-300 text-sm`}>{item.category}</Text>
              <Text style={tw`text-white text-md`}>{item.title}</Text>
              <Text style={tw`text-gray-400 text-sm`}>{item.module}</Text>
              <Text style={tw`text-gray-400 text-sm mt-5`}>⭐ {item.rate}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default akademi