import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from "react-native-vector-icons"
import { responsiveHeight } from 'react-native-responsive-dimensions'

const AddBooks = () => {
  return (
    <View style={{marginTop:responsiveHeight(30)}}>
     <Ionicons name="add" size={20}   color="red"/>
    </View>
  )
}

export default AddBooks