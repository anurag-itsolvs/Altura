import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import GlobalStyle from "../../assets/css/style"


export function LogoutDialog({ children, style, ...props }) {

  const handleNo = async () => {
    props.handleNoDialog()
  }

  const handleYes = async () => {
    props.handleYesDialog(true)
  }

  return (

    props.isLogoutDialogVisible ?
      <Modal style={GlobalStyle.confirmationDialog} isVisible={props.isLogoutDialogVisible} onBackButtonPress={() => handleNo()}>

        <View style={[GlobalStyle.whiteColorBackground, GlobalStyle.radiusTen, GlobalStyle.ptb_10]}>
          <ScrollView keyboardShouldPersistTaps={'always'}>
            <View style={[GlobalStyle.mtb_5, GlobalStyle.plr_15, GlobalStyle.ptb_10]}>
              <Text style={[GlobalStyle.primaryBlackColor, GlobalStyle.semiboldFont, GlobalStyle.font_15]}>Are you sure you want to logout?</Text>
            </View>

            <View style={[GlobalStyle.mt_20, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentSpaceAround]}>

              <TouchableOpacity onPress={() => handleNo()} style={[GlobalStyle.ptb_8, GlobalStyle.mr_20, GlobalStyle.flex, GlobalStyle.alignItemsCenter,]}>
                <Text style={[GlobalStyle.font_15, GlobalStyle.semiboldFont, GlobalStyle.secondaryBlackColorOne]}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleYes()} style={[GlobalStyle.ptb_8, GlobalStyle.flex, GlobalStyle.alignItemsCenter]} >
                <Text style={[GlobalStyle.font_15, GlobalStyle.semiboldFont, GlobalStyle.secondaryBlackColorOne]}>Logout</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

      </Modal>
      :
      null
  )
}

const styles = StyleSheet.create({
  title: {

  }
})
