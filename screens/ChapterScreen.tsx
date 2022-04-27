import { StyleSheet, SafeAreaView, Text, View  } from 'react-native';
import React from 'react';
import { RootTabScreenProps } from '../types';
import ChapterDetail from './chapter/ChapterDetail';
import { getData } from '../config/main';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { URL_PATH } from '../config/main';
import { Loader } from '../components/Accesories';



export default function ChapterScreen({ route, navigation }: RootTabScreenProps<'TabChapter'>) {

 
  const urlToItem: any = URL_PATH + '/episodes/' + route.params.charter;

  const [itemget, seItemget] = useState([]);

  useEffect(() => {
    (async () => {
      await loadDataItem();
    })();
  }, []);


  const loadDataItem = async () => {
    try {
      const response = await getData(urlToItem);
      seItemget(response);
    } catch (error) {
      console.error(error);
    }
  };




  if (!itemget.data) {
    return (<Loader />);
  }


  return (
    <SafeAreaView style={styles.container}>
        <ChapterDetail chapter={itemget.data} />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
