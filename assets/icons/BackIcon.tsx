import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, Defs, G, Line, Path} from 'react-native-svg';

type Prop = {
  color?: string;
  height?: string;
  width?: string;
};

const BackIcon: React.FunctionComponent<Prop> = ({color, height, width}) => {
  return (
    <Svg width={width ?? '30'} height={height ?? '30'} viewBox="0 0 30 30">
      <G
        id="vuesax_outline_arrow-left"
        data-name="vuesax/outline/arrow-left"
        transform="translate(-684 -188)">
        <G id="arrow-left" transform="translate(684 188)">
          <Path
            id="Vector"
            d="M8.522,17.047a.927.927,0,0,1-.662-.275L.272,9.184a.943.943,0,0,1,0-1.325L7.859.272A.937.937,0,0,1,9.184,1.6L2.259,8.522l6.925,6.925a.943.943,0,0,1,0,1.325A.907.907,0,0,1,8.522,17.047Z"
            transform="translate(3.441 6.478)"
            fill={color ?? '#2268f9'}
          />
          <Path
            id="Vector-2"
            data-name="Vector"
            d="M21.975,1.875H.938A.944.944,0,0,1,0,.938.944.944,0,0,1,.938,0H21.975a.944.944,0,0,1,.938.938A.944.944,0,0,1,21.975,1.875Z"
            transform="translate(3.65 14.063)"
            fill={color ?? '#2268f9'}
          />
          <Path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H30V30H0Z"
            fill="none"
            opacity="0"
          />
        </G>
      </G>
    </Svg>
  );
};

export default BackIcon;

const styles = StyleSheet.create({});
