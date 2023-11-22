import {
  ActivityIndicator,
  AppState,
  AppStateStatus,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {Colors} from '../constants/colors';
import {CategoryType} from '../types/general-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {category_key, client_key, note_key} from '../constants/storage-keys';
import asyncTimeout from '../utils/asyncTimeout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import useNoteStore from '../store/notes-store';

type Props = {};

type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'SplashScreen'
>;

const SplashScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {loadFromLocalStorage, persistToLocalStorage, notes} = useNoteStore();
  const isFocused = useIsFocused();

  AppState.addEventListener(
    'change',
    async (state: AppStateStatus) => await alertState(state),
  );

  useEffect(() => {
    if (!isFocused) return;
    getItemsFromLocalStorage();
  }, []);

  const alertState = async (state: AppStateStatus) => {
    switch (state) {
      case 'inactive':
        saveToLocalStorage();
        break;
      default:
        break;
    }
  };

  async function getItemsFromLocalStorage() {
    try {
      setIsLoading(true);
      await Promise.all([loadFromLocalStorage(), asyncTimeout(2000)]);
    } catch (error) {
      console.log(
        'Error while retrieving items from the local storage',
        null,
        3,
      );
    } finally {
      setIsLoading(false);
      navigation.navigate('MainTabNavigator');
    }
  }

  function saveToLocalStorage() {
    try {
      persistToLocalStorage();
    } catch (error) {
      console.log(
        'Error while saving persisting the storage of data',
        JSON.stringify(error, null, 3),
      );
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && (
        <ActivityIndicator size={'large'} color={Colors.MYNOTE_GREEN} />
      )}
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
