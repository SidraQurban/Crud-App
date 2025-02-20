import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

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
      <Text>BooksInfo</Text>
    
    </View>
  );
}

export default BooksInfo;

const styles = StyleSheet.create({
  container: {
     padding:responsiveWidth(1),
     backgroundColor: '#edede9', 
     height:responsiveHeight(100)  
    },
});
