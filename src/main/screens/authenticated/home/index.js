import React, { useCallback, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { Dimensions } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";


import GlobalStyle from "../../../../assets/css/style"
import { cryptoAssetsData } from '../../../../assets/json/crypto-assets';
import AppForegroundStatus from '../../../components/app-foreground';
import DefaultStatusbar from '../../../components/default-statusbar';
import HeaderShadow from '../../../components/header-shadow';
import Icon from "../../../components/icon"
import useLocalStorage from '../../../hooks/async-storage';
import Actions from './components/actions';
import Tokens from './components/tokens';


const HomeScreen = ({ navigation }) => {

  const [walletInfo, setWalletValue] = useLocalStorage("walletInfo")
  const [cryptoAssets, setCryptoAssets] = useState(cryptoAssetsData);

  //--------------------------------------------------------------------------//
  //---------------------------- Helper functions ----------------------------//
  //--------------------------------------------------------------------------//
  const goToNotificationScreen = () => {
    // navigation.navigate()
  }

  const goToSearchScreen = () => {
    // navigation.navigate()
  }

  const renderHeaderComponents = () => {
    return (
      <>
        <Actions navigation={navigation} />
        <View style={[GlobalStyle.ptb_10, GlobalStyle.mt_10, GlobalStyle.plr_15, GlobalStyle.lightGrayColorBackground]}>
          <Text style={[GlobalStyle.boldFont, GlobalStyle.font_17, GlobalStyle.primaryBlackColor]}>
            Tokens
          </Text>
        </View>
      </>
    )
  }

  const renderTokens = useCallback((item) => {
    return (
      <Tokens navigation={navigation} item={item} />
    )
  }, [])

  return (
    <DefaultStatusbar>

      <AppForegroundStatus navigation={navigation} />

      <View style={[GlobalStyle.whiteColorBackground, GlobalStyle.flex]}>
        <View style={[GlobalStyle.flex, GlobalStyle.pb_20]}>

          <HeaderShadow>
            <View style={[GlobalStyle.flex, GlobalStyle.whiteColorBackground, GlobalStyle.borderGaryPrimary, GlobalStyle.flexDirectionRow, GlobalStyle.alignItemsCenter, styles.heading, GlobalStyle.mb_10]}>
              <TouchableOpacity onPress={goToNotificationScreen} style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pl_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                <Icon name={"notifications"} type={"Ionicons"} style={[GlobalStyle.font_24, GlobalStyle.primaryBlueColor]} />
              </TouchableOpacity>
              <View style={[GlobalStyle.alignItemsCenter, GlobalStyle.flex, GlobalStyle.plr_25]}>
                <Text style={[GlobalStyle.boldFont, GlobalStyle.font_22, GlobalStyle.greenColor]}>
                  $1244.08
                </Text>

                <Text style={[GlobalStyle.boldFont, GlobalStyle.font_16, GlobalStyle.secondaryBlackColorOne]}>
                  {walletInfo && walletInfo.walletName}
                </Text>
              </View>

              <TouchableOpacity onPress={goToSearchScreen} style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentCenter]}>
                <Icon name={"search1"} type={"AntDesign"} style={[GlobalStyle.font_24, GlobalStyle.primaryBlueColor]} />
              </TouchableOpacity>
            </View>
          </HeaderShadow>

          <View style={[GlobalStyle.flex, GlobalStyle.mt_10]}>
            <FlatList
              data={cryptoAssets.result.data}
              keyExtractor={item => item.id}
              contentContainerStyle={[GlobalStyle.flexGrow]}
              initialNumToRender={10}
              renderItem={({ item }) => renderTokens(item)}
              ListHeaderComponent={renderHeaderComponents()}
            />
          </View>
        </View>
      </View>
    </DefaultStatusbar>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  heading: {
    height: 75
  },

})