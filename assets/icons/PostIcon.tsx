import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Svg, {Circle, Defs, G, Line, Path} from 'react-native-svg';

type Prop = {
  color?: string;
  height?: string;
  width?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
};

const PostIcon: React.FunctionComponent<Prop> = ({
  color,
  height,
  width,
  onPress,
  style,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[style]}
      disabled={isDisabled}>
      <Svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24">
        <G
          id="vuesax_outline_send-2"
          data-name="vuesax/outline/send-2"
          transform="translate(-300 -316)">
          <G id="send-2">
            <Path
              id="Vector"
              d="M11.84,19.274c-1.18,0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72C.83,10.274,0,8.6,0,7.424s.83-2.85,4.79-4.18L13.28.414c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98l-2.83,8.49C14.69,18.444,13.02,19.274,11.84,19.274ZM5.26,4.674C2.48,5.6,1.49,6.7,1.49,7.424s.99,1.82,3.77,2.74L7.78,11a.734.734,0,0,1,.47.47l.84,2.52c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77L17.42,5.5c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22Z"
              transform="translate(302.38 318.356)"
              fill={color ?? '#fff'}
            />
            <Path
              id="Vector-2"
              data-name="Vector"
              d="M.747,5.088a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06L3.8.218a.75.75,0,0,1,1.06,1.06l-3.58,3.59A.725.725,0,0,1,.747,5.088Z"
              transform="translate(309.362 325.313)"
              fill={color ?? '#fff'}
            />
            <Path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H24V24H0Z"
              transform="translate(300 316)"
              fill="none"
              opacity="0"
            />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default PostIcon;

const styles = StyleSheet.create({});
