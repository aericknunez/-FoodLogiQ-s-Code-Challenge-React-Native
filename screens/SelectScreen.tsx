import { StyleSheet, SafeAreaView  } from 'react-native';
import React from 'react';
import { RootTabScreenProps } from '../types';
import ItemScroll from './search/ItemsScroll';


export default function SelectScreen({ route, navigation }: RootTabScreenProps<'TabHome'>) {

  const typeContent:undefined = route.params.typeContent;

  return (
    <SafeAreaView style={styles.container}>
        <ItemScroll typeContent={typeContent} />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
