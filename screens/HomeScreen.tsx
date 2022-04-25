import { StyleSheet, SafeAreaView, Text  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import ItemHome from './home/ItemsHome';


export default function HomeScreen({ navigation }: RootTabScreenProps<'TabHome'>) {
  return (
    <SafeAreaView style={styles.container}>
        <ItemHome name="Anime" img="https://media.kitsu.io/anime/cover_images/4/tiny.jpg" url="" />
        <ItemHome name="Manga" img="https://media.kitsu.io/anime/cover_images/8138/tiny.jpg" url="" />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
