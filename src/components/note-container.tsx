import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Note} from '../types/general-types';
import Animated, {FadeInLeft, StretchInX} from 'react-native-reanimated';
import {Colors} from '../constants/colors';

type Props = {
  note: Note;
  animationDelay: number;
  onDeletePress: () => void;
  onEditPress: () => void;
};

const NoteContainer = ({
  note,
  animationDelay,
  onDeletePress,
  onEditPress,
}: Props) => {
  return (
    <Animated.View
      entering={FadeInLeft.duration(300).delay(animationDelay * 300)}
      style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.button, {borderColor: Colors.BASE_ORANGE}]}
          onPress={onEditPress}>
          <Text style={[styles.infoText, {color: Colors.BASE_ORANGE}]}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.button, {borderColor: Colors.ERROR_RED}]}
          onPress={onDeletePress}>
          <Text style={[styles.infoText, {color: Colors.ERROR_RED}]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Client: </Text>
        <Text style={styles.infoText}>{note.client.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Category: </Text>
        <Text style={styles.infoText}>{note.category}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Note: </Text>
        <Text style={[styles.infoText, {maxWidth: '80%'}]}>{note.note}</Text>
      </View>
    </Animated.View>
  );
};

export default NoteContainer;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
  },

  headerContainer: {
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'flex-end',
  },

  infoText: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.DARK,
  },
  mainContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.MYNOTE_GREEN,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    paddingBottom: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 4,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DARK,
    width: 100,
  },
});
