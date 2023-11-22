import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import CircleAddIcon from '../../assets/icons/CircleAddIcon';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
};

const AppHeader = ({style, title, onAddPress}: Props) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: Colors.MYNOTE_GREEN,
          flex: 1,
        }}>
        {title}
      </Text>
      <View style={styles.iconContainer}>
        <CircleAddIcon onPress={() => onAddPress()} />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    height: 56,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
