import { ScrollView  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import DetailsItem from './details/DetailsItem';
import { URL_PATH } from '../config/main'
import { useEffect, useState, useLayoutEffect } from "react";
import { getData } from '../config/main';
import { View } from '../components/Themed';
import { Loader } from '../components/Accesories';


export default function DetailScreen({ route, navigation }: RootTabScreenProps<'TabDetails'>) {

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
      return (<Loader />);
    }


    return (
      <ScrollView>
          <DetailsItem props={itemget.data} episodes={episodes.data} />
      </ScrollView>
    );


}
