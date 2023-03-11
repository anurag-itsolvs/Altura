import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PINCode, { hasUserSetPinCode } from "@haskkor/react-native-pincode";

import LockScreen from '../../../components/lock-screen';
import GlobalStyle from "../../../../assets/css/style"

const SetPassCodeScreen = ({ navigation }) => {
  const [pinStatus, setPinStatus] = useState("choose");

  useEffect(() => {
    (async () => {
      const hasPin = await hasUserSetPinCode();
      if (hasPin) {
        navigation.replace("BackupWallet")
      }
    })();
    return () => {
      // this now gets called when the component unmounts
    };
  }, [])

  //--------------------------------------------------------------------------//
  //---------------------------- Helper functions ----------------------------//
  //--------------------------------------------------------------------------//

  const goToBackupWalletScreen = () => {
    navigation.replace("BackupWallet")
  }
  return (
    <View style={[GlobalStyle.flex, { backgroundColor: "#ffffff" }]}>
      <LockScreen status={pinStatus} finishProcess={goToBackupWalletScreen} />
    </View>
  )
}

export default SetPassCodeScreen

const styles = StyleSheet.create({})