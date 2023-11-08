import React ,{useState} from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Welcome = () => {
    const [task, setTask] = useState("");
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Manage Your Tasks</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Do something with the task here
            }}
          >Get Started</TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color:"#8353E2",
      marginBottom:20
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      padding: 10,
    },
    button: {
      width: 200,
      height: 40,
      backgroundColor: "#00BDD6",
      color: "#fff",
      borderRadius: 5,
      marginTop: 50,
      alignItems:'center',
      justifyContent:'center'
    },
  });

export default Welcome
