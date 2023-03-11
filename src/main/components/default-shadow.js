import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import GlobalStyle from "../../assets/css/style"

export const DefaultShadow = (props) => {
  return (
    <Shadow
      distance={5}
      startColor={'#99999915'}
      containerViewStyle={{ marginVertical: 10 }}
      radius={10}
      style={[GlobalStyle.flexDirectionRow, GlobalStyle.mb_5]}>
      {props.children}
    </Shadow>
  )
}

export const DarkShadow = (props) => {
  return (
    <Shadow
      distance={12}
      startColor={'#cccccc90'}
      endColor={'#eeeeee50'}
      containerViewStyle={{ marginVertical: 10 }}
      radius={10}
      style={[GlobalStyle.flexDirectionRow, GlobalStyle.mb_5]}>
      {props.children}
    </Shadow>
  )
}


const styles = StyleSheet.create({})