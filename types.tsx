/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabHome: undefined;
  TabDetails: undefined;
  TabFavorites: undefined;
  TabChapter: undefined;
  AllScreen: undefined;
  Modal: { typeContent: undefined };
  TabSearch: { typeContent: undefined };

};

export type ModalParamList = {
  HomeScreen: undefined;
  navigate: any;
  typeContent: {
    typeContent: any;
  }
}


export type SearchParamList = {
  navigate: any;
  TabSearch: {
    typeContent: any;
  }
}


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
