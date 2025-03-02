import { View, Text,StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AddBooks from './AddBooks';
import {MaterialIcons,Entypo} from "react-native-vector-icons";

const BooksInfo = () => {

const [data,setData] = useState([]);
const[modalVisible, setModalVisible] = useState(false);
const[uploadImage,setUploadImage] = useState('');
const[bookName,setBookName] = useState('');
const[authorName,setAuthorName] = useState('');
const[uploadImageError,setUploadImageError] = useState('');
const[bookNameError,setBookNameError] = useState('');
const[authorNameError,setAuthorNameError] = useState('');

const getAPIData =async () =>{
const url="http://10.0.2.2:3000/books";
    let result = await fetch(url);
    result = await result.json();
    console.log(result); 
    setData(result);    
}

const saveData= async()=>{

  setBookNameError(!bookName ? true : false);
  setAuthorNameError(!authorName ? true : false);
  setUploadImageError(!uploadImage ? true : false);
  if( !uploadImage || !bookName || !authorName){
    return false
  }
   
  const url = "http://10.0.2.2:3000/books";
  let result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bookname: bookName, author: authorName }),
  });
  result = await result.json();
  if(result){
    console.warn("Book added successfully");
    setData([...data, result]);
    
  }
  getAPIData();
  setModalVisible(false);
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
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: responsiveHeight(8) }}
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
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelbtn}>
                  <Entypo name="cross" size={25}/>
                </TouchableOpacity>
                {/* image */}
              {/* <TextInput
                  style={styles.input}
                  value={uploadImage}
                  onChangeText={(text) => setUploadImage(text)}
                  placeholder="Upload Image..."
                />
                 {uploadImageError ? (
                  <Text style={styles.errorText}>
                    Please select Image
                  </Text>
                ) : null} */}
               <View style={{marginTop:responsiveHeight(3)}}>
               <TextInput
                  style={styles.input}
                  value={bookName}
                  onChangeText={(text) => setBookName(text)}
                  placeholder="Enter Book Name"
                />

                {bookNameError ? (
                  <Text style={styles.errorText}>
                    Please enter Valid Book Name
                  </Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  value={authorName}
                  onChangeText={(text) => setAuthorName(text)}
                  placeholder="Enter Author Name"
                />
                {authorNameError ? (
                  <Text style={styles.errorText}>
                    Please enter Valid Author Name
                  </Text>
                ) : null}
               </View>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <TouchableOpacity onPress={saveData} style={styles.addButton}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: "bold",
                      }}
                    >
                      Add Book
                    </Text>
                  </TouchableOpacity>
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
    flex: 1,
    padding: responsiveWidth(1),
    backgroundColor: "#edede9",
    height: responsiveHeight(100),
  },

  bookContainer: {
    flex: 1,
    marginTop: responsiveHeight(3),
  },

  bookname: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: "bold",
    textAlign: "center",
  },

  author: {
    fontSize: responsiveFontSize(1.5),
    color: "#6c757d",
    textAlign: "center",
  },
  addcontainer: {
    position: "absolute",
    bottom: responsiveHeight(1),
    right: responsiveWidth(5),
    backgroundColor: "blue",
    height: responsiveHeight(6),
    width: responsiveHeight(6),
    borderRadius: responsiveHeight(3),
    elevation: 5,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    backgroundColor: "#fff",
    height: responsiveHeight(40),
    width: responsiveWidth(80),
    alignItems: "center",
  },
  input: {
    borderColor: "skyblue",
    borderWidth: 1,
    padding: 10,
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(70),
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },
  errorText: {
    color: "#ff0000",
    marginRight: responsiveWidth(21),
    marginTop: responsiveHeight(-1),
    marginBottom: responsiveHeight(2),
  },
  addButton: {
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 5,
    width: responsiveWidth(70),
    marginTop: responsiveHeight(2),
    justifyContent: "center",
    alignItems: "center",
  },
  cancelbtn: {
    position: "absolute",
    left: responsiveWidth(72.5),
    top: responsiveHeight(0.5),
    backgroundColor: "red",
    borderRadius: responsiveHeight(2),
  },
});
