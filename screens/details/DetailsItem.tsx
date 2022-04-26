import * as React from 'react'
import { Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import { Text, View } from '../../components/Themed'
import Rating from './Rating'
import Related from './Related'
import tw from 'tailwind-react-native-classnames';
import YotubeButtom from './YoutubeButtom';
import CharterScroll from './CharterScroll';

export default function DetailsItem(props:any) {

  return (
    <View >

        <View style={[tw`h-52 flex shadow-lg rounded-t-lg bg-white overflow-hidden`]}>
        <Image source={{ uri: props.props.attributes.coverImage ? props.props.attributes.coverImage.tiny : 'https://media.kitsu.io/anime/cover_images/7991/original.png' }} style={[tw`absolute w-full h-full mb-4`]} />
        </View>
        <View style={[tw`shadow-lg rounded-b-lg bg-white overflow-hidden`]}>
        <View style={[tw`pl-4 bg-white`]}>
                <Text style={[tw`text-gray-800 font-medium text-base mb-0`]}>
                     { props.props.attributes.canonicalTitle ? props.props.attributes.canonicalTitle : 'UnKnow' }
                </Text>
            </View>
            <View style={[tw`bg-white`]}>
              <Text style={[tw`pl-4 text-gray-400 text-xs`]}>
              { props.props.attributes.description ? props.props.attributes.description : 'UnKnow' }
              </Text>
            </View>
            <View style={[tw`content-end	my-4 ml-72 bg-white`]}>
                <Text style={[tw`text-indigo-500 text-xl text-lg`]}>
                    { props.props.attributes.episodeCount ? props.props.attributes.episodeCount  : '0' } Eps
                </Text>
            </View>
        </View>



        <Rating score={props.props.attributes.averageRating} rating={props.props.attributes.ratingRank} popularity={props.props.attributes.popularityRank} />



        {props.props.attributes.youtubeVideoId ? <YotubeButtom url={props.props.attributes.youtubeVideoId} /> : <Text></Text>}
    
        { props.props.attributes.episodeCount ? <CharterScroll chapters={props.episodes} /> : <Text></Text>}
        
      
        <View style={styles.container}>
        <Related />
        </View>


    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
