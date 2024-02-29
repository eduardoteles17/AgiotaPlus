import { ReactNode } from 'react';
import { PaperProvider } from 'react-native-paper';

import { queryClient } from '@agiota-plus/core/react-query';
import { useTheme } from '@agiota-plus/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';

type ProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  const theme = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </QueryClientProvider>
  );
}
