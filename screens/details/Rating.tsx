import * as React from 'react'
import { Image } from 'react-native'
import { Text, View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native-paper';

export default function Rating() {

  return (

<View style={[tw`w-72 border border-blue-800 shadow-lg rounded-lg flex flex-row mx-auto overflow-hidden mt-2`]} >
                <View style={[tw`w-20 h-10 justify-center items-center mr-4 m-2 mt-4 border-r border-blue-800`]}>
                    <Text style={[tw`justify-center font-bold text-2xl text-blue-800`]}>
                    50%
                    </Text>
                    <Text style={[tw`justify-center text-sm text-blue-600`]}>
                    Score
                    </Text>
                </View>

                <View style={[tw`pl-1 mt-2 `]}>
                    <View style={[tw`flex flex-row`]}>
                        <Text style={[tw`font-medium text-base font-bold text-red-800`]}>
                        12453 
                        </Text>
                        <Text style={[tw`text-sm text-red-600`]}>
                        &nbsp; (Rating)
                        </Text>
                    </View>
                    
                    <View  style={[tw`flex flex-row`]}>
                    <Text style={[tw`font-medium text-base font-bold text-green-800`]}>
                        12453 
                        </Text>
                        <Text style={[tw`text-sm text-green-600`]}>
                        &nbsp; (Popularity)
                        </Text>
                    </View>
                </View>
    </View>

    
  )
}

