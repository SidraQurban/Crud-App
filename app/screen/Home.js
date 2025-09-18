import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../firebaseConnection";

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.mainText}>MyBookList 📚 </Text>
          <View
            style={{
              margin: responsiveHeight(1),
              borderWidth: 0.2,
              borderColor: "grey",
            }}
          />
        </View>
      </SafeAreaView>

      <StatusBar barStyle="light-content" backgroundColor="#000" />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(1),
    backgroundColor: "#edede9",
  },
  mainText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: responsiveHeight(2),
  },
});
