import { View, Text,StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import BooksInfo from '../component/BooksInfo';
import AddBooks from '../component/AddBooks';

const Home = () => {
  return (
    <>
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.mainText}>MyBookList </Text>
      </View>
    </SafeAreaView>
     <BooksInfo />
     <AddBooks/>
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
   }
});