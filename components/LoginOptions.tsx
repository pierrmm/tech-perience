import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import tw from 'twrnc'

const LoginOptions = () => {
  return (
    <View>
      <Text style={tw`text-white text-lg text-center mb-5`}>Atau mau masuk melalui?</Text>
                <View style={tw`justify-center gap-5 space-x-4`}>
                    <TouchableOpacity style={tw`bg-neutral-100 items-center justify-center py-3 px-6 rounded-lg flex-row items-center`}>
                        <Ionicons
                            name="logo-google"
                            size={24}
                            color="#DB4437"
                        />
                        <Text style={tw`text-gray-800 text-lg ml-2`}>Masuk dengan Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-neutral-100 items-center justify-center py-3 px-6 rounded-lg flex-row items-center`}>
                        <Ionicons
                            name="logo-facebook"
                            size={24}
                            color="#4267B2"
                        />
                        <Text style={tw`text-gray-800 text-lg ml-2`}>Masuk dengan Facebook</Text>
                    </TouchableOpacity>
                </View>
    </View>
  )
}

export default LoginOptions