import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './main/navigations';
import RNBootSplash from "react-native-bootsplash";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = (() => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true, duration: 100 });
    });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
})

const styles = StyleSheet.create({
})

export default App;