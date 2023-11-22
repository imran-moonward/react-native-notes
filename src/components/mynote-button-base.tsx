import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';

type Props = {
  isLoading?: boolean;
  loadingColor?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  title: string;
  textStyle?: StyleProp<TextStyle>;
};

const MyNoteButtonBase = ({
  isLoading,
  loadingColor,
  onPress,
  style,
  title,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      {isLoading ? (
        <ActivityIndicator
          size={'small'}
          color={loadingColor ?? Colors.WHITE}
        />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MyNoteButtonBase;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: Colors.MYNOTE_GREEN,
    borderRadius: 12,
  },
  text: {
    color: Colors.WHITE,
  },
});
