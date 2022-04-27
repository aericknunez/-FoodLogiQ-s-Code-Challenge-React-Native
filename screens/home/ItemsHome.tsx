import * as React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';

import { useNavigation } from '@react-navigation/native';

import { home } from '../../config/interfaces';
import { SearchParamList } from '../../types'
  
  
export default function ItemHome(props: home): JSX.Element {
    
    const navigation = useNavigation<SearchParamList, 'SelectScreen'>(); 
    const type = props.name.toLowerCase() ;
        return (

            <View style={[tw`mt-8 mx-4`]}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('SelectScreen', {
                            typeContent: type,
                        })
                    }
                >
                <View style={[tw`h-52 flex shadow-lg rounded-t-lg bg-white overflow-hidden`]}>
                <Image source={{ uri: props.img }} style={[tw`absolute w-full h-full mb-4`]} />
                </View>


                <View style={[tw`shadow-lg rounded-b-lg bg-white overflow-hidden`]}>
                    <View style={[tw`pl-4 bg-white`]}>
                        <Text style={[tw`text-gray-800 font-medium text-base mb-0 text-4xl text-center my-1`]}>
                                {props.name}
                        </Text>
                    </View>
                </View>
               </TouchableOpacity>

            </View>

  )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
  });
  
