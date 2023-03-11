import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { SvgUri } from 'react-native-svg';

import GlobalStyle from "../../../../../assets/css/style"
import Icon from "../../../../components/icon"

const Tokens = ({ navigation, item }) => {

  //--------------------------------------------------------------------------//
  //---------------------------- Helper functions ----------------------------//
  //--------------------------------------------------------------------------//
  const goToTokenDetails = (item) => {
    // navigation.navigate()
  }

  return (
    <TouchableOpacity onPress={(item) => goToTokenDetails(item)} style={[GlobalStyle.plr_15, GlobalStyle.mtb_10]}>
      <View style={[GlobalStyle.flexDirectionRow, GlobalStyle.alignItemsCenter]}>
        <SvgUri style={styles.image} uri={item.icon_url} />
        <View style={[GlobalStyle.flex, GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentSpaceBetween]}>
          <View style={[GlobalStyle.ml_10]}>
            <Text style={[GlobalStyle.primaryBlackColor, GlobalStyle.boldFont, GlobalStyle.font_16]}>{item.title}</Text>
            <Text style={[GlobalStyle.secondaryBlackColorOne, GlobalStyle.semiboldFont, GlobalStyle.font_14]}>{item.sub_title}</Text>
            <Text style={[GlobalStyle.greenColor, GlobalStyle.boldFont, GlobalStyle.font_14]}>{item.value}</Text>
          </View>
          <View style={[GlobalStyle.justifyContentCenter]}>
            <Text style={[GlobalStyle.primaryBlackColor, GlobalStyle.boldFont, GlobalStyle.font_16]}>0</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>


  )
}

export default React.memo(Tokens)

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50
  },
})