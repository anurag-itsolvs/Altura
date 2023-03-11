import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Clipboard from '@react-native-community/clipboard';

import GlobalStyle from "../../../../assets/css/style"
import ValidationSchema from './validation-schema';
import DefaultStatusbar from '../../../components/default-statusbar';
import HeaderShadow from '../../../components/header-shadow';
import Icon from "../../../components/icon"
import { AuthContext } from '../../../context';
import BottomSnackbar from '../../../components/snackbar'
import { compareArrayValue } from '../../../components/helper';
import useLocalStorage from '../../../hooks/async-storage';

const VerifySecretPhraseScreen = () => {
  const { control, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const rules = ValidationSchema.loginSchema();
  const authData = React.useContext(AuthContext)

  const [walletInfo] = useLocalStorage("walletInfo")
  //--------------------------------------------------------------------------//
  //---------------------------- Helper functions ----------------------------//
  //--------------------------------------------------------------------------//

  const onSubmit = async (data) => {
    try {
      var phrase = data && data.phrase.trim()
      var trimmedArrayValue = phrase.split(" ").map(item => item.trim());

      if (compareArrayValue(trimmedArrayValue, walletInfo.phrase)) {
        walletInfo.isUserVerified = true
        authData.saveWalletInfo(walletInfo)
      } else {
        BottomSnackbar.errorSnackbar("Phrase did not matched.")
      }
    } catch (e) {
      BottomSnackbar.errorSnackbar("There is some issue.")
    }
  };

  const onError = (errors, e) => {
    console.log("on errors", errors)
  }

  const pasteCopiedText = async () => {
    const text = await Clipboard.getString();
    setValue("phrase", text)
  };

  return (
    <DefaultStatusbar>
      <View style={[GlobalStyle.whiteColorBackground, GlobalStyle.flex]}>
        <ScrollView>
          <View style={[GlobalStyle.flex, GlobalStyle.pb_20]}>
            <HeaderShadow>
              <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.flex, styles.heading, GlobalStyle.justifyContentCenter, GlobalStyle.mb_15]}>
                <Text style={[GlobalStyle.boldFont, GlobalStyle.font_20, GlobalStyle.primaryBlackColor]}>
                  Verify secret phrase
                </Text>
              </View>
            </HeaderShadow>

            <View style={[GlobalStyle.flex, GlobalStyle.mt_10]}>

              <View style={[GlobalStyle.mb_10, GlobalStyle.plr_20]}>
                <Text style={[GlobalStyle.primaryBlackColor, GlobalStyle.boldFont, GlobalStyle.font_14, GlobalStyle.capitalizeText]}>Phrase</Text>
                <View style={[GlobalStyle.lighterGrayColorBackground, GlobalStyle.radiusFive, GlobalStyle.mt_8, GlobalStyle.flexDirectionRow, GlobalStyle.borderOne, GlobalStyle.borderBlackPrimary]}>
                  <Controller
                    control={control}
                    name="phrase"
                    rules={{
                      required: rules.phrase.required
                    }}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        value={value}
                        onChangeText={value => onChange(value)}
                        placeholder={"Enter phrase"}
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor={GlobalStyle.placeHolderColor.color}
                        autoFocus={true}
                        style={[GlobalStyle.font_16, GlobalStyle.primaryBlackColor, GlobalStyle.ptb_10, GlobalStyle.plr_15, GlobalStyle.flex, GlobalStyle.semiboldFont, { height: 200, textAlignVertical: 'top', }]}
                      />
                    )}
                  />
                </View>

                <View>
                  {errors.phrase && errors.phrase.type === 'required' && <Text style={[GlobalStyle.redColor, GlobalStyle.semiboldFont, GlobalStyle.font_13]}>Phrase is required.</Text>}
                </View>

                <View style={[GlobalStyle.mt_10]}>
                  <Text style={[GlobalStyle.semiboldFont, GlobalStyle.font_15, GlobalStyle.secondaryBlackColorOne]}>
                    Enter 12 words separated by single space
                  </Text>
                </View>

                <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.mt_30]}>
                  <TouchableOpacity onPress={pasteCopiedText} style={[GlobalStyle.whiteColorBackground, GlobalStyle.borderOne, GlobalStyle.borderBluePrimary, GlobalStyle.alignItemsCenter, GlobalStyle.radiusEight, GlobalStyle.p_10, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                    <Icon name={"paste"} type={"Fontisto"} style={[GlobalStyle.font_20, GlobalStyle.primaryBlueColor, GlobalStyle.mr_5]} />
                    <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.primaryBlueColor]}>Paste</Text>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={[GlobalStyle.plr_30, GlobalStyle.mt_30]}>
                <TouchableOpacity onPress={handleSubmit(onSubmit, onError)} style={[GlobalStyle.blackColorBackground, GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                  <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.whiteColor]}>Continue</Text>
                  <Icon name={"arrowright"} type={"AntDesign"} style={[GlobalStyle.font_20, GlobalStyle.whiteColor, GlobalStyle.ml_5]} />
                </TouchableOpacity>
              </View>

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

export default VerifySecretPhraseScreen

const styles = StyleSheet.create({
  heading: {
    height: 55
  },

})