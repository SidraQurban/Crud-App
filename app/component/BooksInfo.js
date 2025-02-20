import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const BooksInfo = () => {
  return (
    <View style={styles.container}>
      <Text>BooksInfo</Text>
    </View>
  )
}

export default BooksInfo;

const styles = StyleSheet.create({
  container: {
     padding:responsiveWidth(1),
     backgroundColor: '#edede9', 
     height:responsiveHeight(100)  
    },
});
