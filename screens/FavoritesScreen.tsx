import React,  { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { getFavorite } from '../components/favorite';
import { Text, View } from '../components/Themed';
import { Loader } from '../components/Accesories';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/core';



export default function FavoritesScreen() {
  const navigation = useNavigation<SearchParamList, 'SelectScreen'>(); 


  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const favorites = await getFavorite();
      setFavorites(favorites);
      setIsLoading(false);
    })();
  }, []);




  const renderLoader = () => {
    return ( isLoading ? <Loader /> : null);
  };



  // Render itemss
  const renderItem = ({ item }: any) => {
    return (
      <View>
      <TouchableOpacity
            onPress={() =>
              navigation.navigate('TabDetails', {
                typeContent: item.id,
                typeSearch: item.type,
              })
            }
      >
      <View style={[tw`shadow-lg border rounded-lg container flex flex-row mx-auto justify-center overflow-hidden mt-2 mr-3`]} >
          <View style={[tw`w-20 h-20 justify-center items-center mr-4 m-2`]}>
          <Image source={{ uri: item.attributes.posterImage ? item.attributes.posterImage.tiny : 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} style={[tw`mx-auto rounded-full h-20 w-20 `]} />
          </View>
          <View style={[tw`flex flex-row flex-1 pl-1 mt-3`]}>
              <Text style={[tw`font-medium text-base font-bold text-xl`]}>
              { item.attributes.canonicalTitle ? item.attributes.canonicalTitle : 'UnKnow' }
              </Text>
          </View>
          </View>
          </TouchableOpacity>
      </View>
)
  };
  
  return (
      <View>
      <FlatList
        data={favorites}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        onEndReachedThreshold={0}
      />
    </View>
  );

}
