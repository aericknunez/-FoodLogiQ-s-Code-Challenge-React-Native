import { View, TextInput, FlatList, SafeAreaView, Text, TouchableOpacity  } from 'react-native';
import React, { useState, useEffect } from "react";
import { RootTabScreenProps } from '../types';
import { getData } from '../config/main';
import { URL_PATH } from '../config/main';
import CardItem from './search/CardItem';
import tw from 'tailwind-react-native-classnames';


export default function SearchScreen({ navigation  }: RootTabScreenProps<'TabSearch'>) {


  const [elements, setElements] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [urlsearch, setUrlsearch] = useState("");


  // useEffect(() => {
  //   (async () => {
  //     await loadData();
  //   })();
  // }, []);


  const loadData = async () => {
    try {
      const response = await getData(urlsearch);
      setElements(response);
      console.log(elements)
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <View>
        <View style={[tw`flex justify-center`]}>
              <View style={[tw`mb-3`]}>
              <View style={[tw`relative container flex flex-row mx-auto justify-center overflow-hidden flex w-full mb-4 mt-2 mx-2`]}>
                <TextInput
                  style={[tw`w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 `]}
                  placeholder="Search a Element"
                  placeholderTextColor="#858585"
                  onChangeText={(text) => {
                    setUrlsearch(URL_PATH + "/anime?filter[text]="+ text)
                  }}
                />
              <TouchableOpacity 
                onPress={ loadData }
              >
                <Text style={[tw`w-20 px-6 py-2.5 bg-blue-600 justify-center items-center text-white font-medium text-xs uppercase rounded shadow-md`]}>GO</Text>
              </TouchableOpacity>
        </View>
        </View>
    </View>
          <SafeAreaView>
              <FlatList
                data={elements}
                renderItem={CardItem}
                keyExtractor={({ id }) => id}
                // onEndReached={loadData}
                // onEndReachedThreshold={0.1}
                  refreshing={refreshing}
                  onRefresh={async () => {
                  setRefreshing(true);
                  await loadData();
                  setRefreshing(false);
                }}
              />
          </SafeAreaView>
    </View>
  );
}
