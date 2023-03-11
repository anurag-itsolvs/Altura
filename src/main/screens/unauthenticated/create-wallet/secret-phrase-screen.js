import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, KeyboardAvoidingView, Platform } from 'react-native';
import { Dimensions } from 'react-native'
import Clipboard from '@react-native-community/clipboard';

import GlobalStyle from "../../../../assets/css/style"
import DefaultStatusbar from '../../../components/default-statusbar';
import HeaderShadow from '../../../components/header-shadow';
import Icon from "../../../components/icon"
import { AuthContext } from '../../../context';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const SecretPhraseScreen = ({ navigation }) => {
  const authData = React.useContext(AuthContext)
  const [phrase, setPhrase] = useState(null);
  const [walletName, setWalletName] = useState(null);

  useEffect(() => {
    (async () => {
      const phrase = await generateMnemonic();
      setPhrase(phrase)
      setWalletName("Altura Wallet 01")

      var walletInfo = {
        isUserVerified: false,
        phrase: phrase,
        walletName: "Altura Wallet 01"
      }
      authData.saveWalletInfo(walletInfo)
    })();
    return () => {
      // this now gets called when the component unmounts
    };

  }, [])

  //--------------------------------------------------------------------------//
  //---------------------------- Helper functions ----------------------------//
  //--------------------------------------------------------------------------//

  const goToVerifySecretPhraseScreen = () => {
    navigation.navigate("VerifySecretPhrase")
  }

  generateMnemonic = async () => {
    // We can use a library ex- react-native-bip39 th generate Generate a random mnemonic for now just keeping had code value
    try {
      return ['reveal', 'man', 'culture', 'nominee', 'tag', 'abuse', 'keen', 'behave', 'refuse', 'warfare', 'crisp', 'thunder']
    } catch (e) {
      return false
    }
  }

  const copyToClipboard = () => {
    Clipboard.setString('reveal man culture nominee tag abuse keen behave refuse warfare crisp thunder');
  };

  const getPhrase = () => {
    return phrase && phrase.map((item, index) => {
      return (
        <View key={index} style={[GlobalStyle.primaryBlueColorBackground, GlobalStyle.p_10, GlobalStyle.radiusEight, GlobalStyle.mr_10, GlobalStyle.mb_5]}>
          <Text style={[GlobalStyle.boldFont, GlobalStyle.font_14, GlobalStyle.whiteColor]}>{item}</Text>
        </View>
      )
    })
  }

  return (
    <DefaultStatusbar>
      <View style={[GlobalStyle.whiteColorBackground, GlobalStyle.flex]}>
        <ScrollView>
          <View style={[GlobalStyle.flex, GlobalStyle.pb_20]}>

            <HeaderShadow>
              <View style={[GlobalStyle.flex, GlobalStyle.whiteColorBackground, GlobalStyle.borderGaryPrimary, GlobalStyle.flexDirectionRow, GlobalStyle.alignItemsCenter, styles.heading, GlobalStyle.mb_10]}>
                <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.flex, GlobalStyle.pr_25]}>
                  <Text style={[GlobalStyle.boldFont, GlobalStyle.font_18, GlobalStyle.primaryBlackColor]}>
                    Your secret phrase
                  </Text>
                </View>
              </View>
            </HeaderShadow>

            <View style={[GlobalStyle.flex, GlobalStyle.mt_10]}>
              <View style={[GlobalStyle.mt_10, GlobalStyle.plr_20]}>
                <View style={[GlobalStyle.radiusEight, GlobalStyle.lightBlueColorBackground,]}>
                  <View style={[GlobalStyle.flexDirectionRow, GlobalStyle.flexWrap, GlobalStyle.plr_20, GlobalStyle.ptb_10, GlobalStyle.mtb_10]}>
                    <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.secondaryBlackColorOne]}>Wallet Name: </Text>
                    <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.primaryBlueColor]}>{walletName}</Text>
                  </View>
                </View>
              </View>

              <View style={[GlobalStyle.mt_10, GlobalStyle.alignItemsCenter, GlobalStyle.plr_20]}>
                <View style={[styles.inputContainer, GlobalStyle.radiusEight, GlobalStyle.lightBlueColorBackground,]}>
                  <View style={[GlobalStyle.flexDirectionRow, GlobalStyle.flexWrap, GlobalStyle.plr_20, GlobalStyle.ptb_10, GlobalStyle.mtb_10]}>
                    {getPhrase()}
                  </View>
                </View>
              </View>

              <View style={[GlobalStyle.mt_10, GlobalStyle.alignItemsCenter, GlobalStyle.flex, GlobalStyle.plr_20]}>
                <Text style={[GlobalStyle.boldFont, GlobalStyle.font_15, GlobalStyle.primaryBlueColor]}>
                  Write down or copy these word in the right order and save them somewhere safe.
                </Text>
              </View>

              <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.mt_30]}>
                <TouchableOpacity onPress={copyToClipboard} style={[GlobalStyle.whiteColorBackground, GlobalStyle.borderOne, GlobalStyle.borderBluePrimary, GlobalStyle.alignItemsCenter, GlobalStyle.radiusEight, GlobalStyle.p_10, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                  <Icon name={"copy-outline"} type={"Ionicons"} style={[GlobalStyle.font_20, GlobalStyle.primaryBlueColor, GlobalStyle.mr_5]} />
                  <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.primaryBlueColor]}>Copy</Text>
                </TouchableOpacity>
              </View>

              <View style={[GlobalStyle.m_30, GlobalStyle.p_10, GlobalStyle.radiusFive, GlobalStyle.redBorder, GlobalStyle.borderOne]}>
                <Text style={[GlobalStyle.boldFont, GlobalStyle.font_15, GlobalStyle.redColor]}>
                  DO NOT share your phrase to anyone as this gives full access to your wallet!
                </Text>

                <Text style={[GlobalStyle.semiBoldItalicFont, GlobalStyle.font_13, GlobalStyle.redColor, GlobalStyle.mt_15]}>
                  Altura support will never reach you out to ask for it.
                </Text>
              </View>

              <View style={[GlobalStyle.plr_30, GlobalStyle.mt_30]}>
                <TouchableOpacity onPress={goToVerifySecretPhraseScreen} style={[GlobalStyle.blackColorBackground, GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                  <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.whiteColor]}>Continue</Text>
                  <Icon name={"arrowright"} type={"AntDesign"} style={[GlobalStyle.font_20, GlobalStyle.whiteColor, GlobalStyle.ml_5]} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </DefaultStatusbar>
  )
}

export default SecretPhraseScreen

const styles = StyleSheet.create({
  heading: {
    height: 55
  },
  inputContainer: {
    height: 180,
    width: SCREEN_WIDTH - 40,
  }
})