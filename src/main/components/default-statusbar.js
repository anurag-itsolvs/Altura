import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from "../../assets/css/style"

const DefaultStatusbar = (props) => {
  var color = ""
  if (props.statusbarColor) {
    color = props.statusbarColor
  } else {
    color = GlobalStyle.primaryBlueColor.color
  }

  return (
    <>
      <SafeAreaView edges={["top"]} style={{ backgroundColor: color }} />
      <StatusBar translucent backgroundColor={color} barStyle="light-content" />
      <SafeAreaView edges={["left", "right",]} style={[GlobalStyle.flex, GlobalStyle.whiteColorBackground]} >
        {props.children}
      </SafeAreaView>
    </>
  )
}

export default DefaultStatusbar

const styles = StyleSheet.create({})