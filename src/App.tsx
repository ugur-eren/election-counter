import {Platform, StyleSheet, View} from 'react-native';
import * as StatusBar from 'expo-status-bar';
import Providers from './Providers';
import {Theme} from './Styles';
import Landing from './Screens/Landing/Landing';

if (Platform.OS === 'android') {
  StatusBar.setStatusBarTranslucent(false);
  StatusBar.setStatusBarBackgroundColor(Theme.colors.background, false);
}
StatusBar.setStatusBarStyle('light');

function App() {
  return (
    <Providers>
      <View style={styles.container}>
        <Landing />
      </View>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});

export default App;
