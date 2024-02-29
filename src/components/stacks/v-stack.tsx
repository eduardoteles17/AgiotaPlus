import { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

export type VStackProps = {
  gap?: number;
  style?: ViewStyle;
  children: ReactNode;
};

export function VStack({ gap = 16, style, children }: VStackProps) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        gap,
        ...style,
      }}
    >
      {children}
    </View>
  );
}