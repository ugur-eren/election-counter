import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

const Providers: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export default Providers;
