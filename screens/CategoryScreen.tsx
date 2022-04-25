
import { ScrollView, Text  } from 'react-native';
import React from "react";
import { RootTabScreenProps } from '../types';
import ListCategory from './category/ListCategory';


export default function CategoryScreen({ navigation }: RootTabScreenProps<'TabCategory'>) {

  return (
        <ScrollView>
            <ListCategory />
        </ScrollView>
  );

}