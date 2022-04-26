import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import { View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native-paper'


export default function YotubeButtom(url:any) {

  return (
    <View >

        <TouchableOpacity >
          <View style={[tw`px-20 py-4`]}>
          <Button icon="youtube" mode="contained" color="red" 
          onPress={() =>  WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=' + url.url)} >
          watch on youtube
          </Button>
          </View>
        </TouchableOpacity>

    </View>
    
  )
}
