import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import { Text, View } from '../../components/Themed'
import Rating from './Rating'
import Related from './Related'
import tw from 'tailwind-react-native-classnames';
import CharterScroll from './CharterScroll';
import { YotubeButtom, NoYotubeButtom } from '../../components/Accesories';
import { FavoriteButtonOFF, FavoriteButtonON } from '../favorite/Options';
import { addFavorite, delFavorite, getFavorite } from '../../components/favorite';




export default function DetailsItem(props:any) {

  const [favoriteIs, setFavoriteIs] = useState(false);



  useEffect(() => {

    (async () => {
      const favorites = await getFavorite();
      const resultado = favorites.find( item => item.id === props.props.id );
      if (resultado) {
        setFavoriteIs(true);
      }
    })();
  }, []);


  function changeFavorites(datos: any): void {
    if (favoriteIs) {
      delFavorite(datos.id);
      setFavoriteIs(false);
      console.log(`Se Elimino ${datos.id}`);
      console.log(favoriteIs);
    } else {
      addFavorite(datos);
      setFavoriteIs(true);
      console.log(`Se Agrego ${datos}`);
      console.log(favoriteIs);
    }
  }


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
            <View style={[tw`flex items-center my-4 bg-white`]}>

                <TouchableOpacity onPress={()=>{changeFavorites(props.props)}}>
                  { !favoriteIs ? <FavoriteButtonON  /> : <FavoriteButtonOFF /> }
                </TouchableOpacity>

                <Text style={[tw`text-indigo-500 text-xl text-lg`]}>
                    { props.props.attributes.episodeCount ? props.props.attributes.episodeCount  : '0' } Eps
                </Text>
            </View>
        </View>



        <Rating score={props.props.attributes.averageRating} rating={props.props.attributes.ratingRank} popularity={props.props.attributes.popularityRank} />



        {props.props.attributes.youtubeVideoId ? <YotubeButtom url={props.props.attributes.youtubeVideoId} /> : <NoYotubeButtom />}
    
        { props.props.attributes.episodeCount ? <CharterScroll chapters={props.episodes} /> : null}
        
      
        <View style={styles.container}>
        {/* <Related /> */}
        </View>


    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
