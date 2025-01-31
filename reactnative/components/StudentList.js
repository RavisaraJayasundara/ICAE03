import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useState } from "react";
import { students } from "./StudentsDb";

export default function StudentList() {
  const [studentsData, setStudentsData] = useState(students);

  return (
    <ScrollView>
      <View>
        <View>
          <Image source={require("../assets/logo.png")} />
        </View>
        <FlatList
          data={studentsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.profile_pic} style={styles.image} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Button title="+" />
      </View>
      <View>
        <Text style={styles.footer}>UoV @ 2025</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    backgroundColor: '#4b0150',
    textAlign:'center',
    color:'white'
},
});
