import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking, KeyboardAvoidingView, Platform, FlatList } from 'react-native';

import GlobalStyle from "../../../../../assets/css/style"
import Icon from "../../../../components/icon"

const Actions = () => {
  return (
    <View style={[GlobalStyle.flexDirectionRow, GlobalStyle.justifyContentSpaceAround]}>
      <TouchableOpacity style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.justifyContentCenter]}>
        <View style={[GlobalStyle.primaryBlueColorBackground, GlobalStyle.circleRadius, GlobalStyle.p_8]}>
          <Icon name={"arrowup"} type={"AntDesign"} style={[GlobalStyle.font_24, GlobalStyle.whiteColor]} />
        </View>
        <Text style={[GlobalStyle.boldFont, GlobalStyle.font_14, GlobalStyle.primaryBlueColor, GlobalStyle.mt_5]}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.justifyContentCenter]}>
        <View style={[GlobalStyle.primaryBlueColorBackground, GlobalStyle.circleRadius, GlobalStyle.p_8]}>
          <Icon name={"arrowdown"} type={"AntDesign"} style={[GlobalStyle.font_24, GlobalStyle.whiteColor]} />
        </View>
        <Text style={[GlobalStyle.boldFont, GlobalStyle.font_14, GlobalStyle.primaryBlueColor, GlobalStyle.mt_5]}>Receive</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.justifyContentCenter]}>
        <View style={[GlobalStyle.primaryBlueColorBackground, GlobalStyle.circleRadius, GlobalStyle.p_8]}>
          <Icon name={"creditcard"} type={"AntDesign"} style={[GlobalStyle.font_24, GlobalStyle.whiteColor]} />
        </View>
        <Text style={[GlobalStyle.boldFont, GlobalStyle.font_14, GlobalStyle.primaryBlueColor, GlobalStyle.mt_5]}>Buy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[GlobalStyle.alignItemsCenter, GlobalStyle.circleRadius, GlobalStyle.p_10, GlobalStyle.pr_15, GlobalStyle.justifyContentCenter]}>
        <View style={[GlobalStyle.primaryBlueColorBackground, GlobalStyle.circleRadius, GlobalStyle.p_8]}>
          <Icon name={"swap-horizontal"} type={"Ionicons"} style={[GlobalStyle.font_24, GlobalStyle.whiteColor]} />
        </View>
        <Text style={[GlobalStyle.boldFont, GlobalStyle.font_14, GlobalStyle.primaryBlueColor, GlobalStyle.mt_5]}>Swap</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Actions

const styles = StyleSheet.create({})