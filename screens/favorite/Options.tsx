import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import tw from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons';




export function FavoriteButtonON(): JSX.Element  {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} name="heart" color="grey" style={[tw`bg-white`]} />
}



export function FavoriteButtonOFF(): JSX.Element  {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} name="heart" color="red" style={[tw`bg-white`]} />
}