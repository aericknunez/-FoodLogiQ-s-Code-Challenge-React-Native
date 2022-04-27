import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Card } from 'react-native-paper'
import Screen from '../Screen'
import Colors from '../../constants/Colors'
import { Text, useThemeColor } from '../../components/Themed'




export default function Related() {

      const renderCard = ({ item }: MeditationItem) => {
        return (
          <Card
            style={styles.card}
            // onPress={() =>
            //   navigation.navigate('PlayScreen', {
            //     id: item.id,
            //   })
            // }
          >
            <Card.Cover style={styles.cardImage} source={{ uri: 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }}  />
            <Card.Title
              titleStyle={[styles.cardTitle, { color: 'black' }]}
              subtitleStyle={styles.cardSubtitle}
              title={item.title}
              subtitle={item.subtitle}
            />
          </Card>
        )
      }

  return (
    <Screen scroll>
    <Text style={styles.title}>RELATED</Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={true}
        data={null}
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
      height: 250,
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
  