import * as React from 'react'
import { Image, StyleSheet } from 'react-native'

import Screen from '../Screen'
import { Text, View } from '../../components/Themed'
import { LoadingScreen } from '../../components/LoadingScreen'
import FavouriteButton from '../../components/FavouriteButton'
import AnotherEpisodes from './AnotherEpisodes'
import Rating from './Rating'
import Related from './Related'
import tw from 'tailwind-react-native-classnames';

export default function DetailsItem() {

  return (
    <View >

        <View style={[tw`h-52 flex shadow-lg rounded-t-lg bg-white overflow-hidden`]}>
        <Image source={{ uri: 'https://media.kitsu.io/anime/cover_images/7991/original.png' }} style={[tw`absolute w-full h-full mb-4`]} />
        {/* <Image source={{ uri: 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} style={[tw`border-2 rounded-lg -right-72 -bottom-36 h-24 w-20 mb-4`]} /> */}
        </View>
        <View style={[tw`shadow-lg rounded-b-lg bg-white overflow-hidden`]}>
        <View style={[tw`pl-4`]}>
                <Text style={[tw`text-gray-800 font-medium text-base mb-0`]}>
                      Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!: Motenaishi, Nazomeite Miru
                </Text>
            </View>
            <View>
              <Text style={[tw`pl-4 text-gray-400 text-xs`]}>
                The 13th episode of the TV anime bundled with the special limited first edition of the 7th manga volume.
              </Text>
              <Text style={[tw`text-indigo-500 text-xl text-xs -right-72`]}>
                    11 Eps
                </Text>
            </View>
        </View>



        <Rating />

        <View style={[tw`mx-3 mb-3`]}>
        <Text style={[tw`mt-3 text-base font-bold`]}>Episodios</Text>
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        <AnotherEpisodes />
        </View>

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
