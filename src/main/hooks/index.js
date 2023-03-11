import React, { useEffect } from 'react';
import { Alert, Linking, BackHandler } from 'react-native'
import RNBootSplash from "react-native-bootsplash";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function createAction(type, payload) {
  return {
    type,
    payload,
  };
}

export function AuthHook() {

  const initialState = {
    loading: true,
    walletInfo: {
      isUserVerified: false,
      phrase: null,
      walletName: null
    }
  }

  const reducer = (authState, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...authState,
          loading: action.payload,
        };
      case 'SET_WALLET_INFO':
        return {
          ...authState,
          walletInfo: action.payload,
        };
      case 'REMOVE_WALLET_INFO':
        return {
          ...authState,
          walletInfo: undefined,
        };
      default:
        return authState
    }
  }

  const [authState, dispatch] = React.useReducer(reducer, initialState);

  const auth = React.useMemo(
    () => ({
      logout: async () => {
        await AsyncStorage.removeItem("walletInfo");
        dispatch(createAction('REMOVE_WALLET_INFO'));
      },
      saveWalletInfo: async (data) => {
        try {
          await AsyncStorage.setItem("walletInfo", JSON.stringify(data));
          dispatch(createAction('SET_WALLET_INFO', data));
        } catch (error) {
          console.log(error);
        }
      }
    }), [])

  useEffect(() => {
    const init = async () => {
      // -------------------------------------------------------------------//
      // On app init we are getting the wallet info from local storage and setting 
      // in a state 
      // -------------------------------------------------------------------//
      await getWalletInfo()
      dispatch(createAction('SET_LOADING', false));
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });

  }, [])

  const getWalletInfo = async () => {
    const walletInfo = await AsyncStorage.getItem("walletInfo");
    var currentWalletInfo = null
    if (walletInfo) {
      currentWalletInfo = JSON.parse(walletInfo);
    }
    dispatch(createAction('SET_WALLET_INFO', currentWalletInfo));
  }


  return { auth, authState };
}