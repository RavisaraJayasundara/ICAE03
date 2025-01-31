import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,ScrollView,Image ,Button} from 'react-native';


export default function StudentProfile({route}) {
  const {student} = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={require("../assets/logo.png")} />
        </View>
        <View>
             <Image source={student.profile_pic} /> 
             <Text style={styles.name}>{student.name}</Text>
             <Text style={styles.age}>Age:{student.age} | Gender:{student.gender} </Text>
        </View>
        <View>
          <Text>Information</Text>
          <Text>ID:{student.id}</Text>
          <Text>Gender:{student.gender}</Text>
          <Text>Age:{student.age}</Text>
          <Text>Course:{student.course}</Text>
        </View>
        
        <View>
            <Button title="Home" onPress={()=>navigation.navigate('StudentList')}/>
            <Button title="Go to Update" onPress={()=>navigation.navigate('UpdateStudent',{student})}/>
            <Button title="Delete" onPress={()=>navigation.navigate('StudentList',{deletedStudent:student})}/>

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
name:{
  textAlign:'center',
  fontWeight:'bold',
  fontSize:25,
},
age:{
  textAlign:'center'
}
});
