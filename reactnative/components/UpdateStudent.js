import { StyleSheet, Text, View,ScrollView,Image,TextInput ,Button} from 'react-native';


export default function UpdateStudent({route}) {
  const {student} = route.params;

  const[name,setName] = useState(student.name);
  const[age,setAge] = useState(student.age);
  const[gender,setGender] = useState(student.gender);
  const[course,setCourse] = useState(student.course);

  const handleUpdate=()=>{
    const updatedStudent ={
      ...student,
      name,
      age,
      gender,
      course,
    };
    navigation.popTo('StudentList',{updatedStudent})
  }
  return (
    <ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={require("../assets/logo.png")} />
        </View>
        <View>
            <TextInput placeholder='Name' placeholderTextColor={'gray'} style={styles.input} value={name} onChangeText={setName}/>
            <TextInput placeholder='Age' placeholderTextColor={'gray'} style={styles.input} value={age} onChangeText={setAge}/>
            <TextInput placeholder='Gender' placeholderTextColor={'gray'} style={styles.input} value={gender} onChangeText={setGender}/>
            <TextInput placeholder='Course' placeholderTextColor={'gray'} style={styles.input} value={course} onChangeText={setCourse}/>
        </View>
        <View>
            
            <Button title="Update" onPress={handleUpdate}/>
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
