import { ReactNode } from "react";
import {PaperProvider} from "react-native-paper"
import {useTheme} from "@/styles/theme";

type ProviderProps = {
  children: ReactNode;
}

export function Providers({children}: ProviderProps) {
  const theme = useTheme()
  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  )
}