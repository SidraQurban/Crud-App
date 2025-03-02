import { View, Text,StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import BooksInfo from '../component/BooksInfo';
const Home = () => {
  return (
    <>
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.mainText}>MyBookList 📚 </Text>
      </View>
    </SafeAreaView>
     <BooksInfo />
     
     <StatusBar barStyle="light-content" backgroundColor="#000" />
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
   container: {
    padding:responsiveWidth(1),
    backgroundColor: '#edede9',   
   },
   mainText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical:responsiveHeight(2)
   }
});