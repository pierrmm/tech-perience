import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { create } from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const tw = create();

const SignUp = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useRouter();
    return (
        <SafeAreaView style={tw`flex-1 p-5 bg-black`}>
            <StatusBar style="light" />
            <View style={tw`flex-1 px-4 justify-center`}>
                <View>
                  <Image 
                    source={require('../../assets/images/1. Techxperience - bg dark 1.png')}
                    style={tw`w-40 h-20`}
                    resizeMode="contain"
                  />
                </View>   
                <View style={tw`mb-4`}>
                    <TextInput
                        style={tw`bg-black border-2 border-white text-white py-3 px-5 rounded-xl pr-12 text-lg`}
                        placeholder="Masukan Nama Lengkap"
                        placeholderTextColor="#EBEDF0"
                        value={email}
                        onChangeText={setNama}
                        keyboardType="default"                    />
                </View>         
                   <View style={tw`mb-4`}>
                    <TextInput
                        style={tw`bg-black border-2 border-white text-white py-3 px-5 rounded-xl pr-12 text-lg`}
                        placeholder="Masukan Email"
                        placeholderTextColor="#EBEDF0"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                  <View style={tw`mb-4 relative`}>
                      <TextInput
                          style={tw`bg-black border-2 border-white text-white py-3 px-5 rounded-xl pr-12 text-lg`}
                          placeholder="Masukan Password"
                          placeholderTextColor="#EBEDF0"
                          secureTextEntry={!showPassword}
                          value={password}
                          onChangeText={setPassword}
                      />
                      <TouchableOpacity
                          style={tw`absolute right-4 top-4`}
                          onPress={() => setShowPassword(!showPassword)}
                      >
                          <Ionicons
                              name={showPassword ? 'eye-off' : 'eye'}
                              size={26}
                              color="#EBEDF0"
                          />
                      </TouchableOpacity>
                  </View>
                  <View style={tw`mb-4 relative`}>
                      <TextInput
                          style={tw`bg-black border-2 border-white text-white py-3 px-5 rounded-xl pr-12 text-lg`}
                          placeholder="Konfirmasi Password"
                          placeholderTextColor="#EBEDF0"
                          secureTextEntry={!showPassword2}
                          value={password}
                          onChangeText={setPassword}
                      />
                      <TouchableOpacity
                          style={tw`absolute right-4 top-4`}
                          onPress={() => setShowPassword2(!showPassword2)}
                      >
                          <Ionicons
                              name={showPassword2 ? 'eye-off' : 'eye'}
                              size={26}
                              color="#EBEDF0"
                          />
                      </TouchableOpacity>
                  </View>

                <View style={tw`mb-4 flex-row justify-between`}>
                    <View style={tw`flex-row items-center mb-2`}>
                        <TouchableOpacity 
                            style={tw`flex-row items-center`}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <Ionicons
                                name={rememberMe ? 'checkbox' : 'square-outline'}
                                size={24}
                                color="#EBEDF0"
                            />
                            <Text style={tw`text-white ml-2`}>Ingat aku ya</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={tw`text-[#2D53FF] text-md mt-1 text-right`}>Lupa Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={tw`bg-[#0086FF] py-4 rounded-lg mb-1`} onPress={() => navigation.push('/survey')}>
                    <Text style={tw`text-white text-center text-lg`}>Masuk</Text>
                </TouchableOpacity>

                <View style={tw`flex-row justify-center mb-15`}>
                    <Text style={tw`text-white text-lg`}>Lah udah punya akun? </Text>
                    <TouchableOpacity onPress={() => navigation.push('/auth/signin')}>
                        <Text style={tw`text-[#0086FF] text-lg font-bold`}>Masuk Aja! </Text>
                    </TouchableOpacity>
                </View>

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
        </SafeAreaView>
    );
};

export default SignUp;