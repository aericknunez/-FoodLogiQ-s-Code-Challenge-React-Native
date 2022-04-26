
import { ScrollView, Text, View, TextInput, StyleSheet, FlatList  } from 'react-native';
import React, { useState, useEffect } from "react";
import { RootTabScreenProps } from '../types';
import { getData } from '../config/main';
import { URL_PATH } from '../config/main';

export default function CategoryScreen({ navigation }: RootTabScreenProps<'TabCategory'>) {


  const [elements, setElements] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [urlsearch, setUrlsearch] = useState(URL_PATH + "/trending/anime");


  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, []);


  const loadData = async () => {
    if (search == "") {
      setUrlsearch(URL_PATH + "/trending/anime")
    }
    try {
      const response = await getData(urlsearch);
      setElements(response);
    } catch (error) {
      console.error(error);
    }
  };

console.log(search)
console.log(urlsearch)
  return (
    <ScrollView>
          <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>Kitsu</Text>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search a Element"
                  placeholderTextColor="#858585"
                  onChangeText={(text) => {
                    setUrlsearch(URL_PATH + "/anime?filter[text]="+ text), setSearch(text)
                  }}
                />
              </View>
          </View>

          <FlatList
            style={styles.list}
            data={elements}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CardItem element={item} />}
      />

    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  list: {
    width: "90%",
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "70%",
    textAlign: "center",
  },
});