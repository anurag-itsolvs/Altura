import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, KeyboardAvoidingView, Platform } from 'react-native';
import { Dimensions } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

import GlobalStyle from "../../../../assets/css/style"
import DefaultStatusbar from '../../../components/default-statusbar';
import HeaderShadow from '../../../components/header-shadow';
import Icon from "../../../components/icon"

const BackupWalletScreen = ({ navigation }) => {
  const [termOneStatus, setTermOneStatus] = useState(false);
  const [termTwoStatus, setTermTwoStatus] = useState(false);
  const [termThreeStatus, setTermThreeStatus] = useState(false);

  //--------------------------------------------------------------------------//
  //---------------------------- Helper functions ----------------------------//
  //--------------------------------------------------------------------------//
  const goBack = () => {
    navigation.goBack()
  }

  const goToSecretPhraseScreen = () => {
    navigation.navigate("SecretPhrase")
  }


  return (
    <DefaultStatusbar>
      <View style={[GlobalStyle.whiteColorBackground, GlobalStyle.flex]}>
        <ScrollView>
          <View style={[GlobalStyle.flex, GlobalStyle.pb_20]}>

            <HeaderShadow>
              <View style={[GlobalStyle.flex, GlobalStyle.whiteColorBackground, GlobalStyle.borderGaryPrimary, GlobalStyle.flexDirectionRow, GlobalStyle.alignItemsCenter, styles.heading, GlobalStyle.mb_10]}>
                <TouchableOpacity onPress={goBack} style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pl_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                  <Icon name={"arrowleft"} type={"AntDesign"} style={[GlobalStyle.font_24, GlobalStyle.primaryBlackColor]} />
                </TouchableOpacity>
                <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.flex, GlobalStyle.pr_25]}>
                  <Text style={[GlobalStyle.boldFont, GlobalStyle.font_18, GlobalStyle.primaryBlackColor]}>
                    Back up your wallet now!
                  </Text>
                </View>
              </View>
            </HeaderShadow>

            <View style={[GlobalStyle.flex, GlobalStyle.mt_10]}>

              <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.flex, GlobalStyle.plr_20]}>
                <Text style={[GlobalStyle.boldFont, GlobalStyle.font_15, GlobalStyle.primaryBlueColor]}>
                  In the next step you will see Secret Phrase (12) words that allow you to recover a wallet.
                </Text>
              </View>

              <View style={[GlobalStyle.mt_30, GlobalStyle.plr_25]}>
                <View style={[GlobalStyle.mtb_3]}>
                  <View style={[GlobalStyle.borderOne, GlobalStyle.flexShrink, GlobalStyle.borderGaryPrimary, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.radiusEight]}>
                    <BouncyCheckbox
                      isChecked={termOneStatus}
                      size={20}
                      fillColor={GlobalStyle.primaryBlueColor.color}
                      unfillColor={GlobalStyle.whiteColor.color}
                      text="If I lose my secret phrase, my funds will be lost forever."
                      iconStyle={{ marginRight: 0 }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={[GlobalStyle.boldFont, GlobalStyle.flexWrap, GlobalStyle.font_14, GlobalStyle.secondaryBlackColorOne, { textDecorationLine: "none", marginLeft: -10 }]}
                      onPress={(status) => setTermOneStatus(status)}
                    />
                  </View>

                  <View style={[GlobalStyle.borderOne, GlobalStyle.mt_15, GlobalStyle.flexShrink, GlobalStyle.borderGaryPrimary, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.radiusEight]}>
                    <BouncyCheckbox
                      isChecked={termTwoStatus}
                      size={20}
                      fillColor={GlobalStyle.primaryBlueColor.color}
                      unfillColor={GlobalStyle.whiteColor.color}
                      text="If I expose or share my secret phrase to anybody, my funds can get stolen."
                      iconStyle={{ marginRight: 0 }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={[GlobalStyle.boldFont, GlobalStyle.flexWrap, GlobalStyle.font_14, GlobalStyle.secondaryBlackColorOne, { textDecorationLine: "none", marginLeft: -10 }]}
                      onPress={(status) => setTermTwoStatus(status)}
                    />
                  </View>

                  <View style={[GlobalStyle.borderOne, GlobalStyle.mt_15, GlobalStyle.flexShrink, GlobalStyle.borderGaryPrimary, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.radiusEight]}>
                    <BouncyCheckbox
                      isChecked={termThreeStatus}
                      size={20}
                      fillColor={GlobalStyle.primaryBlueColor.color}
                      unfillColor={GlobalStyle.whiteColor.color}
                      text="Altura support will NEVER reach out to ask for it."
                      iconStyle={{ marginRight: 0 }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={[GlobalStyle.boldFont, GlobalStyle.flexWrap, GlobalStyle.font_14, GlobalStyle.secondaryBlackColorOne, { textDecorationLine: "none", marginLeft: -10 }]}
                      onPress={(status) => setTermThreeStatus(status)}
                    />
                  </View>
                </View>
              </View>

              {
                termOneStatus && termTwoStatus && termThreeStatus
                  ?
                  <View style={[GlobalStyle.plr_30, GlobalStyle.mt_30]}>
                    <TouchableOpacity onPress={goToSecretPhraseScreen} style={[GlobalStyle.blackColorBackground, GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                      <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.whiteColor]}>Continue</Text>
                      <Icon name={"arrowright"} type={"AntDesign"} style={[GlobalStyle.font_20, GlobalStyle.whiteColor, GlobalStyle.ml_5]} />
                    </TouchableOpacity>
                  </View>
                  :

                  <View style={[GlobalStyle.plr_30, GlobalStyle.mt_30]}>
                    <TouchableOpacity style={[GlobalStyle.inActiveColorBackground, GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                      <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.secondaryBlackColorTWo]}>Continue</Text>
                      <Icon name={"arrowright"} type={"AntDesign"} style={[GlobalStyle.font_20, GlobalStyle.secondaryBlackColorTWo, GlobalStyle.ml_5]} />
                    </TouchableOpacity>
                  </View>
              }
            </View>

            <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.flex, GlobalStyle.mt_5]}>
              <View style={[GlobalStyle.flexDirectionRow, GlobalStyle.flex, GlobalStyle.alignItemsCenter, GlobalStyle.overflowHidden]}>
                <Text style={[GlobalStyle.semiboldFont, GlobalStyle.subHeadingBlackColor, GlobalStyle.font_13]}>
                  By continuing, you agree to our
                </Text>
                <View style={[Platform.OS === 'ios' ? GlobalStyle.solidBorderBottom : GlobalStyle.dashedBorderBottom, GlobalStyle.ml_5, GlobalStyle.mr_5]}>
                  <Text style={[GlobalStyle.semiboldFont, GlobalStyle.font_13]} onPress={() => Linking.openURL('https://www.alturanft.com/legal/terms-of-service')}>Terms</Text>
                </View>
                <Text style={[GlobalStyle.semiboldFont, GlobalStyle.subHeadingBlackColor, GlobalStyle.font_13]}>
                  &
                </Text>
                <View style={[Platform.OS === 'ios' ? GlobalStyle.solidBorderBottom : GlobalStyle.dashedBorderBottom, GlobalStyle.ml_5]}>
                  <Text style={[GlobalStyle.semiboldFont, GlobalStyle.font_13]} onPress={() => Linking.openURL('https://www.alturanft.com/legal/privacy-and-cookie-policy')}>Policies</Text>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </DefaultStatusbar>
  )
}

export default BackupWalletScreen

const styles = StyleSheet.create({
  heading: {
    height: 55
  }
})