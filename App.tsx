import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from './src/assets/theme/colors';
import {HomeScreen} from '@/screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.mainAppcontainer}>
        <HomeScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainAppcontainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
