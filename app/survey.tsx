import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { create } from 'twrnc';
import { useRouter } from 'expo-router';

const tw = create();

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useRouter();
  const options = [
    'Co-Founders',
    'Instagram',
    'Tiktok',
    'Youtube',
    'Website',
    'Lainnya'
  ];
  return (
   <SafeAreaView style={tw`flex-1 bg-black`}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={tw`flex-1 px-4`}>
        <View style={tw`flex-1`}>
          <Text style={tw`text-white text-lg mb-6 text-center mt-10`}>
            Bagaimana kamu tahu tentang Techxperience?
          </Text>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={tw`bg-[#1C1C1E] mb-4 p-4 rounded-lg ${
                selectedOption === option ? 'border-2 border-[#0086FF]' : ''
              }`}
              onPress={() => setSelectedOption(option)}
            >
              <View style={tw`flex-row items-center`}>
                <View
                  style={tw`w-5 h-5 rounded-full border border-gray-500 mr-3 ${
                    selectedOption === option ? 'bg-[#0086FF]' : ''
                  }`}
                />
                <Text style={tw`text-white text-lg`}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={tw`bg-[#0086FF] py-3 rounded-lg mb-6`}
          onPress={() => navigation.push('/(tabs)/home')}
        >
          <Text style={tw`text-white text-lg text-center`}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>    );
};

export default Survey;