import { ViewStyle } from 'react-native';
import { FAB, FABProps, Portal } from 'react-native-paper';

export type FabProps = {
  style?: ViewStyle;
} & Omit<FABProps, 'style'>;

export function Fab({ label = '', ...props }: FabProps) {
  return (
    <Portal>
      <FAB
        label={label}
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          ...props.style,
        }}
        {...props}
      />
    </Portal>
  );
}
