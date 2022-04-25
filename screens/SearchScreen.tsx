import { StyleSheet, SafeAreaView, Text  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import ItemScroll from './search/ItemsScroll';


export default function SearchScreen({ route, navigation }: RootTabScreenProps<'TabHome'>) {

  const { typeContent } = route.params;

  console.log('Route: ' + typeContent);

  return (
    <SafeAreaView style={styles.container}>
        <ItemScroll />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
