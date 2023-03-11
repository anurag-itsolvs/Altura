import { StyleSheet, Text, View } from 'react-native'


export const compareArrayValue = (arr1, arr2) => {
  // compare arrays
  const result = JSON.stringify(arr1) == JSON.stringify(arr2)
  if (result) {
    return true
  }
  else {
    return false
  }
}



const styles = StyleSheet.create({})