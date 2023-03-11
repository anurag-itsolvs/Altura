import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import GlobalStyle from "../../assets/css/style"

const HeaderShadow = (props) => {
  return (
    <Shadow
      distance={5}
      startColor={'#00000015'}
      containerViewStyle={{ marginVertical: 10 }}
      radius={10}
      style={[GlobalStyle.flexDirectionRow, props.headerStyle ? props.headerStyle : GlobalStyle.mb_5]}>
      {props.children}
    </Shadow>
  )
}

export default HeaderShadow

const styles = StyleSheet.create({})