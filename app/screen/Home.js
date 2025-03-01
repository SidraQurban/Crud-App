import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import BooksInfo from '../component/BooksInfo';
import AddBooks from '../component/AddBooks';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.mainText}> MyBookList </Text>
      </View>

      {/* Added ScrollView to prevent overflow issues */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BooksInfo />
        <AddBooks />
      </ScrollView>

      <StatusBar barStyle="light-content" backgroundColor="#000" />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(2),
    backgroundColor: '#edede9',
  },
  mainText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
