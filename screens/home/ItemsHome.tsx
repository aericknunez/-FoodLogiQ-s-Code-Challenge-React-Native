import * as React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import {  Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Screen from '../Screen'
import { Text, View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';

import { useNavigation } from '@react-navigation/native';

import { home } from '../../config/interfaces';
import { SearchParamList } from '../../types'

  
  
export default function ItemHome(props: home): JSX.Element {
    
    const navigation = useNavigation<SearchParamList, 'TabSearch'>(); 
    const type = props.name.toLowerCase() ;
        return (
            
            <View style={styles.container}>
                <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('TabSearch', {
                                    typeContent: type,
                                })
                            }
                >
                <View style={[tw`shadow-lg rounded-2xl bg-white p-4 w-72`]}>
                    <View style={[tw`justify-center items-center`]}>
                        <View style={[tw`flex-shrink-0  h-24 w-72`]}>
                            <View style={[tw`relative mt-1`]}>
                            <Image source={{ uri: props.img }} style={[tw`mx-auto  h-full w-full`]} />
                            </View>
                        </View>
                        <View style={[tw`flex flex-col`]}>
                            <Text style={[tw`text-gray-600 text-lg font-medium font-bold`]}>
                                {props.name}
                            </Text>
                        </View>
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
  
