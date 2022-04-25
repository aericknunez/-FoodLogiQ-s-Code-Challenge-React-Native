
import { ScrollView  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import DetailsItem from './details/DetailsItem';



export default function DetailScreen({ navigation }: RootTabScreenProps<'TabDetails'>) {

  return (
        <ScrollView>
          <DetailsItem />
        </ScrollView>
  );

}