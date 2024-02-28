import {ReactNode} from "react";
import {PaperProvider} from "react-native-paper"
import {useTheme} from "@/styles/theme";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/core/react-query";

type ProviderProps = {
  children: ReactNode;
}

export function Providers({children}: ProviderProps) {
  const theme = useTheme()
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        {children}
      </PaperProvider>
    </QueryClientProvider>
  )
}