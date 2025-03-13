import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import Btn_utama from '@/components/Btn_utama';

const DetailsScreen = () => {
  const modules = [
    {
      title: 'Fundamentals for Programmer',
      duration: '30 minutes',
      lessons: [
        { title: 'Lesson 1 - Identifying the Need: Market Research Essentials', type: 'Video' },
        { title: 'Lesson 2 - Building a Solid Business Model Canvas', type: 'Video' },
        { title: 'Lesson 3', type: 'Attachment' },
        { title: 'Lesson 4', type: 'Quiz' },
      ],
    },
    // Add more modules as needed
  ];
  const navigation = useRouter();
  const screenWidth = Dimensions.get('window').width;
  const videoHeight = screenWidth * (9 / 16); // 16:9 aspect ratio
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView>
        <View style={tw`p-4`}>
          <View style={tw`flex-row items-center mb-4`}>
            <TouchableOpacity onPress={() => navigation.back()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={tw`text-white text-2xl font-bold ml-2`}>Details</Text>
          </View>

          <View style={tw`mb-4`}>
            <Video
              source={{ uri: 'https://cdn.discordapp.com/attachments/831786625485897738/1308262783548129443/APT_x_Kewer-Kewer_Full_Version.mov?ex=67d247a9&is=67d0f629&hm=7cf26d6054363d7c50f1b9ebbb3d4371900051ec4cd711882b94fd20248dbca0&' }}
              style={{
                width: screenWidth - 32,
                height: videoHeight,
                borderRadius: 8,
              }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
            />
          </View>


          <Text style={tw`text-blue-500 text-xl font-bold mb-2`}>Mahir Menjadi Frontend Dev</Text>
          <Text style={tw`text-gray-400 text-sm mb-4`}>
            Bergabung dengan kelas mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami itu.
          </Text>

          <View style={tw`flex-row items-center mb-4`}>

            <Text style={tw`text-gray-400 text-xs ml-1`}>⭐ 4.5 (673)  •  4 Module  •  Programmer</Text>
          </View>

          <View style={tw`bg-gray-200 rounded-lg p-4 mb-4`}>
            {modules.map((module, index) => (
              <View key={index} style={tw`mb-4`}>
                <View style={tw`flex-row items-center justify-between mb-2`}>
                  <View>
                    <Text style={tw`text-black text-lg font-bold`}>Module {index + 1}</Text>
                    <Text style={tw`text-black text-base font-semibold`}>{module.title}</Text>
                    <Text style={tw`text-gray-600 text-sm`}>{module.duration}</Text>
                  </View>
                  <View style={tw`bg-green-500 rounded-full p-1`}>
                    <Ionicons name="checkmark" size={16} color="white" />
                  </View>
                </View>
                {module.lessons.map((lesson, lessonIndex) => (
                  <View key={lessonIndex} style={tw`flex-row items-center mb-2`}>
                    <View style={tw`w-8 h-8 bg-gray-500 rounded-full mr-3 items-center justify-center`}>
                      {/* <Ionicons 
                        name={lesson.type === 'Video' ? 'play' : lesson.type === 'Attachment' ? 'document-text' : 'help-circle'} 
                        size={16} 
                        color="white" 
                      /> */}
                    </View>
                    <View style={tw`flex-1`}>
                      <Text style={tw`text-black text-sm`}>{lesson.title}</Text>
                      <Text style={tw`text-gray-600 text-xs`}>{lesson.type}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
            <View style={tw`p-4`}>
        <Btn_utama onPress={() => { }} title="Ikuti Kelas" />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;