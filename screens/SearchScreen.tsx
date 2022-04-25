import { StyleSheet, SafeAreaView, Text  } from 'react-native';
import { RootTabScreenProps } from '../types';
import ItemScroll from './search/ItemsScroll';


export default function SearchScreen({ route, navigation }: RootTabScreenProps<'TabHome'>) {

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
