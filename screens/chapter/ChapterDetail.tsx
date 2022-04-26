import * as React from 'react'
import { Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native'

import { Text, View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';
import ChapterNum from './ChapterNum';




export default function ChapterDetail(chapter:any) {

  return (
    <View >

        <View style={[tw`h-52 flex shadow-lg rounded-t-lg bg-white overflow-hidden`]}>
        <Image source={{ uri: chapter.chapter.attributes.thumbnail ? chapter.chapter.attributes.thumbnail.original : 'https://media.kitsu.io/anime/cover_images/7991/original.png' }} style={[tw`absolute w-full h-full mb-4`]} />
        </View>
        <View style={[tw`shadow-lg rounded-b-lg bg-white overflow-hidden`]}>
        <View style={[tw`pl-4 bg-white`]}>
                <Text style={[tw`text-gray-800 font-medium text-base mb-0`]}>
                     { chapter.chapter.attributes.canonicalTitle ? chapter.chapter.attributes.canonicalTitle : 'UnKnow' }
                </Text>
            </View>
            <View style={[tw`bg-white`]}>
              <Text style={[tw`pl-4 text-gray-400 text-xs`]}>
              { chapter.chapter.attributes.description ? chapter.chapter.attributes.description : 'UnKnow' }
              </Text>
            </View>
        </View>


        <ChapterNum chapter={chapter.chapter.attributes.number} day={chapter.chapter.attributes.airdate} />


    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
