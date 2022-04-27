import * as React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import tw from 'tailwind-react-native-classnames';
import { Button, ActivityIndicator  } from 'react-native-paper'

export function YotubeButtom(url:any): JSX.Element  {

  return (
    <View >

        <TouchableOpacity >
          <View style={[tw`px-20 py-4`]}>
          <Button icon="youtube" mode="contained" color="red" 
          onPress={() =>  WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=' + url.url)} style={[tw`px-2`]}>
          watch on youtube
          </Button>
          </View>
        </TouchableOpacity>

    </View>
    
  );
}



export function NoYotubeButtom(): JSX.Element {

  return (
    <View >
          <View style={[tw`px-24 py-4`]}>
          <Button icon="youtube" mode="contained" color="grey" style={[tw`px-2`]}>
          No media
          </Button>
          </View>
    </View>
    
  );
}


export function Loader() {

    return (
        <View  style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View>
    )
        
  
}


  const styles = StyleSheet.create({
    loaderStyle: {
      marginVertical: 16,
      alignItems: "center",
    },
  });
  
  