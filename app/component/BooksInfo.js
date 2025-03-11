import { View, Text,StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {MaterialIcons,Entypo} from "react-native-vector-icons";

const BooksInfo = () => {

const [data,setData] = useState([]);
const[modalVisible, setModalVisible] = useState(false);
// const[uploadImage,setUploadImage] = useState('');
const[bookName,setBookName] = useState('');
const[authorName,setAuthorName] = useState('');
// const[uploadImageError,setUploadImageError] = useState('');
const[bookNameError,setBookNameError] = useState('');
const[authorNameError,setAuthorNameError] = useState('');

useEffect(()=>{ 
  getAPIData(); 
  },[])    

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
  // setUploadImageError(!uploadImage ? true : false);
  if (!bookName || !authorName) {
    return false;
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
  if (result) {
    console.warn("Book added successfully");
    await getAPIData();
    setBookName("");
    setAuthorName("");
    // setUploadImage("");
    setModalVisible(false);
  }
}

const deleteData = async (id) => {
  const url = "http://10.0.2.2:3000/books";
  let result = await fetch(`${url}/${id}`,{
    method:"DELETE",
  });
  result = await result.json();
  if(result){
    console.warn("Book deleted successfully");
    await getAPIData();
  }
}
const editData= async()=>{
const url="http://10.0.2.2:3000/books";
let result = await fetch(url,{
  method:"GET",
});
}
  return (
    <View style={styles.container}>
      <View>
        {data.length ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: responsiveHeight(8) }}
            renderItem={({ item }) => (
              <View style={styles.bookContainer}>
                <Text style={styles.bookname}>{item.bookname}</Text>
                <Text style={styles.author}>{item.author}</Text>
                {/* Edit and delete button */}
                <View style={styles.actionbtn}>
                  <TouchableOpacity>
                    <MaterialIcons name="edit" size={25} color="blue"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteData(item.id)}>
                    <MaterialIcons name="delete" size={25} color="red" />
                  </TouchableOpacity>
                </View>
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
    padding: responsiveWidth(2),
    backgroundColor: "#edede9",
  },
  actionbtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: responsiveHeight(1),
  },
  bookContainer: {
    flex: 1,
    margin: responsiveHeight(2),
    backgroundColor: "#fff",
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(4),
    elevation: 3,
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
    marginBottom: responsiveHeight(1),
  },
  addcontainer: {
    position: "absolute",
    bottom: responsiveHeight(3),
    right: responsiveWidth(5),
    backgroundColor: "blue",
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    borderRadius: responsiveHeight(3.5),
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
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
    padding: responsiveWidth(5),
    borderRadius: 10,
    elevation: 5,
    width: responsiveWidth(80),
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 10,
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
  },
  errorText: {
    color: "#ff0000",
    marginRight: responsiveWidth(21),
    marginTop: responsiveHeight(-1),
    marginBottom: responsiveHeight(2),
  },   
  addButton:{
    backgroundColor: "#007bff",
    padding: responsiveHeight(1.5),
    borderRadius: responsiveHeight(1),
    alignItems: "center",  
  },
  cancelbtn: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    borderRadius: responsiveHeight(5),
    padding: responsiveHeight(1),    
  }


});
