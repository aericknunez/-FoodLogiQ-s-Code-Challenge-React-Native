import * as React from 'react'
import { Image } from 'react-native'
import { Text, View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';

export default function AnotherEpisodes() {

  return (

<View style={[tw`shadow-lg rounded-lg container flex flex-row mx-auto  justify-center overflow-hidden mt-2`]} >
                <View style={[tw`w-10 h-10 justify-center items-center mr-4 m-2`]}>
                <Image source={{ uri: 'https://media.kitsu.io/anime/poster_images/7991/tiny.jpg' }} style={[tw`mx-auto rounded-full h-10 w-10 `]} />
                </View>
                <View style={[tw`flex-1 pl-1`]}>
                    <Text style={[tw`font-medium text-base font-bold`]}>
                    Gilbert Blythe
                    </Text>
                    <Text style={[tw`text-gray-600 text-sm`]}>
                    Gilbert first tried to get Anne's attention by pulling her hair and calling her "Carrots".
                    </Text>
                </View>
    </View>

    
  )
}

