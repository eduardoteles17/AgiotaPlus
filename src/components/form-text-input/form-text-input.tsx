import { ComponentProps } from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export type FormTextInputProps = {
  name: string;
  label?: string;
  control: Control<any>;
} & Omit<ComponentProps<typeof TextInput>, 'value' | 'onChangeText' | 'onBlur'>;

export function FormTextInput({
  name,
  label = name,
  control,
  ...props
}: FormTextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState.error;
        return (
          <View>
            <TextInput
              {...props}
              ref={field.ref}
              label={label}
              error={hasError}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
            />
            {hasError && (
              <HelperText type="error">{fieldState.error?.message}</HelperText>
            )}
          </View>
        );
      }}
    />
  );
}
