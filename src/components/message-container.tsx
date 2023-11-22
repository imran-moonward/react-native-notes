import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../constants/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  message: string;
  messageStyle?: StyleProp<TextStyle>;
};

const MessageContainer = ({style, message, messageStyle}: Props) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Text style={[styles.textStyle, messageStyle]}>{message}</Text>
    </View>
  );
};

export default MessageContainer;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    borderColor: Colors.MYNOTE_GREEN_LIGHT,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
