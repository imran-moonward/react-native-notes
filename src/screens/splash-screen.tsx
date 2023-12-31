import {
  ActivityIndicator,
  AppState,
  AppStateStatus,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/colors';
import asyncTimeout from '../utils/asyncTimeout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import useNoteStore from '../store/notes-store';
import {useSnackbarActions} from '../store/snack-bar-store';

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
  const {addSnack} = useSnackbarActions();

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
      addSnack({message: 'Could not load Notes!', severity: 'Error'});
    } finally {
      setIsLoading(false);
      navigation.navigate('MainTabNavigator');
    }
  }

  function saveToLocalStorage() {
    try {
      persistToLocalStorage();
    } catch (error) {
      addSnack({message: 'Could not save notes locally!', severity: 'Error'});
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
