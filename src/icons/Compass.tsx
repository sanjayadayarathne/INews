import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CompassIcons = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 22 20'} fill="none" {...rest}>
    <Path
      d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m15.24 6.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
