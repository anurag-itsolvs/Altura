import React from "react"
import { NavigationContainer, ActivityIndicator } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { navigationRef } from './root-navigation-ref';

import { AuthNavigator } from "./auth-navigation"
import { MainRootTabStackNavigator } from "./main-navigation"

import { AuthHook } from '../hooks'
import { AuthContext } from "../context"
import { Loading } from "../components/loading"

export default () => {

  const RootStack = createStackNavigator()
  const { auth, authState } = AuthHook();

  function renderScreen() {

    if (authState && authState.loading === true) {
      return (
        <RootStack.Screen name={'Loader'}>
          {() => (
            <Loading loading={true} />
          )}
        </RootStack.Screen>
      )
    } else {
      if (authState && authState.walletInfo && authState.walletInfo.isUserVerified) {
        return (
          <RootStack.Screen name={'Main'}>
            {() => (
              <AuthContext.Provider value={{ auth, authState }}>
                <MainRootTabStackNavigator />
              </AuthContext.Provider>

            )
            }
          </RootStack.Screen >
        )
      } else {
        return (
          <RootStack.Screen name={'Auth'}>
            {() => (
              <AuthContext.Provider value={auth}>
                <AuthNavigator />
              </AuthContext.Provider>
            )}
          </RootStack.Screen>
        )
      }
    }
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {renderScreen()}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
