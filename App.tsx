import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/MainNavigator';

export default function App() {
  return (
    <Navigator/>
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