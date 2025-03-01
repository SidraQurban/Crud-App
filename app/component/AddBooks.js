import { View, Text } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const AddBooks = () => {
  return (
    <View style={{marginTop:responsiveHeight(5)}}>
      <Text>AddBooks</Text>
    </View>
  )
}

export default AddBooks