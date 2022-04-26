import * as React from 'react'
import { Text, View } from '../../components/Themed'
import tw from 'tailwind-react-native-classnames';

export default function ChapterNum(props: any) {
  return (

<View style={[tw`w-72 border border-blue-800 shadow-lg rounded-lg flex flex-row mx-auto overflow-hidden mt-2`]} >
                <View style={[tw`w-28 h-10 justify-center items-center mr-4 m-2 mt-4 border-r border-blue-800`]}>
                    <Text style={[tw`justify-center font-bold text-2xl text-blue-800`]}>
                    { props.chapter ? props.chapter : '0' }
                    </Text>
                    <Text style={[tw`justify-center text-sm text-blue-600`]}>
                    Chapter
                    </Text>
                </View>

                <View style={[tw`pl-1 mt-2 `]}>
                    <View style={[tw`flex flex-row`]}>
                        <Text style={[tw`font-medium text-base font-bold text-red-800`]}>
                        AIR DAY
                        </Text>
                    </View>
                    
                    <View  style={[tw`flex flex-row`]}>
                    <Text style={[tw`font-medium text-base font-bold text-green-800`]}>
                        { props.day ? props.day : '0' }  
                        </Text>
                    </View>
                </View>
    </View>

    
  )
}

