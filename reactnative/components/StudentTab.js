import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function StudentTab() {
  const Stack=createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='StudentList' component={StudentList} options={{title:'List Of Student'}}/>
      <Stack.Screen name='StudentProfile' component={StudentProfile} options={{title:"Student's profile"}}/>
      <Stack.Screen name='AddStudent' component={AddStudent} options={{title:'Add New Student'}}/>
      <Stack.Screen name='UpdateStudent' component={UpdateStudent} options={{title:'Update the Student'}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

