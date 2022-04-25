import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import {  Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Screen from '../Screen'
import { meditations, MeditationItem } from '../../config/meditations'
import Colors from '../../constants/Colors'
import { Text, useThemeColor } from '../../components/Themed'


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



export default function ItemCard() {

    const renderPopularCard = ({ item }: MeditationItem) => {
        return (
            
          <Card
            elevation={1}
            style={styles.card}
            // onPress={() =>
            //   navigation.navigate('PlayScreen', {
            //     id: item.id,
            //   })
            // }
          >
            <Card.Cover style={[styles.cardImage, styles.popularImage]} source={{ uri: 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} />
            <Card.Title
              titleStyle={[styles.cardTitle, { color: 'back' }]}
              subtitleStyle={styles.cardSubtitle}
              title={item.title}
              subtitle={item.subtitle}
            />
          </Card>

    //     <Card>
    //     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    //     <Card.Content>
    //       <Title>Card title</Title>
    //       <Paragraph>Card content</Paragraph>
    //     </Card.Content>
    //     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    //     <Card.Actions>
    //       <Button>Cancel</Button>
    //       <Button>Ok</Button>
    //     </Card.Actions>
    //   </Card>
        )
      }

  return (
    <Screen scroll>
      {/* <Text style={styles.title}>POPULAR</Text> */}
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meditations.popular}
        renderItem={renderPopularCard}
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
  