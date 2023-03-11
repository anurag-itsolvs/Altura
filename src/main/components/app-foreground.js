import { useEffect, useRef, useState } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, Platform, AppState } from 'react-native';

import GlobalStyle from "../../assets/css/style"
import useLocalStorage from '../hooks/async-storage';

const AppForegroundStatus = ({ navigation }) => {
  const appState = useRef(AppState.currentState);
  const [walletInfo, setWalletValue] = useLocalStorage("walletInfo")
  const [pinStatus, setPinStatus] = useState("enter");

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // console.log('App has come to the foreground!')
        if (walletInfo && walletInfo.isUserVerified) {
          navigation.navigate("PassCode")
        }
      }
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, [walletInfo]);

  return (
    null
  )
}

export default AppForegroundStatus

const styles = StyleSheet.create({})