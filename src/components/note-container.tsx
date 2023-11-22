import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Note} from '../types/general-types';
import Animated, {FadeInLeft, StretchInX} from 'react-native-reanimated';
import {Colors} from '../constants/colors';

type Props = {
  note: Note;
  animationDelay: number;
};

const NoteContainer = ({note, animationDelay}: Props) => {
  return (
    <Animated.View
      entering={FadeInLeft.duration(300).delay(animationDelay * 300)}
      style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Client: </Text>
        <Text style={styles.infoText}>{note.client.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Category: </Text>
        <Text style={styles.infoText}>{note.category}</Text>
      </View>
      <Text style={[styles.infoText, {marginTop: 8}]}>{note.note}</Text>
    </Animated.View>
  );
};

export default NoteContainer;

const styles = StyleSheet.create({
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
