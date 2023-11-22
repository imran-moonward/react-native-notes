import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../constants/colors';
import MyNoteButtonBase from '../components/mynote-button-base';
import AppHeader from '../components/app-header';
import MessageContainer from '../components/message-container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {note_key} from '../constants/storage-keys';
import {Note} from '../types/general-types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import NoteContainer from '../components/note-container';
import useNoteStore from '../store/notes-store';

type Props = {};
type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'MainTabNavigator'
>;

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const {notes, addRemoveNote} = useNoteStore();
  const isFocused = useIsFocused();

  const onAddPress = () => {
    navigation.navigate('NoteEditor', {
      toCreateNoteId: !notes ? 1 : notes.length + 1,
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppHeader title="Home" onAddPress={onAddPress} />
      <View style={styles.contentContainer}>
        <FlatList
          numColumns={1}
          style={styles.listContainer}
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
