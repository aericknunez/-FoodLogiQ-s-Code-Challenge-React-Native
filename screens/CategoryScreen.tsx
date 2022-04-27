
import { View, TextInput, FlatList, SafeAreaView  } from 'react-native';
import React, { useState, useEffect } from "react";
import { RootTabScreenProps } from '../types';
import { getData } from '../config/main';
import { URL_PATH } from '../config/main';
import CardItem from './search/CardItem';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE } from '../config/main';


export default function CategoryScreen({ navigation }: RootTabScreenProps<'TabCategory'>) {


  const [elements, setElements] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [urlsearch, setUrlsearch] = useState(URL_PATH + "/anime");


  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, []);


  const loadData = async () => {
    try {
      const response = await getData(urlsearch);
      // setElements(response);
      setElements([...elements, ...response.data]);
      setUrlsearch(response.links.next);
      console.log(response.links.next)
    } catch (error) {
      console.error(error);
    }
  };



// / Savign data on local storage
  // const storeData = async (value:any) => {
  //   try {
  //     await AsyncStorage.setItem('STORAGE', value)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }


  return (
    <View>
    <View style={[tw`flex justify-center`]}>
              <View style={[tw`mb-3`]}>
                {/* <TextInput
                  style={[tw`
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white
                  border border-solid border-gray-300
                  rounded
                  m-0`]}
                  placeholder="Search a Element"
                  placeholderTextColor="#858585"
                  onChangeText={(text) => {
                    setUrlsearch(URL_PATH + "/anime?filter[text]="+ text)
                  }}
                /> */}
              </View>
          </View>
          <SafeAreaView>
              {/* <CardItem  element={elements} /> */}
              <FlatList
                data={elements}
                renderItem={CardItem}
                keyExtractor={({ id }) => id}
                onEndReached={loadData}
                onEndReachedThreshold={0.1}
              />
          </SafeAreaView>
    </View>
  );

}
