import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, FlatList, Animated } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useIsFocused } from '@react-navigation/native';
import tw from 'twrnc';

const { width, height } = Dimensions.get('window');

const Reels = () => {
  const [isLiked, setIsLiked] = useState({});
  const [likeCounts, setLikeCounts] = useState({});
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isFocused = useIsFocused();
  const videoRefs = useRef({});
  const scrollY = useRef(new Animated.Value(0)).current;

  const reelsData = [
    {
      id: '1',
      videoUri: 'https://cdn.discordapp.com/attachments/1346536173543231588/1347422110880104468/SnapTik_App_7351909625270242576-HD.mov?ex=67cfb8a1&is=67ce6721&hm=773a1c86c23aad44b80d7782207aa0339b65d5202dcae562341f4f99ebf984ae&',
      title: 'Kamu akan mendapatkan:',
      description: 'Mendapatkan sertifikat dan keuntungan lainnya',
      music: 'Music • Original Audio'
    },
    {
      id: '2',
      videoUri: 'https://cdn.discordapp.com/attachments/1210022502353469500/1274057119704023193/SnapTik_App_7306218236993867041-HD.mov?ex=67cfc9e8&is=67ce7868&hm=e8719ef8fd0e3a764c54b629c1d5ec1ad4aec1a262bc29b86b53dceda812f29f&',
      title: 'Video Kedua',
      description: 'Deskripsi video kedua',
      music: 'Music • Original Audio 2'
    },
    {
      id: '3',
      videoUri: 'https://cdn.discordapp.com/attachments/831786625485897738/1347787343750500392/shitpostnime.exe_834111722.mp4?ex=67d1b587&is=67d06407&hm=3e3a275c53055537fb9d9d1b626264e6ae1d133e6106d7a6eed330e68f8d9b9e&',
      title: 'Video Ketiga',
      description: 'Deskripsi video ketiga',
      music: 'Music • Original Audio 3'
    },
    {
      id: '4',
      videoUri: 'https://cdn.discordapp.com/attachments/831786625485897738/1333572216939479112/Snapinst.app_video_AQNSBMztrvCvX1DVbBDyx_DRgIumxjKHm077bDQexFko5i6av8rDIZg0ibMhe0a_LXtPeg4I8m0Uoj9jZYZl1hxRyHqZMTgK5Ot_Z04.mp4?ex=67d211e9&is=67d0c069&hm=13e3dc41c5fbef5604b4b3e60f12ae288d151e2ef0c4cbca8af4ee0c4419b1fd&',
      title: 'Video Keempat',
      description: 'Deskripsi video ketiga',
      music: 'Music • Original Audio 4'
    },
  ];

  useEffect(() => {
    if (!isFocused) {
      setIsPlaying(false);
      Object.values(videoRefs.current).forEach(ref => {
        if (ref) {
          ref.pauseAsync();
        }
      });
    } else {
      setIsPlaying(true);
      if (videoRefs.current[activeVideoIndex]) {
        videoRefs.current[activeVideoIndex].playAsync();
      }
    }
  }, [isFocused, activeVideoIndex]);

  const handleLike = (itemId) => {
    setIsLiked(prev => {
      const newLikeState = { ...prev, [itemId]: !prev[itemId] };
      setLikeCounts(prevCounts => ({
        ...prevCounts,
        [itemId]: (prevCounts[itemId] || 0) + (newLikeState[itemId] ? 1 : -1)
      }));
      return newLikeState;
    });
  };

  const renderItem = ({ item, index }) => {
    const inputRange = [(index - 1) * height, index * height, (index + 1) * height];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View 
        style={[
          tw`flex-1 bg-black`, 
          { 
            height,
            transform: [{ scale }],
            opacity
          }
        ]}
      >
        <Video
          ref={ref => videoRefs.current[index] = ref}
          source={{ uri: item.videoUri }}
          rate={1.0}
          volume={1.0}
          isMuted={activeVideoIndex !== index}
          resizeMode="cover"
          shouldPlay={isPlaying && activeVideoIndex === index}
          isLooping
          style={tw`absolute top-0 left-0 bottom-0 right-0`}
        />

        {/* Right side icons */}
        <Animated.View 
          style={[
            tw`absolute bottom-0 right-0 mb-10 mr-4`,
            {
              transform: [{
                translateX: scrollY.interpolate({
                  inputRange,
                  outputRange: [20, 0, 20],
                  extrapolate: 'clamp',
                })
              }]
            }
          ]}
        >
          <View style={tw`items-center mb-4`}>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Ionicons 
                name={isLiked[item.id] ? 'heart' : 'heart-outline'} 
                size={30} 
                color={isLiked[item.id] ? 'red' : 'white'} 
              />
            </TouchableOpacity>
            <Text style={tw`text-white mt-1`}>{likeCounts[item.id] || 0}</Text>
          </View>
          <TouchableOpacity style={tw`mb-4`}>
            <Ionicons name="chatbubble-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`mb-4`}>
            <Ionicons name="paper-plane-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>

        {/* Bottom text */}
        <Animated.View 
          style={[
            tw`absolute bottom-0 left-0 mb-10 ml-4`,
            {
              transform: [{
                translateX: scrollY.interpolate({
                  inputRange,
                  outputRange: [-20, 0, -20],
                  extrapolate: 'clamp',
                })
              }]
            }
          ]}
        >
          <Text style={tw`text-white text-lg font-bold mb-2`}>{item.title}</Text>
          <Text style={tw`text-white mb-2`}>{item.description}</Text>
          <Text style={tw`text-white text-sm`}>{item.music}</Text>
        </Animated.View>
      </Animated.View>
    );
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveVideoIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={tw`flex-1 bg-black`}>
      <BlurView intensity={20} style={tw`absolute top-0 left-0 right-0 z-10 pt-12 px-4`}>
        <View style={tw`flex-row items-center bg-gray-800/80 rounded-md overflow-hidden`}>
          <TextInput 
            style={tw`flex-1 text-white px-4 py-2`}
            placeholder="For You Page"
            placeholderTextColor="white"
          />
          <TouchableOpacity style={tw`px-4 py-2`}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </BlurView>  

      <Animated.FlatList
        data={reelsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate={0.9}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

export default Reels;