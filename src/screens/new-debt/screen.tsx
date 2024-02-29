import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';

import { FormMaskedTextInput } from '@agiota-plus/components/form-masked-text-input';
import { FormTextInput } from '@agiota-plus/components/form-text-input';
import { VStack } from '@agiota-plus/components/stacks';
import { parseCurrency } from '@agiota-plus/utils/parse-curency';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string(),
  amount: z.coerce.string().transform(value => {
    return parseFloat(parseCurrency(value));
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function NewDebtScreen() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmitHandler = form.handleSubmit(values => {
    console.log(values);
  });

  return (
    <VStack
      style={{
        padding: 16,
      }}
    >
      <FormTextInput
        name="name"
        label="Nome"
        mode="outlined"
        returnKeyType="next"
        onSubmitEditing={() => {
          form.getValues('amount');
        }}
        control={form.control}
      />
      <FormMaskedTextInput
        type="currency"
        options={{
          prefix: '$',
          decimalSeparator: '.',
          groupSeparator: ',',
          precision: 2,
        }}
        label="Total"
        name="amount"
        mode="outlined"
        keyboardType="numeric"
        control={form.control}
      />
      <Button mode="contained" onPress={onSubmitHandler}>
        Salvar
      </Button>
    </VStack>
  );
}
