import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const FeaturedNews = ({ image, title, date }) => (
  <View style={tw`mr-4 bg-gray-200 p-2 rounded-lg w-64`}>
    <Image source={image} style={tw`h-36 w-full rounded-lg`} resizeMode="cover" />
    <View style={tw`mt-2`}>
      <Text style={tw`text-[#0086FF] text-base font-bold`} numberOfLines={2}>{title}</Text>
      <Text style={tw`text-gray-400 text-xs mt-1`}>{date}</Text>
    </View>
  </View>
);

const NewsItem = ({ image, title, date }) => (
  <View style={tw`flex-row mb-4`}>
    <Image source={image} style={tw`w-24 h-16 rounded-lg mr-3`} />
    <View style={tw`flex-1 justify-between`}>
      <Text style={tw`text-[#0086FF] text-sm mb-5`} numberOfLines={2}>{title}</Text>
      <Text style={tw`text-gray-400 text-xs`}>{date}</Text>
    </View>
  </View>);

const News = () => {
  const featuredNews = [
    {
      image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
      title: 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      date: '23 Februari 2025'
    },
    {
      image: require('../../assets/images/react-logo.png'),
      title: 'React Native menjadi framework mobile terpopuler',
      date: '24 Februari 2025'
    },
    {
      image: require('../../assets/images/pengertian-fungsi-jenis-dan-contoh-perangkat-lunak-lengkap 1.png'),
      title: 'Perangkat lunak open source semakin diminati',
      date: '25 Februari 2025'
    },
    {
      image: require('../../assets/images/desain-komunikasi-visual-1024x576 1.png'),
      title: 'Desain UI/UX menjadi keterampilan yang sangat dicari',
      date: '26 Februari 2025'
    },
  ];

  const newsItems = [
    {
      image: require('../../assets/images/react-logo.png'),
      title: 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      date: '23 Februari 2025'
    },
    {
      image: require('../../assets/images/react-logo.png'),
      title: 'Inggris sebar developernya keseluruh dunia, dengan bayaran murah',
      date: '23 Februari 2025'
    },
    {
      image: require('../../assets/images/react-logo.png'),
      title: 'Inggris sebar developernya keseluruh dunia, dengan bayaran murah',
      date: '23 Februari 2025'
    },
    {
      image: require('../../assets/images/react-logo.png'),
      title: 'Inggris sebar developernya keseluruh dunia, dengan bayaran murah',
      date: '23 Februari 2025'
    },
    {
      image: require('../../assets/images/react-logo.png'),
      title: 'Inggris sebar developernya keseluruh dunia, dengan bayaran murah',
      date: '23 Februari 2025'
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <View style={tw`px-4 pt-4 pb-2`}>
        <Text style={tw`text-white text-2xl font-bold mb-4`}>News</Text>
        <View style={tw`flex-row items-center bg-[#1C1C1E] rounded-full px-4 py-2 mb-4`}>   
          <TextInput
            style={tw`flex-1 text-white ml-2 text-sm`}
            placeholder="Mau cari berita apa hari ini?"
            placeholderTextColor="#6B7280"
          />
          <Ionicons name="search" size={20} color="#6B7280" />
        </View>
      </View>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-4 mb-4`}>
          {featuredNews.map((item, index) => (
            <FeaturedNews key={`featured-${index}`} {...item} />
          ))}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {[
                            "Design web",
                            "Technologies",
                            "Goverment",
                            "Workshop",
                            "Webinar",
                        ].map((item, index) => (
                            <TouchableOpacity key={index} style={tw`mr-4 bg-black px-4 py-2 rounded-lg border-2 border-white`}>
                                <Text style={tw`text-white`}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
        <View style={tw`px-4 mt-5`}>
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;

