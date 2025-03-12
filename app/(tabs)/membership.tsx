import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import Btn_utama from '@/components/Btn_utama';

const Membership = () => {
  return (
    <SafeAreaView style={tw`flex-1 mt-3 bg-black`}>
      <TouchableOpacity style={tw`absolute top-5 right-4 z-10`}>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
      <View style={tw`flex-row justify-between  items-center mb-6 bg-black py-12 px-6`}>
        <View style={tw`flex-1  pr-4`}>
          <Text style={tw`text-white text-2xl text-center font-bold mb-2`}>Start Your 7-Free Trial Today!</Text>
          <Text style={tw`text-gray-400 text-center text-sm`}>Buka Fitur Eksklusif dengan Techxperience Membership</Text>
        </View>
      </View>
      <View style={tw`flex-1 bg-gray-100 rounded-t-3xl`}>
        <ScrollView contentContainerStyle={tw`p-4`}>
          <View style={tw` p-4 mb-6 d rounded-lg`}>
            <Text style={tw`text-black text-center font-bold text-lg mb-4`}>Kamu akan mendapatkan:</Text>
            {[
              { icon: "cloud-outline", color: "#8B5CF6", text: "Akses ke Semua Modul Pembelajaran" },
              { icon: "people-outline", color: "#3B82F6", text: "Jalur Pembelajaran yang dirancang oleh mentor" },
              { icon: "person-outline", color: "#F59E0B", text: "Mentoring sebulan 4x pertemuan" },
              { icon: "ribbon-outline", color: "#EC4899", text: "Mendapatkan sertifikat dan keuntungan lainnya" }
            ].map((item, index) => (
              <View key={index} style={tw`flex-row items-center ${index !== 3 ? 'mb-3' : ''}`}>
                <Ionicons name={item.icon} size={24} color={item.color} />
                <Text style={tw`text-black ml-3 text-sm`}>{item.text}</Text>
              </View>
            ))}
          </View>

          {[
            {
              duration: "12 Bulan",
              price: "Rp 999.000,00",
              weekly: "Rp 12.475,00/minggu",
              savings: "Save 42%"
            },
            {
              duration: "4 Bulan",
              price: "Rp 260.000,00",
              weekly: "Rp 16.260,00/minggu"
            },
            {
              duration: "1 Bulan",
              price: "Rp 85.000,00",
              weekly: "Rp 21.250,00/minggu"
            }
          ].map((plan, index) => (
            <TouchableOpacity key={index} style={tw`${index === 0 ? 'border-2 border-blue-500 bg-white shadow-md' : 'bg-white'} rounded-lg p-4 mb-3 relative`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-black font-bold text-lg`}>{plan.duration}</Text>
                {index === 0 && (
                  <View style={tw`absolute top--4 right--4 bg-blue-500 px-2 py-1 rounded-tr-md rounded-bl-lg`}>
                    <Text style={tw`text-white text-xs font-bold`}>Save 42%</Text>
                  </View>
                )}
              </View>
              <Text style={tw`text-black text-xl font-bold mt-1`}>{plan.price}</Text>
              <Text style={tw`text-gray-500 text-sm`}>{plan.weekly}</Text>
            </TouchableOpacity>
          ))}
        <Btn_utama onPress={() => {}} title="Ikuti Kelas" />

          <View style={tw`flex-row justify-center gap-4`}>
            <Text style={tw`text-gray-500 text-sm`}>Terms & Conditions</Text>
            <Text style={tw`text-gray-500 text-sm`}>Privacy Policy</Text>
          </View>
        </ScrollView>      </View>
    </SafeAreaView>
  );
};

export default Membership;