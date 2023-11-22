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
};

const CircleAddIcon: React.FunctionComponent<Prop> = ({
  color,
  height,
  width,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[style]}>
      <Svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24">
        <G
          id="vuesax_outline_add-circle"
          data-name="vuesax/outline/add-circle"
          transform="translate(-108 -252)">
          <G id="add-circle">
            <Path
              id="Vector"
              d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z"
              transform="translate(109.25 253.25)"
              fill={color ?? '#3acccc'}
            />
            <Path
              id="Vector-2"
              data-name="Vector"
              d="M8.75,1.5h-8A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h8A.755.755,0,0,1,9.5.75.755.755,0,0,1,8.75,1.5Z"
              transform="translate(115.25 263.25)"
              fill={color ?? '#3acccc'}
            />
            <Path
              id="Vector-3"
              data-name="Vector"
              d="M.75,9.5A.755.755,0,0,1,0,8.75v-8A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v8A.755.755,0,0,1,.75,9.5Z"
              transform="translate(119.25 259.25)"
              fill={color ?? '#3acccc'}
            />
            <Path
              id="Vector-4"
              data-name="Vector"
              d="M0,0H24V24H0Z"
              transform="translate(108 252)"
              fill="none"
              opacity="0"
            />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default CircleAddIcon;

const styles = StyleSheet.create({});
