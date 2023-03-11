import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStartedScreen from "../screens/unauthenticated/get-started"

import LoginIntoWalletScreen from "../screens/unauthenticated/login-into-wallet/login-into-wallet-screen"
import SetPassCodeScreen from "../screens/unauthenticated/create-wallet/set-passcode"
import BackupWalletScreen from "../screens/unauthenticated/create-wallet/backup-wallet-screen"
import SecretPhraseScreen from "../screens/unauthenticated/create-wallet/secret-phrase-screen"
import VerifySecretPhraseScreen from "../screens/unauthenticated/create-wallet/verify-secret-phrase-screen"

const AuthStack = createStackNavigator();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={'GetStarted'} component={GetStartedScreen} />
      <AuthStack.Screen name={'LoginIntoWallet'} component={LoginIntoWalletScreen} />
      <AuthStack.Screen name={'SetPassCode'} component={SetPassCodeScreen} />
      <AuthStack.Screen name={'BackupWallet'} component={BackupWalletScreen} />
      <AuthStack.Screen name={'SecretPhrase'} component={SecretPhraseScreen} />
      <AuthStack.Screen name={'VerifySecretPhrase'} component={VerifySecretPhraseScreen} />
    </AuthStack.Navigator>
  );
}
