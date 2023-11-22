import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type Props = {
  height?: string;
  width?: string;
  color?: string;
};

const TickIcon: React.FunctionComponent<Props> = ({color, height, width}) => {
  return (
    <Svg
      width={width ?? '16.787'}
      height={height ?? '13.589'}
      viewBox={`0 0 16.787 13.589`}>
      <Path
        id="Union_59"
        data-name="Union 59"
        d="M-838.4,
            11755.588h0l-5.594-5.6,
            2.4-2.4,
            3.2,
            3.2,
            8.793-8.793,
            2.4,
            2.4-11.19,
            11.189Z"
        transform="translate(844 -11742)"
        fill={color ?? '#fff'}
      />
    </Svg>
  );
};

export default TickIcon;

const styles = StyleSheet.create({});
