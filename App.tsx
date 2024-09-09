import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Layout from './Layout';
import { store } from './store/store';
import { colors } from './utils/colors';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
