import {  useNavigation } from '@react-navigation/native';
import { useState  } from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TextInput,Button } from 'react-native';


export default function AddStudent() {
  const [id,setId] =useState('');
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [ gender,setGender] = useState('');
  const [course,setCourse] = useState('');

  const newStudent={
    id:id,
    name:name,
    age:age,
    gender:gender,
    course_name:course,
    profile_pic:require('../assets/profilepic/18.jpg')
  }
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
        <View>
            <Image source={require("../assets/logo.png")} />
        </View>
        <View>
           <TextInput placeholder='ID' placeholderTextColor={'gray'} style={styles.input} value={id} onChangeText={setId}/>
           <TextInput placeholder='Name' placeholderTextColor={'gray'} style={styles.input} value={name} onChangeText={setName}/>
           <TextInput placeholder='Age' placeholderTextColor={'gray'} style={styles.input} value={age} onChangeText={setAge}/>
           <TextInput placeholder='Gender' placeholderTextColor={'gray'} style={styles.input} value={gender} onChangeText={setGender}/>
           <TextInput placeholder='Course' placeholderTextColor={'gray'} style={styles.input} value={course} onChangeText={setCourse}/>

        </View>
        <View>
            <Button title='Add' onPress={()=>navigation.popTo('StudentList',{newStudent})}/>
        </View>
        <View>
            <Text style={styles.footer}>UoV @ 2025</Text>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
    footer: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      backgroundColor: '#4b0150',
      textAlign:'center',
      color:'white'
  },
  input:{
    flex: 1,
    border:'1px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  }
  });
  
