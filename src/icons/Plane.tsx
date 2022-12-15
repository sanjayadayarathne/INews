import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const PlaneIcons = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 22 20'} fill="none" {...rest}>
    <Path
      d="M21 1 10 12M21 1l-7 20-4-9-9-4 20-7Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
