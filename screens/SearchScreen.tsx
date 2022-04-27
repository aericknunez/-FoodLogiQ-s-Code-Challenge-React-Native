import { View, TextInput, FlatList, SafeAreaView, Text, TouchableOpacity  } from 'react-native';
import React, { useState, useEffect } from "react";
import { RootTabScreenProps } from '../types';
import { getData } from '../config/main';
import { URL_PATH } from '../config/main';
import CardItem from './search/CardItem';
import tw from 'tailwind-react-native-classnames';
import { Loader } from '../components/Accesories';


export default function SearchScreen({ navigation  }: RootTabScreenProps<'TabSearch'>) {


  const [elements, setElements] = useState([]);
  const [refreshing, setRefreshing] = useState(false);


  const loadData = async (url) => {
    try {
      setRefreshing(true)
      const response = await getData(url);
      setElements(response);
      setRefreshing(false)
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
                    loadData(URL_PATH + "/anime?filter[text]="+ text)
                  }}
                />
        </View>
        </View>
    </View>
          <View>
            <FlatList
              data={elements.data}
              initialNumToRender={4}
              renderItem={CardItem}
              keyExtractor={item => item.id}
              onEndReachedThreshold={0}
            />
          </View>
    </View>
  );
}
