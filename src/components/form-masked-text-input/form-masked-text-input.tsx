import { ComponentProps } from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';
import { HelperText, TextInput } from 'react-native-paper';

import { FormTextInput } from '@agiota-plus/components/form-text-input';

export type FormMaskedTextInputProps = {
  name: string;
  control: Control<any>;
} & Omit<ComponentProps<typeof FormTextInput>, 'render'> &
  Omit<MaskedTextInputProps, 'onChangeText'>;

export function FormMaskedTextInput({
  name,
  label = name,
  mask,
  control,
  ...props
}: FormMaskedTextInputProps) {
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
              render={props => {
                return (
                  <MaskedTextInput
                    {...props}
                    mask={mask}
                    onBlur={field.onBlur}
                    onChangeText={(_, rawText) => field.onChange(rawText)}
                  />
                );
              }}
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
