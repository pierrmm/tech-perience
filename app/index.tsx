import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Index = () => {
  const navigation = useRouter();
  return (
    <View style={tw`flex-1 p-5 bg-black justify-center`}>
      <View style={tw`items-center mb-5`}>
        <Image
          source={require('../assets/images/1. Techxperience - bg dark 1.png')}
          style={tw`w-82 h-82`} resizeMode="contain"
        />
      </View>
      <Text style={tw`text-2xl font-bold text-white text-center`}>Belajar Technology </Text>
      <Text style={tw`text-2xl font-bold text-white text-center mb-5`}>& Dapatkan Pengalamannya </Text>
      <Text style={tw`text-sm text-gray-400 text-center mb-7 h-32`}>
        Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.
      </Text>

      <TouchableOpacity style={tw`bg-transparent py-4 rounded-xl border-2 border-gray-400 mb-3`} onPress={() => navigation.push('/auth/signin')}>
        <Text style={tw`text-white text-base font-bold text-center`}>Mulai Belajar Sekarang</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-[#4285F4] py-4 rounded-xl`} onPress={() => navigation.push('/auth/signin')}>
        <Text style={tw`text-gray-200 text-base font-bold text-center`}>Masuk</Text>
      </TouchableOpacity>
      <Text style={tw`text-sm text-gray-400 text-center mt-1`}>
        #Dari 1 Baris Pertama, Sampai 1 Project Pertama
      </Text>
    </View>
  );
};

export default Index;