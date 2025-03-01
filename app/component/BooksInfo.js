import { View, Text,StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AddBooks from './AddBooks';
import {MaterialIcons} from "react-native-vector-icons";

const BooksInfo = () => {

const [data,setData] = useState([]);
const[modalVisible, setModalVisible] = useState(false);
const[bookName,setBookName] = useState('');
const[authorName,setAuthorNmae] = useState('');
const[bookNameError,setBookNameError] = useState('');
const[authorNameError,setAuthorNmaeError] = useState('');

const getAPIData =async () =>{
const url="http://10.0.2.2:3000/books";
    let result = await fetch(url);
    result = await result.json();
    console.log(result); 
    setData(result);    
}

const saveData= async()=>{

  if(!bookName){
    setBookNameError(true)
  }
  if(!bookName){
    return false
  }
  if(!authorName){
    setAuthorNmaeError(true)
  }
  if(!bookName){
    return false
  }
  console.warn(bookName);
  console.warn(authorName);
  setModalVisible(false);
  
  const url = "http://10.0.2.2:3000/books";
  let result = await fetch(url,{
    "method":"POST",
    header: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify({bookName,authorName})
  });
  result = await result.json();
  if(result){
    console.warn("Book added successfully");
    
  }
}

useEffect(()=>{ 
getAPIData(); 
},[])  

  return (
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
        ) : null}

        {/* AddBooks */}
        <View style={styles.addcontainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add" size={30} style={styles.add} />
          </TouchableOpacity>

          {/* Modal */}
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modal}>
              <View style={styles.centerText}>
                <Text>Adding Books</Text>
                <TextInput
                  style={styles.input}
                  value={bookName}
                  onChangeText={(text) => setBookName(text)}
                  placeholder="Enter Book Name"
                />
                 <TextInput
                  style={styles.input}
                  value={authorName}
                  onChangeText={(text) => setAuthorNmae(text)}
                  placeholder="Enter Author Name"
                />
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Button title="Add" onPress={saveData}/>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
  modal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    backgroundColor:"#fff",
    height:responsiveHeight(40),
    width:responsiveWidth(80),
    alignItems:"center",
  },
  input: {
      borderColor:"skyblue",
      borderWidth:1,
      padding:10,
      marginBottom:10,
      width:responsiveWidth(70),
      fontSize:responsiveFontSize(2)
  },
  addButton: {
    
  }
});
