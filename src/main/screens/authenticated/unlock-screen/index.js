import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import LockScreen from '../../../components/lock-screen';
import GlobalStyle from "../../../../assets/css/style"

const UnlockScreen = ({ navigation }) => {
  const [pinStatus, setPinStatus] = useState("enter");
  const goToBackupWalletScreen = () => {
    navigation.navigate("Home")
  }
  return (
    <View style={[GlobalStyle.flex, { backgroundColor: "#ffffff" }]}>
      <LockScreen status={pinStatus} finishProcess={goToBackupWalletScreen} />
    </View>
  )
}

export default UnlockScreen

const styles = StyleSheet.create({})