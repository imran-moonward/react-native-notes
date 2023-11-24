import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {FadeInUp, FadeOutDown} from 'react-native-reanimated';

import {
  SnackbarSeverity,
  useSnackbarActions,
  useSnacks,
} from '../../store/snack-bar-store';
import {Colors} from '../../constants/colors';

const Snackbar = () => {
  const snacks = useSnacks();
  const {removeSnack} = useSnackbarActions();

  const applyBackgroundColor = (snackSeverity: SnackbarSeverity): string => {
    switch (snackSeverity) {
      case 'Warning': {
        return Colors.BASE_ORANGE;
      }
      case 'Success': {
        return Colors.MYNOTE_GREEN;
      }
      case 'Error': {
        return Colors.ERROR_RED;
      }
      case 'Info':
      default:
        return Colors.MYNOTE_GREEN;
    }
  };

  const renderSnacks = () => {
    return snacks.map((snack, index) => {
      return (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutDown}
          style={[
            styles.snack,
            {backgroundColor: applyBackgroundColor(snack.severity)},
          ]}
          key={index}>
          <Text style={styles.snackText}>{snack.message}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => removeSnack(snack)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      );
    });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.snackbarContainer}>
      {renderSnacks()}
    </SafeAreaView>
  );
};

export default Snackbar;

const styles = StyleSheet.create({
  snackbarContainer: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    top: 0,
    alignItems: 'center',
    paddingBottom: 10,
    gap: 5,
  },
  snack: {
    width: '90%',
    backgroundColor: Colors.ERROR_RED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  snackText: {
    color: Colors.WHITE,
    maxWidth: 300,
  },
  closeText: {
    color: Colors.WHITE,
  },
});
