import { StyleSheet, SafeAreaView, Text  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import ItemScroll from './home/ItemsScroll';


export default function HomeScreen({ navigation }: RootTabScreenProps<'TabHome'>) {


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
