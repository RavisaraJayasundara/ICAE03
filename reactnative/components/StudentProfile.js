import { StyleSheet, Text, View,ScrollView,Image ,Button} from 'react-native';


export default function StudentProfile() {
  return (
    <ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={require("../assets/logo.png")} />
        </View>
        <View>

        </View>
        <View>
            <Button title="Home"/>
            <Button title="Go to Update"/>
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
});
