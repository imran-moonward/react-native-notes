import {Picker} from '@react-native-picker/picker';
import React, {Ref, useEffect, useState} from 'react';
import {Dimensions, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import TickIcon from '../../assets/icons/TickIcon';
import {Colors} from '../constants/colors';

type ComponentProps = {
  pickerItems: Array<string> | Array<number>;
  onItemSelected: (item: string | number) => void;
  selectedItem?: string | number;
  isModalVisible: boolean;
  onSwipeComplete: () => void;
  onBackdropPress: () => void;
  onTickPress: () => void;
};

const WheelPickerModal: React.FunctionComponent<ComponentProps> = ({
  pickerItems,
  onItemSelected,
  selectedItem,
  isModalVisible,
  onBackdropPress,
  onSwipeComplete,
  onTickPress,
}) => {
  let initialValue;

  useEffect(() => {
    initialValue = pickerItems[0];
  }, []);

  return (
    <Modal
      useNativeDriverForBackdrop
      isVisible={isModalVisible}
      style={styles.modal}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onBackdropPress}
      animationIn="slideInUp">
      <View style={styles.modalContainer}>
        <Picker
          selectedValue={selectedItem ?? initialValue}
          onValueChange={(itemValue, itemIndex) => {
            onItemSelected(itemValue);
          }}>
          {pickerItems?.map((item, index) => {
            return (
              <Picker.Item label={item?.toString()} value={item} key={index} />
            );
          })}
        </Picker>
        <TouchableOpacity style={styles.modalCloseView} onPress={onTickPress}>
          <TickIcon />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default WheelPickerModal;
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  modalCloseView: {
    height: 45,
    width: 45,
    top: 10,
    right: 10,
    backgroundColor: Colors.MYNOTE_GREEN,
    zIndex: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zindex: 2,
    position: 'absolute',
  },
});
