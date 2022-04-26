import { ScrollView, StyleSheet, ActivityIndicator  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import DetailsItem from './details/DetailsItem';
import { URL_PATH } from '../config/main'
import { useEffect, useState, useLayoutEffect } from "react";
import { getData } from '../config/main';
import { View } from '../components/Themed';


export default function DetailScreen({ route, navigation }: RootTabScreenProps<'TabDetails'>) {

// const urlToPopular: any = URL_PATH + '/categories/1/' + typeContent + '?page%5Blimit%5D=20';
// https://kitsu.io/api/edge/manga/1

const urlToItem: any = URL_PATH + '/'+route.params.typeSearch+'/' + route.params.typeContent;

    const [itemget, seItemget] = useState([]);
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
      (async () => {
        await loadDataItem();
        await loadDataEpisodes();
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

    const loadDataEpisodes = async () => {
      try {
        const response = await getData(urlToItem + '/episodes?page%5Blimit%5D=20');
        setEpisodes(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (!itemget.data) {
      return (
        <View>
            <ActivityIndicator style={ StyleSheet.create({flex: 1, top: 150}) } />
        </View>
      );
    }



    return (
      <ScrollView>
          <DetailsItem props={itemget.data} episodes={episodes.data} />
      </ScrollView>
    );


}
