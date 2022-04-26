import * as React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import {  Avatar, Button, Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper'
import Screen from '../Screen'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native';


export default function CharterScroll({ chapters }: any) {
    const navigation = useNavigation<SearchParamList, 'TabChapter'>(); 

      const renderCard = ({ item }: any) => {

        return (
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate('TabChapter', {
                charter: item.id,
              })
            }
          >
            <Card.Cover style={styles.cardImage} source={{ uri: item.attributes.thumbnail ? item.attributes.thumbnail.original : 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} />
            <Card.Title
              titleStyle={[styles.cardTitle, { color: 'black' }]}
              subtitleStyle={styles.cardSubtitle}
              title={ item.attributes.canonicalTitle ? item.attributes.canonicalTitle : 'UnKnow' }
              subtitle={ item.attributes.description ? item.attributes.description : 'No description available' }
            />
          </Card>
        )
      }

  return (
    <Screen scroll>
    <Text style={styles.title}>Chapters</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={true}
        data={chapters}
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
    cards: {
      marginBottom: 30,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  })
  