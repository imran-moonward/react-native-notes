import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';

type Props = {
  label?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const ItemPicker = ({
  buttonStyle,
  style,
  onPress,
  label,
  textStyle,
  text,
}: Props) => {
  return (
    <View style={[style]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, buttonStyle]}
        onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemPicker;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.INPUTBACKGROUND,
    borderRadius: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 6,
    paddingHorizontal: 6,
  },

  labelContainer: {
    flexDirection: 'row',
  },

  labelText: {
    color: Colors.DARK,
    marginHorizontal: 5,
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    color: Colors.DARK,
  },
});
