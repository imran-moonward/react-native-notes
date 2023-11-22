import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import TickIcon from '../../assets/icons/TickIcon';
import {Colors} from '../constants/colors';

type Props = {
  isVisible: boolean;
  modalClick: () => void;
  backDropPress?: () => void;
};

const NoteSavedModal: React.FunctionComponent<Props> = ({
  isVisible,
  modalClick,
  backDropPress,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver
      onBackdropPress={backDropPress}
      propagateSwipe>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.tickContainer} onPress={modalClick}>
            <TickIcon height="55" width="55" color={Colors.MYNOTE_GREEN} />
          </TouchableOpacity>
          <Text
            style={[{fontSize: 16, color: Colors.DARK, fontWeight: 'bold'}]}>
            Note Saved
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default NoteSavedModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.6,
    borderRadius: Dimensions.get('window').height * 0.03,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tickContainer: {
    height: 100,
    width: 100,
    borderWidth: 1.5,
    borderColor: Colors.MYNOTE_GREEN,
    marginBottom: 10,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
