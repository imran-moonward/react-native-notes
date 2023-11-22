import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../constants/colors';
import MyNoteButtonBase from '../components/mynote-button-base';
import AppHeader from '../components/app-header';
import MessageContainer from '../components/message-container';
import {Note} from '../types/general-types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import NoteContainer from '../components/note-container';
import useNoteStore from '../store/notes-store';
import asyncTimeout from '../utils/asyncTimeout';

type Props = {};
type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'MainTabNavigator'
>;

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const {notes, loadFromLocalStorage} = useNoteStore();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onAddPress = () => {
    navigation.navigate('NoteEditor', {
      toCreateNoteId: !notes ? 1 : notes.length + 1,
    });
  };

  async function handleRefresh() {
    try {
      setIsRefreshing(true);
      await Promise.all([loadFromLocalStorage(), asyncTimeout(2000)]);
    } catch (error) {
      console.log(
        'Error while retrieving items from the local storage',
        null,
        3,
      );
    } finally {
      setIsRefreshing(false);
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppHeader title="Home" onAddPress={onAddPress} />
      <View style={styles.contentContainer}>
        <FlatList
          numColumns={1}
          style={styles.listContainer}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={notes}
          ListEmptyComponent={
            <MessageContainer
              message={`Hmm, it looks like you haven't created any notes yet. \n Press the Add note button or the '+' button on the top right of the screen to create your notes.`}
            />
          }
          keyExtractor={(item: Note, index: number) => index.toString()}
          renderItem={({item, index}) => (
            <NoteContainer note={item} key={index} animationDelay={index + 1} />
          )}
        />
        <MyNoteButtonBase
          style={[
            styles.addNoteButton,
            {
              bottom: Platform.OS === 'android' ? 55 : 12,
            },
          ]}
          title={'Add Note'}
          onPress={() => onAddPress()}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addNoteButton: {
    position: 'absolute',
    right: 12,
    zIndex: 2,
  },
  contentContainer: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 12,
    backgroundColor: Colors.WHITE,
    flexGrow: 1,
  },
  listContainer: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: Colors.WHITE,
    flexGrow: 1,
    rowGap: 8,
  },
});
