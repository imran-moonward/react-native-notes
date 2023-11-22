import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import BackIcon from '../../assets/icons/BackIcon';
import {Colors} from '../constants/colors';

type Props = {
  onBackPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  rightIcon?: View | any;
  rightIconStyle?: StyleProp<ViewStyle>;
};

const NoteHeader = ({
  onBackPress,
  style,
  title,
  rightIcon,
  rightIconStyle,
}: Props) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity
        onPress={onBackPress}
        style={{
          padding: 8,
          borderRadius: 50,
          position: 'absolute',
          left: 0,
        }}>
        <BackIcon color={Colors.BLACK} />
      </TouchableOpacity>
      <Text
        style={{fontSize: 24, color: Colors.MYNOTE_GREEN, fontWeight: 'bold'}}>
        {title}
      </Text>
      {typeof rightIcon !== 'undefined' && (
        <View style={[styles.rightIcon, rightIconStyle]}>{rightIcon}</View>
      )}
    </View>
  );
};

export default NoteHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.WHITE,
    height: 50,
    flexDirection: 'row',
  },
  rightIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
