
import { View, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, Image, Text  } from 'react-native';
import React, { useState, useEffect, useMemo } from "react";
import { RootTabScreenProps } from '../types';
import { getData } from '../config/main';
import { URL_PATH } from '../config/main';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE } from '../config/main';
import { Loader } from '../components/Accesories';

export default function AllScreen({ route, navigation }: RootTabScreenProps<'TabAll'>) {
  
  const typeContent:undefined = route.params.typeContent;


  const [elements, setElements] = useState([]);
  const [urlsearch, setUrlsearch] = useState(URL_PATH + "/" + typeContent);
  const [isLoading, setIsLoading] = useState(false);


  // Se crea la funcion para obtener los datos de la api
  const loadData = async () => {
    try {
      setIsLoading(true);
      const response = await getData(urlsearch);
      // setElements(response);
      setElements([...elements, ...response.data]);
      setUrlsearch(response.links.next);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  /// cargar los datos

  // useEffect(() => {(async () => { await loadData(); })}, [urlsearch]);
  useEffect(() => {(async () => { await loadData() })()}, [urlsearch]);



  // buscar mas elementos
  const loadMoreItem = () => {
    // setCurrentPage(currentPage + 1);
    console.log(urlsearch)
  };


  // render loading
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


// / Savign data on local storage
  // const storeData = async (value:any) => {
  //   try {
  //     await AsyncStorage.setItem('STORAGE', value)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  const memoizedValue = useMemo(() => renderItem, [elements]);
  return (
    <View>
    <FlatList
      data={elements}
      initialNumToRender={4}
      renderItem={memoizedValue}
      keyExtractor={item => item.id}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
    />
  </View>
  );

}
