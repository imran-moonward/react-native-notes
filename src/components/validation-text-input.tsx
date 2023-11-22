import React, {Ref, useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import TickIcon from '../../assets/icons/TickIcon';
import {Colors} from '../constants/colors';

type ComponentProps = {
  label?: string;
  errorMessage?: string | undefined;
  onChangeText: (text: string) => void;
  containerStyle?: {};
  onFocus?: any;
  value: string | undefined;
  onBlur?: () => void;
  inputRef?: Ref<TextInput>;
  isDisabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  showChevron?: boolean;
  textInputStyle?: TextStyle;
  maxLength?: number | undefined;
  textInputContainerStyle?: any;
  textAlignVertical?: 'auto' | 'bottom' | 'center' | 'top';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoFocus?: boolean;
  style?: StyleProp<ViewStyle>;
  showTickIcon?: boolean;
  touched?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  placeHolderTextColor?: string;
  onPress?: () => void;
  onContentSizeChange?:
    | ((e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => void)
    | undefined;
};

const ValidationTextInput: React.FunctionComponent<ComponentProps> = ({
  label,
  errorMessage,
  onChangeText,
  containerStyle,
  value,
  onBlur,
  inputRef,
  onFocus,
  isDisabled,
  keyboardType,
  placeholder,
  placeHolderTextColor,
  textInputStyle,
  maxLength,
  textInputContainerStyle,
  autoCapitalize,
  autoFocus,
  style,
  showTickIcon,
  touched,
  secureTextEntry,
  multiline,
  numberOfLines,
  textAlignVertical,
  onPress,
  onContentSizeChange,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(secureTextEntry ?? false);
  return (
    <>
      <View style={[styles.mainContainer, style]}>
        {label && (
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{label}</Text>
          </View>
        )}
        <Pressable
          onPress={onPress ? onPress : null}
          style={[
            containerStyle ? containerStyle : null,
            errorMessage ? styles.errorContainer : null,
          ]}>
          <View style={[styles.textInputContainer, textInputContainerStyle]}>
            <TextInput
              editable={isDisabled ? false : true}
              style={[styles.textInput, textInputStyle]}
              onChangeText={onChangeText}
              value={value}
              onBlur={onBlur}
              ref={inputRef}
              placeholder={placeholder}
              placeholderTextColor={placeHolderTextColor ?? Colors.LIGHT_TEXT}
              keyboardType={keyboardType}
              maxLength={maxLength}
              autoCapitalize={autoCapitalize}
              onFocus={onFocus}
              autoFocus={autoFocus}
              secureTextEntry={isHidden}
              multiline={multiline}
              numberOfLines={numberOfLines}
              textAlignVertical={textAlignVertical}
              onContentSizeChange={onContentSizeChange}
            />
            {showTickIcon && <TickIcon />}
          </View>
        </Pressable>
        {errorMessage && touched && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorText}>{errorMessage ?? ''}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default ValidationTextInput;
const styles = StyleSheet.create({
  error: {
    backgroundColor: 'red',
  },

  errorContainer: {
    backgroundColor: Colors.INPUTBACKGROUND,
    borderRadius: 10,
  },
  errorMessageContainer: {
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.MAIN_ORANGE,
    borderRadius: 12,
    marginTop: 1.5,
  },
  errorText: {
    flexWrap: 'wrap',
    overflow: 'hidden',
    color: Colors.MAIN_ORANGE,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  labelText: {
    color: Colors.DARK,
    marginHorizontal: 5,
    fontSize: 16,
  },
  mainContainer: {
    borderRadius: 18,
    width: '100%',
    paddingTop: 10,
    padding: 5,
    rowGap: 4,
  },
  showButtonContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 8,
    height: 50,
    flex: 1,
    fontSize: 14,
    marginTop: 5,
    color: Colors.DARK,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.INPUTBACKGROUND,
    borderColor: Colors.LIGHT_BACKGROUND,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
});
