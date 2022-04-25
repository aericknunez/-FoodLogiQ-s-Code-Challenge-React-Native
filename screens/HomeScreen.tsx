import { StyleSheet, SafeAreaView, Text  } from 'react-native';
import React, { useState, useEffect } from "react";
import { RootTabScreenProps } from '../types';

// import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from './home/ItemCard';


export default function HomeScreen({ navigation }: RootTabScreenProps<'TabHome'>) {


  return (
    <SafeAreaView style={styles.container}>
        <ItemCard />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
