import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../constants/colors';
import NoteHeader from '../components/note-header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import PostIcon from '../../assets/icons/PostIcon';
import {useFormik} from 'formik';
import {noteValidationSchema} from '../utils/validation-schemas';
import ValidationTextInput from '../components/validation-text-input';
import {CategoryType, Note} from '../types/general-types';
import {categoryList, clientList} from '../constants/constants';
import WheelPickerModal from '../components/WheelPickerModal';
import ItemPicker from '../components/item-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {note_key} from '../constants/storage-keys';
import NoteSavedModal from '../components/note-saved-modal';
import useNoteStore from '../store/notes-store';

type Props = {};

type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'NoteEditor'
>;

const NoteEditor = (props: Props) => {
  const route = useRoute<RouteProp<MainStackParamList, 'NoteEditor'>>();
  const navigation = useNavigation<NavigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedClient, setSelectedClient] = useState<string>(
    clientList[0].name,
  );
  const [selectedCategory, setSelectedCatrgory] =
    useState<CategoryType>('Goal Evidence');
  const [isCategoryPickerVisible, setIsCategoryPickerVisible] =
    useState<boolean>(false);
  const [isClientPickerVisible, setIsClientPickerVisible] =
    useState<boolean>(false);
  const [notesHeight, setNotesHeight] = useState<number>(100);
  const [isNoteSavedModalVisible, setIsNoteSavedModalVisible] =
    useState<boolean>(false);
  const {addRemoveNote} = useNoteStore();

  useEffect(() => {
    if (!isNoteSavedModalVisible) return;
    closeSavedModal();
  }, [isNoteSavedModalVisible]);

  const Formik = useFormik({
    initialValues: {
      note: '',
    },
    validationSchema: noteValidationSchema,
    onSubmit: async value => {
      createNote(value.note);
    },
  });

  const closeSavedModal = () => {
    setTimeout(() => {
      setIsCategoryPickerVisible(false);
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }, 1500);
  };

  const createNote = async (note: string) => {
    try {
      setIsLoading(true);
      const clientInfo = clientList.filter(
        client => client.name === selectedClient,
      );
      if (!clientInfo) return console.log('No Client Info');
      const toSaveNote: Note = {
        id: route.params.toCreateNoteId,
        client: clientInfo[0],
        category: selectedCategory,
        note: note,
      };
      addRemoveNote(toSaveNote);
      setIsNoteSavedModalVisible(true);
    } catch (error) {
      console.log('Error while saving notes', JSON.stringify(error, null, 3));
    } finally {
      setIsLoading(false);
    }
  };

  const closeClientPickerModal = () => {
    setIsClientPickerVisible(false);
  };

  const closeCategoryPickerModal = () => {
    setIsCategoryPickerVisible(false);
  };

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <NoteHeader
        title="Create Note"
        onBackPress={() => navigation.goBack()}
        rightIcon={
          isLoading ? (
            <View style={styles.iconStyle}>
              <ActivityIndicator size={'small'} color={Colors.WHITE} />
            </View>
          ) : (
            <PostIcon
              style={styles.iconStyle}
              onPress={() => Formik.submitForm()}
              isDisabled={isLoading}
            />
          )
        }
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <ItemPicker
          label="Client Name"
          text={selectedClient}
          onPress={() => setIsClientPickerVisible(true)}
          style={{marginBottom: 8}}
        />
        <ItemPicker
          label={'Category'}
          text={selectedCategory}
          onPress={() => setIsCategoryPickerVisible(true)}
        />
        <ValidationTextInput
          label="Note Details"
          value={Formik.values.note}
          onChangeText={text => Formik.setFieldValue('note', text)}
          errorMessage={Formik.errors.note}
          touched={Formik.touched.note}
          textInputStyle={{
            height: notesHeight,
            minHeight: 100,
            maxHeight: Dimensions.get('screen').height * 0.4,
          }}
          textAlignVertical={'top'}
          multiline
          autoFocus
          numberOfLines={10}
          onContentSizeChange={e =>
            setNotesHeight(e.nativeEvent.contentSize.height)
          }
          placeholder={'Start typing ....'}
        />
      </KeyboardAwareScrollView>
      <WheelPickerModal
        isModalVisible={isClientPickerVisible}
        onSwipeComplete={closeClientPickerModal}
        onBackdropPress={closeClientPickerModal}
        selectedItem={selectedClient}
        pickerItems={clientList.map(client => {
          return client.name;
        })}
        onTickPress={closeClientPickerModal}
        onItemSelected={item => {
          if (typeof item == 'number') {
            return;
          }
          setSelectedClient(item);
        }}
      />
      <WheelPickerModal
        isModalVisible={isCategoryPickerVisible}
        onSwipeComplete={closeCategoryPickerModal}
        onBackdropPress={closeCategoryPickerModal}
        selectedItem={selectedCategory}
        pickerItems={categoryList}
        onTickPress={closeCategoryPickerModal}
        onItemSelected={item => {
          if (typeof item == 'number') {
            return;
          }
          setSelectedCatrgory(item as CategoryType);
        }}
      />
      <NoteSavedModal
        isVisible={isNoteSavedModalVisible}
        backDropPress={closeSavedModal}
      />
    </SafeAreaView>
  );
};

export default NoteEditor;

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
  iconStyle: {
    backgroundColor: Colors.MYNOTE_GREEN,
    borderRadius: 32,
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.WHITE,
  },
});
