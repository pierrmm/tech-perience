import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { create } from 'twrnc';

import CardHome from '@/components/CardHome';
import CardPnjg from '@/components/CardPnjg';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ExperienceCardRow from '@/components/ExperienceCard';
import Button_home from '@/components/Button_home';

const tw = create();

export default function HomeScreen() {
  const buttons = [
    { icon: "book-outline", title: "Modul Akademi", color: "blue-500" },
    { icon: "people-outline", title: "Community", color: "blue-500" },
    { icon: "calendar-outline", title: "Event Live", color: "blue-500" },
    { icon: "chatbubbles-outline", title: "Grup Diskusi", color: "blue-500" },
  ]
  const cardItems = [
    {
      image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
      title: 'Fundamental Belajar Design',
      description: 'Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini',
      
    },
    {
      image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
      title: 'Fundamental Belajar MySql',
      description: 'Belajar database tu ga langsung ngoding loh, ada dasar dasarnya, belajar disini',

    },
    {
      image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
      title: 'Fundamental Belajar Jaringan',
      description: 'Belajar jaringan tu ga langsung nyambungin kabel aja dasar dasarnya, belajar disini',

    },
    {
      image: require('../../assets/images/2023-blogpost-frontend-solution 1.png'),
      title: 'Mahir menjadi frontend',
      description: 'Kalo kamu udah jago fundamentalnya yuk kita masuk ke spesialisnya menjadi frontend dev',

    },
  ]
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`flex-row justify-between items-center px-4 py-2`}>
          <Image
            source={require('../../assets/images/1. Techxperience - bg dark 1.png')}
            style={tw`w-40 h-10`}
            resizeMode="contain"
          />
          <View style={tw`flex-row`}>
            <TouchableOpacity style={tw`mr-4`}>
              <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mr-4`}>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="person-circle-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`px-4 py-2`}>
          <Image
            source={require('../../assets/images/9ecdbd37-3dd9-47f3-a47c-ae2fa0eeea22 1.png')}
            style={tw`w-full h-52 rounded-lg`}
            resizeMode="cover"
          />
        </View>
        <View style={tw`flex-1 bg-black p-4`}>
          <Button_home buttons={buttons} />
        </View>
        <View style={tw`p-4`}>
          <CardHome items={cardItems} title="Mau belajar apa ni" />
        </View>
       <View style={tw`mb-6`}>
            <View style={tw`flex-row justify-between items-center mb-4`}>
                <View style={tw`flex-row items-center`}>
                    <IconSymbol name="calendar" size={24} color="#FFFFFF" />
                    <Text style={tw`text-white font-bold text-lg ml-2`}>📆 Ikuti Event Terdekat</Text>
                </View>
                <TouchableOpacity>
                    <Text style={tw`text-gray-200`}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[
                    "Hackaton",
                    "Design web",
                    "Workshop",
                    "Lomba",
                    "Webinar",
                ].map((item, index) => (
                    <TouchableOpacity key={index} style={tw`mr-4 bg-black px-4 py-2 rounded-lg border-2 border-white`}>
                        <Text style={tw`text-white`}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row `}>
            <CardPnjg />
            <CardPnjg />
            <CardPnjg />
            <CardPnjg />
          </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row `}>
            <CardPnjg />
            <CardPnjg />
            <CardPnjg />
            <CardPnjg />
          </View>
        </ScrollView>
        <ExperienceCardRow />
      </ScrollView>
    </SafeAreaView>
  );
}