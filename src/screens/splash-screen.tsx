import {
  ActivityIndicator,
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
import {useNavigation} from '@react-navigation/native';

type Props = {};

type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'SplashScreen'
>;

const SplashScreen = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    getAppData();
  }, []);

  const getAppData = async () => {
    try {
      const values = await Promise.all([
        AsyncStorage.getItem(note_key),
        asyncTimeout(2000),
      ]);
      const [savedNotes] = values;
      if (!savedNotes) {
        console.log('No Notes Saved');
      }
      navigation.navigate('MainTabNavigator');
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
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
