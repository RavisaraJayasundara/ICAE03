import { StyleSheet, Text, View,ScrollView,Image,TextInput,Button } from 'react-native';


export default function AddStudent() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View>
            <Image source={require("../assets/logo.png")} />
        </View>
        <View>
           <TextInput placeholder='ID' placeholderTextColor={'gray'} style={styles.input}/>
           <TextInput placeholder='Name' placeholderTextColor={'gray'} style={styles.input}/>
           <TextInput placeholder='Age' placeholderTextColor={'gray'} style={styles.input}/>
           <TextInput placeholder='Gender' placeholderTextColor={'gray'} style={styles.input}/>
           <TextInput placeholder='Course' placeholderTextColor={'gray'} style={styles.input}/>

        </View>
        <View>
            <Button title='Add'/>
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
  
