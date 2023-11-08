import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './screen/TaskList';
import Welcome from './screen/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome></Welcome> */}
      <TaskList></TaskList>
      <StatusBar style="auto" />
    </View>
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
