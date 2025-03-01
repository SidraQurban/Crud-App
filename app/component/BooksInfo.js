import { View, Text,StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AddBooks from './AddBooks';
import {MaterialIcons} from "react-native-vector-icons";

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

  return(
    <View style={styles.container}>
     <View>
     {data.length ? (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
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
      {/* AddBooks */}
      <View style={styles.addcontainer}>
        <TouchableOpacity>
        <MaterialIcons name="add" size={30} style={styles.add}/>
        <Modal visible={true} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.centerText}>
              <Text>Adding Books</Text>
            </View>
          </View>
        </Modal>
        </TouchableOpacity>
      </View>
     </View>
    </View>
  );
}

export default BooksInfo;

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  },
  addcontainer: {
     marginTop:responsiveHeight(44.9),
     marginLeft:responsiveWidth(73),
     backgroundColor:"blue",
     height:responsiveHeight(12),
     width:responsiveHeight(12),
     borderRadius:responsiveHeight(6),
     alignItems:"center",
     justifyContent:"center"  
    
  },
  add: {
    fontWeight:"bold",
  },
  centerText: {
    flex: 1,
    // marginTop:responsiveHeight(40),
    justifyContent:"center",
    alignItems:"center",
  },
  modal: {
   backgroundColor:"#FFFFFF",
  }
});
