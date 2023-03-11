import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useLocalStorage(key, initialValue) {
  const [walletInfo, setWalletInfo] = useState(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value === null) return initialValue;
        return JSON.parse(value);
      })
      .then(setWalletInfo)
  }, [key, initialValue]);

  const setWalletValue = value => {
    const valueToStore = value instanceof Function ? value(walletInfo) : value;
    setStoredValue(valueToStore);
    AsyncStorage.setItem(key, JSON.stringify(valueToStore));
  }

  return [walletInfo, setWalletValue];
}