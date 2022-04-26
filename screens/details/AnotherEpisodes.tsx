import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';

export default function AnotherEpisodes(props: any) {

  return (

<View>
  <TouchableOpacity
                      // onPress={onPress}
   >
  <View style={[tw`shadow-lg border rounded-lg container flex flex-row mx-auto justify-center overflow-hidden mt-2`]} >
                  <View style={[tw`w-10 h-10 justify-center items-center mr-4 m-2`]}>
                  <Image source={{ uri: props.item.attributes.thumbnail ? props.item.attributes.thumbnail.tiny : 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} style={[tw`mx-auto rounded-full h-10 w-10 `]} />
                  </View>
                  <View style={[tw`flex-1 pl-1`]}>
                      <Text style={[tw`font-medium text-base font-bold`]}>
                      { props.item.attributes.canonicalTitle ? props.item.attributes.canonicalTitle : 'UnKnow' }
                      </Text>
                      <Text style={[tw`text-gray-600 text-sm`]}>
                      { props.item.attributes.description ? props.item.attributes.description : 'No description available' }
                      </Text>
                  </View>
      </View>
    </TouchableOpacity>
</View>

    
  )
}

