import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PINCode from '@haskkor/react-native-pincode'

import GlobalStyle from "../../assets/css/style"


const LockScreen = ({ status, finishProcess }) => {
  return (
    <PINCode status={status} finishProcess={finishProcess}
      colorCircleButtons={GlobalStyle.lightBlueColorBackground.backgroundColor}
      colorPassword={GlobalStyle.primaryBlueColor.color}
      colorPasswordEmpty={GlobalStyle.primaryBlueColor.color}
      colorPasswordError={GlobalStyle.primaryBlueColor.color}
      stylePinCodeColorTitle={GlobalStyle.primaryBlackColor.color}
      stylePinCodeColorSubtitle={GlobalStyle.primaryBlackColor.color}
      stylePinCodeButtonNumber={GlobalStyle.primaryBlueColor.color}
    />
  )
}

export default LockScreen

const styles = StyleSheet.create({})