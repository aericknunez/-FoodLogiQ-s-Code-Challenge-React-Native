import * as React from 'react'
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native'
import {  Avatar, Button, Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper'
import Screen from '../Screen'
import Colors from '../../constants/Colors'
import { Text, useThemeColor } from '../../components/Themed'
import { useEffect, useState } from "react";
import { URL_PATH } from '../../config/main';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../../config/main'
import { Loader } from '../../components/Accesories'


export default function ItemCard({ typeContent }: any) {

  const navigation = useNavigation<SearchParamList, 'TabDetails'>(); 

  const urlToPopular: any = URL_PATH + '/categories/1/' + typeContent + '?page%5Blimit%5D=20';
  const urlToTreding: any = URL_PATH + '/trending/' + typeContent;

  const [popular, setPopular] = useState([]);
  const [treding, setTreding] = useState([]);


  useEffect(() => {
    (async () => {
      await loadDataItem();
      await loadTrending();
    })();
  }, []);


  const loadDataItem = async () => {
    try {
      const response = await getData(urlToPopular);
      setPopular(response);
    } catch (error) {
      console.error(error);
    }
  };

  const loadTrending = async () => {
    try {
      const response = await getData(urlToTreding);
      setTreding(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!popular.data && !treding.data) {
    return ( <Loader /> );
  }

  
    const renderPopularCard = ({ item }: any) => {

        return (
            
          <Card
            elevation={1}
            style={styles.card}
            onPress={() =>
              navigation.navigate('TabDetails', {
                typeContent: item.id,
                typeSearch: typeContent,
              })
            }
          >
            <Card.Cover style={[styles.cardImage, styles.popularImage]} source={{ uri: item.attributes.coverImage ? item.attributes.coverImage.tiny : 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} />
            <Card.Title
              titleStyle={[styles.cardTitle, { color: 'black' }]}
              subtitleStyle={styles.cardSubtitle}
              title={item.attributes.canonicalTitle}
              subtitle={item.attributes.description}
            />
          </Card>

        )
      }


      const renderCard = ({ item }: any) => {

        return (
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate('TabDetails', {
                typeContent: item.id,
                typeSearch: typeContent,
              })
            }
          >
            <Card.Cover style={styles.cardImage} source={{ uri: item.attributes.coverImage ? item.attributes.coverImage.tiny : 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }}  />
            <Card.Title
              titleStyle={[styles.cardTitle, { color: 'black' }]}
              subtitleStyle={styles.cardSubtitle}
              title={item.attributes.canonicalTitle}
              subtitle={item.attributes.description}
            />
          </Card>
        )
      }

      // console.log(popular.data)
      // console.log(treding.data)
  return (
    <Screen scroll>
      <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AllScreen', {
                          typeContent: typeContent,
                      })
                  }
      >
          <Text style={styles.title}>SEE THE MOST POPULAR</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popular.data}
        renderItem={renderPopularCard}
        keyExtractor={({ id }) => id}
      />

      <TouchableOpacity 
                    onPress={() =>
                      navigation.navigate('AllScreen', {
                          typeContent: typeContent,
                      })
                  }
      >
        
       <Text style={styles.title}>HIGHES RATED</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={true}
        data={treding.data}
        renderItem={renderCard}
        keyExtractor={({ id }) => id}
      />

    </Screen>
  )



}




const styles = StyleSheet.create({
    card: {
      width: 170,
      marginRight: 10,
    },
    cardTitle: {
      fontSize: 16,
    },
    cardImage: {
      height: 135,
    },
    popularImage: {
      height: 225,
    },
    cardContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    cardSubtitle: {
      color: Colors.light.gray800,
      fontSize: 14,
    },
    cardParagraph: {
      color: Colors.light.purple900,
      fontWeight: '600',
    },
    downloadButton: {
      position: 'relative',
      top: -6,
    },
    cards: {
      marginBottom: 30,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  })
  