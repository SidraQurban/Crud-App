import { View, Text,StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const BooksInfo = () => {  

const [data,setData] = useState([]);   
const getAPIData =async () =>{    
const url="http://10.0.2.2:3000/books";   
    let result = await fetch(url);   
    result = await result.json();
    console.log(result);
    setData(result);
}
useEffect(()=>{

getAPIData();
},[])


  return (
    <View style={styles.container}>
      <Text> BooksInfo </Text>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Text style={styles.bookname}>{item.bookname}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          )}
        />
      ) 
      : null}
    </View>
  );
}

export default BooksInfo;

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(1),
    backgroundColor: "#edede9",
    height: responsiveHeight(100),
  },

  bookContainer: {
    flex: 1,
    marginTop:responsiveHeight(3)
  },

  bookname:{
    fontSize:responsiveFontSize(1.8),
    fontWeight:"bold",
    textAlign:"center"
  },

  author : {
    fontSize:responsiveFontSize(1.5),
    color:"#6c757d",
    textAlign:"center"
  }
});
